const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const dbPath = path.join(__dirname, '../data/db.json');

async function readDB() {
  const data = await fs.readFile(dbPath, 'utf-8');
  return JSON.parse(data);
}

async function writeDB(data) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}

async function getAllTransactions() {
  const db = await readDB();
  return db.transactions;
}

async function createTransaction(transaction) {
  const db = await readDB();

  const newTransaction = {
    id: uuidv4(),
    ...transaction
  };

  db.transactions.push(newTransaction);
  await writeDB(db);

  return newTransaction;
}

async function getTransactionById(id) {
  const db = await readDB();
  return db.transactions.find(t => t.id === id);
}

async function updateTransaction(id, updatedData) {
  const db = await readDB();

  const index = db.transactions.findIndex(t => t.id === id);
  if (index === -1) return null;

  db.transactions[index] = { ...db.transactions[index], ...updatedData };
  await writeDB(db);

  return db.transactions[index];
}

async function deleteTransaction(id) {
  const db = await readDB();

  const index = db.transactions.findIndex(t => t.id === id);
  if (index === -1) return null;

  const deleted = db.transactions.splice(index, 1);
  await writeDB(db);

  return deleted[0];
}

module.exports = {
  getAllTransactions,
  createTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction
};
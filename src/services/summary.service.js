const fs = require('fs/promises');
const path = require('path');

const dbPath = path.join(__dirname, '../data/db.json');

async function getSummary() {
  const data = await fs.readFile(dbPath, 'utf-8');
  const db = JSON.parse(data);

  let income = 0;
  let expense = 0;

  db.transactions.forEach(t => {
    if (t.type === 'income') income += Number(t.amount);
    if (t.type === 'expense') expense += Number(t.amount);
  });

  return {
    totalIncome: income,
    totalExpense: expense,
    balance: income - expense
  };
}

module.exports = { getSummary };
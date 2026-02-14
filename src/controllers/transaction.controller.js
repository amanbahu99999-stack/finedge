const service = require('../services/transaction.service');

exports.getAll = async (req, res) => {
  const data = await service.getAllTransactions();
  res.json(data);
};

exports.create = async (req, res) => {
  const transaction = await service.createTransaction(req.body);
  res.status(201).json(transaction);
};

exports.getOne = async (req, res) => {
  const transaction = await service.getTransactionById(req.params.id);
  if (!transaction) return res.status(404).json({ message: 'Not found' });
  res.json(transaction);
};

exports.update = async (req, res) => {
  const updated = await service.updateTransaction(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Not found' });
  res.json(updated);
};

exports.delete = async (req, res) => {
  const deleted = await service.deleteTransaction(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted successfully' });
};
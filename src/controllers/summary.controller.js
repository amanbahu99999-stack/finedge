const service = require('../services/summary.service');

exports.getSummary = async (req, res) => {
  const summary = await service.getSummary();
  res.json(summary);
};
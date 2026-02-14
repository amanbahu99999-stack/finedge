const express = require('express');
const transactionRoutes = require('./routes/transaction.routes');
const summaryRoutes = require('./routes/summary.routes');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: "Server is running 🚀" });
});

app.use('/transactions', transactionRoutes);
app.use('/summary', summaryRoutes);

module.exports = app;
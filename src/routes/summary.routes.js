const express = require('express');
const router = express.Router();
const controller = require('../controllers/summary.controller');

router.get('/', controller.getSummary);

module.exports = router;
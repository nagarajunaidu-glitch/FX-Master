const express = require('express');
const router = express.Router();
const treasuryController = require('../controllers/treasuryController');

// GET /api/treasury/metrics?timeframe=7d
router.get('/metrics', treasuryController.getMetrics);

module.exports = router;

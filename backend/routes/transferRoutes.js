const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transferController');

// POST /api/transfers
router.post('/', transferController.createTransfer);

module.exports = router;

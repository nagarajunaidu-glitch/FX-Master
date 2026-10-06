const express = require('express');
const router = express.Router();
const fxController = require('../controllers/fxController');

// GET /api/fx/rates?base=USD
router.get('/rates', fxController.getRates);

// GET /api/fx/convert?amount=5000&from=USD&to=EUR
router.get('/convert', fxController.convertCurrency);

module.exports = router;

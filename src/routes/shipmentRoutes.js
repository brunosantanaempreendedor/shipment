const express = require('express');
const shipmentController = require('../controllers/shipmentController');
const router = express.Router();

router.post('/calculate-shipping', shipmentController.calculateShipping);

module.exports = router;
const express = require('express');
const shipmentController = require('../controllers/shipmentController');
const router = express.Router();

router.post('/calculate-shipping', shipmentController.calculateShipping);
router.post('/cart', shipmentController.cart);
router.post('/tracking', shipmentController.tracking);
router.post('/checkout', shipmentController.checkout);

module.exports = router;
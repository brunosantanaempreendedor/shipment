const shipmentService = require('../services/shipmentService');

class ShipmentController {
    async calculateShipping(req, res) {
        try {
            const payload = req.body;
            const result = await shipmentService.calculateShipping(payload);

            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ShipmentController();
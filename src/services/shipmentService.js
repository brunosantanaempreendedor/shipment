const axios = require('axios');
const config = require('../config');

class ShipmentService {
    async calculateShipping(payload) {
        try {
            const response = await axios.post(config.melhorEnvioApiUrl, payload, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${config.melhorEnvioApiToken}`,
                    'Content-Type': 'application/json',
                    'User-Agent': 'Sua Aplicação (email para contato técnico)',
                },
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ShipmentService();
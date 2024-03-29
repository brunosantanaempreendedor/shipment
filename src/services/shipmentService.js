const axios = require('axios');
const config = require('../config');

class ShipmentService {
    async calculateShipping(payload) {
        try {
            const response = await axios.post(config.melhorEnvioApiUrl + 'shipment/calculate', payload, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${config.melhorEnvioApiToken}`,
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async cart(payload) {
        try {
            const response = await axios.post(config.melhorEnvioApiUrl + 'cart', payload, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${config.melhorEnvioApiToken}`,
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async tracking(payload) {
        try {
            const response = await axios.post(config.melhorEnvioApiUrl + 'shipment/tracking', payload, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${config.melhorEnvioApiToken}`,
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async checkout(payload) {
        try {
            const response = await axios.post(config.melhorEnvioApiUrl + 'shipment/checkout', payload, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${config.melhorEnvioApiToken}`,
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async print(payload) {
        try {
            const response = await axios.post(config.melhorEnvioApiUrl + 'shipment/print', payload, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${config.melhorEnvioApiToken}`,
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async generate(payload) {
        try {
            const response = await axios.post(config.melhorEnvioApiUrl + 'shipment/generate', payload, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${config.melhorEnvioApiToken}`,
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ShipmentService();
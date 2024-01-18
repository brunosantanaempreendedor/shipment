const express = require('express');
const bodyParser = require('body-parser');
const shipmentRoutes = require('./routes/shipmentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/shipment', shipmentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
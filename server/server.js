const express = require('express');
const app = express();
const cors = require('cors');
const warehouseIdRoute = require('./routes/warehouseIdRoute');
const inventoryIdRoute = require('./routes/inventoryIdRoute');
const inventoryRoute = require('./routes/inventoryRoute');

// allows use of .env
require('dotenv').config();
const port = process.env.PORT || 8080;

// request body middleware
app.use(express.json());

// allows cors
app.use(cors());

// warehouse id route
app.use('/warehouse', warehouseIdRoute);

// inventories
app.use('/inventory', inventoryRoute);

// inventory id route
app.use('/warehouse/:warehouseId/inventory', inventoryIdRoute);

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`);
    console.log('Press CTRL + C to stop server');
});
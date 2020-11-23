const express = require('express');
const app = express();
const cors = require('cors');
const warehouseIdRoute = require('./routes/warehouseIdRoute')

// allows use of .env
require('dotenv').config();
const port = process.env.PORT

// request body middleware
app.use(express.json());

// allows cors
app.use(cors());

// warehouse id route
app.use('/:warehouseId', warehouseIdRoute)

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`);
    console.log('Press CTRL + C to stop server');
})
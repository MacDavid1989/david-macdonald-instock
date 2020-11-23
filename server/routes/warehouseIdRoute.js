const fs = require('fs')
const express = require('express');
const router = express.Router();
const warehouses = './data/warehouses.json';
const inventories = './data/inventories.json'

// GET /:warehouseId
router.get('/', (req,res) => {
    const warehousesData = fs.readFileSync(warehouses);
    const inventoriesData = fs.readFileSync(inventories);

} )

module.exports = router;
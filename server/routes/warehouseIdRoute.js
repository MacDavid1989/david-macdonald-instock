const fs = require('fs')
const express = require('express');
const router = express.Router();
const warehouses = './data/warehouses.json';
const inventories = './data/inventories.json'

// GET /warehouse/:warehouseId
router.get('/:warehouseId', (req,res) => {
    const warehousesData = fs.readFileSync(warehouses);
    const inventoriesData = fs.readFileSync(inventories);

    const warehousesDataParsed = JSON.parse(warehousesData);
    const inventoriesDataParsed = JSON.parse(inventoriesData);

    const warehouseId = req.params.warehouseId;

    const warehouse = warehousesDataParsed.find(warehouse => warehouse.id === warehouseId)
    const inventory = inventoriesDataParsed.filter(inventoryItem => inventoryItem.warehouseID === warehouseId)

    if(warehouse === undefined){
        return res.status(404).json('Warehouse not found.')
    }
    return res.status(200).json({warehouse: warehouse, inventory: inventory})
} )

module.exports = router;
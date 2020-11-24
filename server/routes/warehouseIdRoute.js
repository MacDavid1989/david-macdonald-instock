const fs = require('fs')
const express = require('express');
const router = express.Router();
const warehouseFile = './data/warehouses.json';
const inventories = './data/inventories.json'

// GET /:warehouseId
router.get('/:warehouseId', (req,res) => {
    const warehousesData = fs.readFileSync(warehouseFile);
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

// POST / CREATE A NEW WAREHOUSE
router.post('/create', (req, res) => {
    //get the list of warehouses
    const warehouseList = getAllWarehouses();

    //make the new warehouse
    const newWarehouse = createNewWarehouse(req.body);

    //add the new warehouse to the list
    warehouseList.push(newWarehouse);

    //update the file
    fs.writeFileSync(warehouseFile, JSON.stringify(warehouseList));

    //send response
    res.status(200).josn({warehouses: warehouseList});
})


//Method to get all warehouses from JSON FILE
function getAllWarehouses(){
    const warehousesData = fs.readFileSync(warehouseFile);
    return JSON.parse(warehousesData);
}

function createNewWarehouse({name, address, city, country, contactName, position, phoneNumber, email}){
    const newWarehouse = {
        "name": name, 
        "address": address, 
        "city": city, 
        "country": country, 
        "contactName": contactName, 
        "position": position, 
        "phoneNumber": phoneNumber, 
        "email": email
    }

    return newWarehouse;
}


module.exports = router;
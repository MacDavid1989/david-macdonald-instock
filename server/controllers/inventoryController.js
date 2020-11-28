const inventory = require ('../models/inventoryModel.js');
const fs = require('fs')

const inventoryFile = ""./data/inventories.json";

// <<<<<<<<<< ATTACH ROUTES >>>>>>>>>> \\

function createNewInventory (req, res) {
    inventory = { 
        warehouseId:req.body.warehouseId,
        warehouseName:req.body.warehouseName,
        itemName: req.body.itemName,
        description: req.body.description,
        category:req.body.category,
        status:req.body.status,
        quantity:req.body.quantity};


        fs.writeFileSync(warehouseFile, JSON.stringify(warehouseList));

        res.status(201).send("added product");
}

// GET / all inventory items
const readFileSync = () => {
    return JSON.parse(fs.readFileSync('./data/inventories.json'))
}

//get all inventory
getAllInventory = (req, res) => {
    const data = readFileSync();
    res.status(200).json(data)
}

module.exports = {
    createNewInventory,
    getAllInventory
}
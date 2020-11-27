const inventory = require ('../models/inventoryModel.js');

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

        res.status(201).json (inventory.add(newInventory));
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
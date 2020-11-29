const inventory = require("../models/inventoryModel.js");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const inventoryFile = "./data/inventories.json";

// <<<<<<<<<< ATTACH ROUTES >>>>>>>>>> \\

function createNewInventory(req, res) {
  //get all items
  items = readFileSync();

  //make new item
  const inventory = {
    id: uuidv4(),
    warehouseID: req.body.warehouseId,
    warehouseName: req.body.warehouseName,
    itemName: req.body.itemName,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status,
    quantity: req.body.quantity,
  };

  //add new item to array
  items.push(inventory);

  //write it back to the file
  fs.writeFileSync(inventoryFile, JSON.stringify(items));
  
  //talk back to client
  res.status(201).send("added product");
}

// GET / all inventory items
const readFileSync = () => {
  return JSON.parse(fs.readFileSync(inventoryFile));
};

//get all inventory
getAllInventory = (req, res) => {
  const data = readFileSync();
  res.status(200).json(data);
};

// delete inventory
deleteInventory = (req, res) => {
  const data = readFileSync();
  const inventory = data.find(item => item.id === req.params.inventoryId);
  const inventoryIndex = data.indexOf(inventory);
  if(inventoryIndex === -1 ) {
    return res.status(404).json("Inventory does not exist")
  }
  data.splice(inventoryIndex, 1);
    //write it back to the file
  fs.writeFileSync(inventoryFile, JSON.stringify(data, null, 2));
  res.status(200).json(data);
}

module.exports = {
  createNewInventory,
  getAllInventory,
  deleteInventory
};

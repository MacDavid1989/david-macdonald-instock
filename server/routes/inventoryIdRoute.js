const express = require('express');
const router = express.Router();
const inventoryIdControllers = require('../controllers/inventoryIdController');
const inventoryFile = "../data/inventories.json";


// GET /warehouse/:warehouseId/inventory/:itemId
router.get('/:itemId', inventoryIdControllers.getWarehouseInventory);

router.put("/:itemId/update", (req, res) => {
    let inventoryList = getAllInventory();
    if(checkInput(req.body)){
        inventoryList.forEach(data => {
            if(data.id == req.params.inventoryId){
                let newData = createNewInventory(data.id, data);
                if(newData){
                    data = newData;
                    res.status(200).json({ inventory: inventoryList });
                }else{
                    res.status(406).json("Input not accepted");
                }
                return;
            }
        })
    }
});

router.delete("/:itemId", (req,res) => {
    const inventoryList = getAllInventory();
    let didDelete = false;
    for(let i = 0; i < inventoryList.length; i++){
        if(warehouseList[i].id == req.params.inventoryId){
            didDelete = true;
            inventoryList.splice(i, 1);
        }
    }

    if(didDelete){
        res.status(200).json({ inventory: inventoryList })
    }else{
        res.status(400).send("bad request, inventory does not exist");
    }
})

//Method to get all warehouses from JSON FILE
function getAllInventory() {
    const inventoryData = fs.readFileSync(inventoryFile);
    return JSON.parse(inventoryData);
  }
  
  //creates a new warehosue
  function createNewInventory(newId, {
    warehouseID,
    warehouseName,
    itemName,
    description,
    category,
    status,
    quantity
}) {
    //check each input
    if (checkInput(warehouseID, warehouseName, itemName, description, category, status, quantity)) {
    const newWarehouse = {
        id: newId,
        warehouseID: warehouseID,
        warehouseName: warehouseName,
        itemName: itemName,
        description: description,
        category: category,
        status: status,
        quantity: quantity
    };
    return newWarehouse;
    }

    return null;
}

function checkInput({
    warehouseID,
    warehouseName,
    itemName,
    description,
    category,
    status,
    quantity
}) {
    const regexQuantity = /[a-zA-Z]/g;

    return (
        warehouseID.trim() &&
        warehouseName.trim() &&
        itemName.trim() &&
        description.trim() &&
        category.trim() &&
        status.trim() &&
        !regexQuantity.test(quantity) &&
        quantity.trim()
    );
}

module.exports = router;
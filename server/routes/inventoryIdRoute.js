const express = require('express');
const fs = require('fs')
const router = express.Router();
const inventoryIdControllers = require('../controllers/inventoryIdController');
const inventoryFile = "./data/inventories.json";


// GET /warehouse/:warehouseId/inventory/:itemId
router.get('/:itemId', inventoryIdControllers.getWarehouseInventory);

router.put("/:itemId/update", (req, res) => {
    let inventoryList = getAllInventory();
    if(checkInput(req.body)){
        inventoryList.forEach((data, i)=> {
            if(data.id == req.body.id){
                let newData = createNewInventory(req.body.id, req.body);
                if(newData){
                    data = newData;
                    inventoryList.splice(i,1,data)
                    console.log(...inventoryList)
                    fs.writeFile('./data/inventories.json', JSON.stringify([...inventoryList]), (err) => console.log('this is the error :', err))
                    return res.status(200).json({ item: data });
                }else{
                    return res.status(406).json("Input not accepted");
                }
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
  function createNewInventory(newId, item) {
    //check each input
    
    
    if (checkInput(item)) {
    const newItem = {
        id: newId,
        warehouseID: item.warehouseID,
        warehouseName: item.warehouseName,
        itemName: item.itemName,
        description: item.description,
        category: item.category,
        status: item.status,
        quantity: item.quantity
    };
    return newItem;
    }

    return null;
}

function checkInput(item) {
    const regexQuantity = /[a-zA-Z]/g;
    return (
        item.warehouseID.trim() &&
        item.warehouseName.trim() &&
        item.itemName.trim() &&
        item.description.trim() &&
        item.category.trim() &&
        item.status.trim() &&
        !regexQuantity.test(item.quantity) &&
        item.quantity
    );
}

module.exports = router;
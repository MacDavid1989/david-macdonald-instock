const express = require('express');
const router = express.Router();
const inventoryIdControllers = require('../controllers/inventoryIdController');


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
    name,
    address,
    city,
    country,
    contactName,
    position,
    phoneNumber,
    email
  }) {
    //check each input
    if (checkInput(name, address, city, country, contactName, position, phoneNumber, email)) {
      const newWarehouse = {
        id: newId,
        name: name,
        address: address,
        city: city,
        country: country,
        contact: {
          name: createRoute,
          position: position,
          phone: phoneNumber,
          email: email,
        },
      };
      return newWarehouse;
    }
  
    //if input is bad return null
    return null;
  }
  
  //check inputs for creating new warehouse
  function checkInput({
    name,
    address,
    city,
    country,
    contactName,
    position,
    phoneNumber,
    email
  }) {
    //regular expressions
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regexPhone = /[a-zA-Z]/g;
  
    return (
      name.trim() &&
      address.trim() &&
      city.trim() &&
      country.trim() &&
      contactName.trim() &&
      position.trim() &&
      regexEmail.test(email) &&
      !regexPhone.test(phoneNumber) &&
      phoneNumber.length >= 10
    );
  }

module.exports = router;
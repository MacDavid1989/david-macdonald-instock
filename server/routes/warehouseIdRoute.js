const fs = require("fs");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const warehouseFile = "./data/warehouses.json";
const warehouseControllers = require('../controllers/warehouseIdController');



router.get("/", warehouseControllers.getAllWarehouses);

// GET / SEARCH FOR WAREHOUSE ON ID
router.get("/:warehouseId", warehouseControllers.getWarehouseById);

// POST / CREATE A NEW WAREHOUSE
router.post("/create", warehouseControllers.createNewWarehouse);

// PUT / UPFATE WAREHOUSE ON ID
router.put("/:warehouseId/update", warehouseControllers.updateWarehouse);

router.delete("/:warehouseId", warehouseControllers.deleteWarehouse);

//Method to get all warehouses from JSON FILE
function getAllWarehouses() {
  const warehousesData = fs.readFileSync(warehouseFile);
  return JSON.parse(warehousesData);
}

//creates a new warehosue
function createNewWarehouse(newId, {
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

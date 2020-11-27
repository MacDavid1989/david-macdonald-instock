const warehouseFile = "./data/warehouses.json";
const inventories = "./data/inventories.json";

const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const readFileSync = () => {
  return JSON.parse(fs.readFileSync(warehouseFile));
};

//return all warehouses
getAllWarehouses = (_req, res) => {
  const data = readFileSync();
  res.status(200).json(data);
};

//search for warehouse by id
getWarehouseById = (req, res) => {
  const warehousesData = fs.readFileSync(warehouseFile);
  const inventoriesData = fs.readFileSync(inventories);

  const warehousesDataParsed = JSON.parse(warehousesData);
  const inventoriesDataParsed = JSON.parse(inventoriesData);

  const warehouseId = req.params.warehouseId;

  const warehouse = warehousesDataParsed.find(
    (warehouse) => warehouse.id === warehouseId
  );
  const inventory = inventoriesDataParsed.filter(
    (inventoryItem) => inventoryItem.warehouseID === warehouseId
  );

  if (warehouse === undefined) {
    return res.status(404).json("Warehouse not found.");
  }
  return res.status(200).json({ warehouse: warehouse, inventory: inventory });
};

//create a new warehouse
createNewWarehouse = (req, res) => {
  //get the list of warehouses
  const warehouseList = getAllWarehouses();

  //make the new warehouse
  const newWarehouse = createNewWarehouse(uuidv4(), req.body);

  //if there is a good input
  if (newWarehouse) {
    //add the new warehouse to the list
    warehouseList.push(newWarehouse);

    //update the file
    fs.writeFileSync(warehouseFile, JSON.stringify(warehouseList));

    //send response
    res.status(200).json({ warehouses: warehouseList });
  }
  res.status(406).json("Input not accepted");
};

//update warehouse on id
updateWarehouse = (req, res) => {
  //get the list of warehouses
  let warehouseList = getAllWarehouses();
  if (checkInput(req.body)) {
    warehouseList.forEach((data) => {
      if (data.id == req.params.warehouseId) {
        let newData = createNewWarehouse(data.id, data);
        if (newData) {
          data = newData;
          res.status(200).json({ warehouses: warehouseList });
        } else {
          res.status(406).json("Input not accepted");
        }
        return;
      }
    });
  }
};

deleteWarehouse = (req, res) => {
  const warehouseList = JSON.parse(fs.readFileSync(warehouseFile));
  let didDelete = false;
  for (let i = 0; i < warehouseList.length; i++) {
    if (warehouseList[i].id == req.params.warehouseId) {
      didDelete = true;
      warehouseList.splice(i, 1);
    }
  }

  if (didDelete) {
    fs.writeFileSync(warehouseFile, JSON.stringify(warehouseList));
    res.status(200).json({ warehouses: warehouseList });
  } else {
    res.status(400).send("bad request, warehouse does not exist");
  }
};

// HELPER METHODS
//Method to get all warehouses from JSON FILE
function getAllWarehouses() {
  const warehousesData = fs.readFileSync(warehouseFile);
  return JSON.parse(warehousesData);
}

//creates a new warehouse
function createNewWarehouse(
  newId,
  { name, address, city, country, contactName, position, phoneNumber, email }
) {
  //check each input
  if (
    checkInput(
      name,
      address,
      city,
      country,
      contactName,
      position,
      phoneNumber,
      email
    )
  ) {
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
  email,
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

module.exports = {
  getAllWarehouses,
  getWarehouseById,
  createNewWarehouse,
  updateWarehouse,
  deleteWarehouse,
};

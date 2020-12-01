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
  const warehouseList = readFileSync();

  //make the new warehouse
  const newWarehouseObj = newWarehouse(uuidv4(), req.body);

  //if there is a good input
  if (newWarehouseObj) {
    //add the new warehouse to the list
    warehouseList.push(newWarehouseObj);

    //update the file
    fs.writeFileSync(warehouseFile, JSON.stringify(warehouseList));

    //send response
    return res.status(200).json({ warehouses: warehouseList });
  }
  return res.status(406).json("Input not accepted");
};

//update warehouse on id
updateWarehouse = (req, res) => {
  //get the list of warehouses
  let warehouseList = readFileSync();
  if (checkInput(req.body)) {
    warehouseList.forEach((data, i) => {
      if (data.id == req.body.id) {

        let newData = newWarehouse(data.id, req.body);
        if (newData) {
          data = newData;
          warehouseList.splice(i,1,data)
          fs.writeFile('./data/warehouses.json', JSON.stringify([...warehouseList]), (err) => console.log('this is the error :', err))

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
function newWarehouse(
  newId,
  warehouse
) {
  //check each input

  if (
    checkInput(warehouse)
  ) {
    const newWarehouse = {
      id: newId,
      name: warehouse.name,
      address: warehouse.address,
      city: warehouse.city,
      country: warehouse.country,
      contact: {
        name: warehouse.contact.name,
        position: warehouse.contact.position,
        phone: warehouse.contact.phone,
        email: warehouse.contact.email,
      },
    };

    return newWarehouse;
  }

  //if input is bad return null
  return null;
}

//check inputs for creating new warehouse
function checkInput(warehouse) {
  //regular expressions
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const regexPhone = /[a-zA-Z]/g;

  return (
    warehouse.name.trim() &&
    warehouse.address.trim() &&
    warehouse.city.trim() &&
    warehouse.country.trim() &&
    warehouse.contact.name.trim() &&
    warehouse.contact.position.trim() &&
    regexEmail.test(warehouse.contact.email) &&
    !regexPhone.test(warehouse.contact.phone) &&
    warehouse.contact.phone.length >= 10
  );
}

module.exports = {
  getAllWarehouses,
  getWarehouseById,
  createNewWarehouse,
  updateWarehouse,
  deleteWarehouse,
};

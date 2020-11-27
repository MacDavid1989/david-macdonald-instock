const warehouseFile = '../data/warehouses.json';
const inventories = "../data/inventories.json";

const readFileSync = () => {
    return JSON.parse(fs.readFileSync(warehouseFile))
}

//return all warehouses
getAllWarehouses = (_req, res) =>{
        const data = readFileSync();
        console.log(data);
        res.status(200).json(data)
}

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
  }

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
      res.status(200).josn({ warehouses: warehouseList });
    }
    res.status(406).json("Input not accepted");
  }

module.exports = {
    getAllWarehouses,
    getWarehouseById,
    createNewWarehouse
}
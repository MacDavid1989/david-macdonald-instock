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

// PUT / UPDATE WAREHOUSE ON ID
router.put("/:warehouseId/update", warehouseControllers.updateWarehouse);

// DELETE / DELETE WAREHOUSE ON ID
router.delete("/:warehouseId", warehouseControllers.deleteWarehouse);

module.exports = router;

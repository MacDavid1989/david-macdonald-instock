const express = require("express");
const router = express.Router();
const warehouseControllers = require('../controllers/warehouseIdController');

//GET / GET ALL WAREHOUSES
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

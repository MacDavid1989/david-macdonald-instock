const express = require('express');
const router = express.Router();
const inventoryIdControllers = require('../controllers/inventoryIdController');


// GET /warehouse/:warehouseId/inventory/:itemId
router.get('/:itemId', inventoryIdControllers.getWarehouseInventory);

module.exports = router;

const express = require('express');
const router = express.Router();
const inventoryController = require ('../controllers/inventoryController');


router.get("/", inventoryController.getAllInventory);

// <<<<<<<<<< POST >>>>>>>>>> \\

router.post ('/', inventoryController.createNewInventory);

router.delete('/:inventoryId', inventoryController.deleteInventory);
module.exports = router;
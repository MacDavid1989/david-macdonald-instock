
const express = require('express');
const router = express.Router();
const inventoryController = require ('../controllers/inventoryController');


router.get("/", inventoryController.getAllInventory);

// <<<<<<<<<< POST >>>>>>>>>> \\

router.post ('/', inventoryController.createNewInventory);


module.exports = router;
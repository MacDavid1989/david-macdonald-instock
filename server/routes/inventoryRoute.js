const fs = require('fs')
const express = require('express');
const router = express.Router();
const inventories = './data/inventories.json'

// GET / all inventory items
const readFileSync = () => {
    return JSON.parse(fs.readFileSync(inventories))
}

router.get("/", (req, res) => {
    const data = readFileSync();
    res.status(200).json(data)
})

module.exports = router;
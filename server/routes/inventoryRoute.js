const fs = require('fs')
const express = require('express');
const router = express.Router();

// GET / all inventory items
const readFileSync = () => {
    return JSON.parse(fs.readFileSync('./data/inventories.json'))
}

router.get("/", (req, res) => {
    const data = readFileSync();
    res.status(200).json(data)
})

module.exports = router;
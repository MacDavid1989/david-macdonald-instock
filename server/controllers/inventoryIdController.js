const inventories = './data/inventories.json'
const fs = require('fs')

getWarehouseInventory = (req,res) => {
    const inventoriesData = fs.readFileSync(inventories);

    const inventoriesDataParsed = JSON.parse(inventoriesData);

    const itemId = req.params.itemId;

    const inventoryItem = inventoriesDataParsed.filter(inventoryItem => inventoryItem.id === itemId)

    if(inventoryItem[0] === undefined){
        return res.status(404).json('Item not found.')
    }
    return res.status(200).json({inventoryItem: inventoryItem})
} 

module.exports = {
    getWarehouseInventory
}
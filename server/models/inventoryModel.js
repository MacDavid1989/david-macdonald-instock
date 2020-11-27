const { v4: uuid } = require("uuid");
const fs = require ('fs');
const inventoryFilePath = '../data/inventories.json';


function add (data) {
    const inventory = readInventory();
    const newInventory = [
        {
            id: uuid(),
            warehouseId:data.warehouseId,
            warehouseName:data.warehouseName,
            itemName: data.itemName,
            description: data.description,
            category:data.category,
            status:data.status,
            quantity:data.quantity
        }
    ];

    inventory.push(newInventory);
    fs.writeFileSync(inventoryFilePath, JSON.stringify(inventory));

    return inventory;
}

module.exports = {
    add
}
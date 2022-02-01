

function furnitureWoods(tableQuantity,chareQuantity,badQuantity) {
    const woodPerTable = 4
    const woodPerChare = 8
    const woodPerBad = 20

    const totalWoodsForTable = tableQuantity * woodPerTable;
    const totalWoodsForChare = chareQuantity * woodPerChare;
    const totalWoodsForBad = badQuantity * woodPerBad
    const totalWood = totalWoodsForBad + totalWoodsForChare + totalWoodsForTable
    return totalWood

    
    
}



const tableQuantity = 1;
const chareQuantity = 10;
const badQuantity = 3

const result = furnitureWoods(tableQuantity, chareQuantity, badQuantity)
console.log(result,"cft");


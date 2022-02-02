
function chepestPhone(mobile) {
    let chepest = mobile[0]
for (const item of mobile) {
    if (item.price > chepest.price) {
        chepest = item

    }
    }
    return chepest
    
}

const mobile = [
    {
        brand: "samsung",
        model: "m32",
        price: 12000,
        quantity: 1
    },
    {
        brand: "shawmi",
        model: "note 10",
        price: 25000,
        quantity: 1
    },
    {
        brand: "huawaie",
        model: "y7",
        price: 14000,
        quantity: 1
    },
    {
        brand: "huawaie",
        model: "y719",
        price: 30000,
        quantity: 1
    },
    {
        brand: "nokia",
        model: "N95",
        price: 8000,
        quantity: 1
    },
];
const result = chepestPhone(mobile)

console.log(result);
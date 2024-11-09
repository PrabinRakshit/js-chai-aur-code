const num = [1, 2, 3]

const initVal = 0;
const numTotal = num.reduce((accumulator, currValue) => accumulator + currValue, initVal)

// console.log(numTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPayment = shoppingCart.reduce((acc, currVal)=> acc + currVal.price, 0)
console.log(totalPayment);


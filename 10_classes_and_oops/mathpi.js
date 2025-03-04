// console.log(Object.getOwnPropertyDescriptor(Math, "PI"))
// console.log(Object.getOwnPropertyDescriptors(Math))

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
// const person = {}
// const obj = Object.create(person)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nhi bani");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// console.log(Object.getOwnPropertyDescriptors(chai));

Object.defineProperty(chai, "name", {value: "adrak chai", writable: false, enumerable: false})
chai.name = "Lemon Tea"
// console.log(Object.getOwnPropertyDescriptors(chai));
// console.log(chai);

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`Key: ${key}, Value: ${value}`);
    }
}
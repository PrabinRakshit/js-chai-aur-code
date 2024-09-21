// # Primitive

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

// const score = 100;
// const scoreValue = 100.5
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// Symbol is used to make variables unique. Useful if values and types are same
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id);
console.log(anotherId);
console.log(id == anotherId);

// BigInt
const bigNumber = 13124235346234124236346n
console.log(typeof bigNumber);




// * Non Primitive / Reference Type

// Array, Objects, Functions

const heroes = ["Skaktimaan", "Naagraj", "Doga"]

const detailObject = {
    name: "Prabin",
    age: 30
};

const myFunc = function (){
    console.log("Hello World");
}

console.log(typeof heroes);
console.log(typeof myFunc);
console.log(typeof detailObject);

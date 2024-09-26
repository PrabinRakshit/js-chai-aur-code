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

// console.log(id);
// console.log(anotherId);
// console.log(id == anotherId);

// BigInt
const bigNumber = 13124235346234124236346n
// console.log(typeof bigNumber);




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

// console.log(typeof heroes);
// console.log(typeof myFunc);
// console.log(typeof detailObject);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory types ---------
// Stack (Primitive),  Heap (Non Primitive)
// When ever Stack is used, you get a copy of the variable
// When ever Heap is used, you get a reference of the original value

let myYoutubeName = "trippySailor"

let anotherName = myYoutubeName

anotherName = "chaiaurgame"
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.upi = "user2@ybl"

console.log(userOne.upi);
console.log(userTwo.upi);

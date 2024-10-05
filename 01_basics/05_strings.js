const name = "Prabin"
const repoCount = 50

// Old way of writing dynamic values
// console.log(name + repoCount + " value");

// String interpolation method
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('PrabinRakshit');

// console.log(gameName[0]);
// console.log(gameName.__proto__); // Prototype methods/functions

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(10));
console.log(gameName.indexOf('s'));

const anotherString = gameName.slice(1, 4);
const newStringOne = "     Prabin    "
console.log(newStringOne.trim());

const url = "https://website.com/prabin%20rakshit"
console.log(url.replace('%20', '-'));
console.log(url.includes('prabin'));

console.log(gameName.split('R'));

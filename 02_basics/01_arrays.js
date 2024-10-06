// Array

const myArr = [0, 1, 2, 3, 4, 5]

const myHeroes = ["Shaktimaan", "JuniorG"]

const myArr2 = new Array(1, 2, 3, 4)
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(0)
myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myNewArray1 = myArr.slice(1, 3)

console.log(myNewArray1);
console.log("B ", myArr);

const myNewArray2 = myArr.splice(1, 3)

console.log(myNewArray2);
console.log("C ", myArr);

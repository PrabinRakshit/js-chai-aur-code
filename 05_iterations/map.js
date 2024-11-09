const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNums.map((item)=> item+10)
// console.log(newNum);

// Chaining methods

const newNum = myNums
                .map((item)=>item*10)
                .map((item)=> item + 1)
                .filter((item)=> item >= 40)
console.log(newNum);
                
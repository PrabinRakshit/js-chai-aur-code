// for of loop

// const arr = [1, 2, 3, 4, 5]

// for(const num of arr){
//     console.log(num);
// }

// const greetings = "Hello World"

// for(const greet of greetings){
//     console.log(greet);
// }

// Maps

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India') // It is unique so no dup vals

// console.log(map);

for(const [key, value] of map){ //destructuring arrays
    console.log(key +' :- '+value);
}

// not iteratable in maps
for(const [key, value] in map){ //destructuring arrays
    console.log(key +' :- '+value);
}

const myObj = {
    'game1' : "NFS",
    'game2' : "Spiderman"
}

// Not iteratable on objects
// for(const [key, value] of myObj){ 
//     console.log(key +' :- '+value);
// }
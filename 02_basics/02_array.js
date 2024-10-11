const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// let heros = marvel_heros.concat(dc_heros)
// console.log(heros);

// let heros = [...marvel_heros, ...dc_heros]
// console.log(heros);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7], [4, 5]]
const usableAnotherArray = anotherArray.flat(Infinity)
console.log(usableAnotherArray);


console.log(Array.isArray("Prabin"))
console.log(Array.from("Prabin"))
console.log(Array.from({name: "Prabin"})) //shows empty array if cannot convert to array. Need to mentioned if conversion is for keys&values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

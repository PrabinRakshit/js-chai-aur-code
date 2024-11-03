const email = "prabin@gmail.com"

if(email){
    console.log(`Email: ${email}`);
} else {
    console.log('Email not found');
}

// falsy values
// false, "", 0, -0, BinInt 0n, null, undefined, NaN

// Truthy values
// "0", 'false', " ", [], {}, function(){} <empty function>, 

// Nullish Coalescing Operator (??): null undefined
let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15 // takes the first received value
// console.log(val1);

// Ternary Operator
val2 = val1 == 10 ? "Valid" : "Undefined"
console.log(val2);


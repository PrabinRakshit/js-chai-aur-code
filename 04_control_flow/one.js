//if

if(true){
    // run internal code
} 

if(false){
    // no code run
}

// const userLoggedIn = true;

// if(userLoggedIn){
//     // show logged in pages
//     console.log("User has logged in");
// }

if(2 == "2"){
    console.log("Equal");
}

if(2 === "2"){
    console.log("Equal");
} else {
    console.log("Not Equal");
}

const score = 100;

if(score === 100){
    let power = "fly"
    console.log(`User power ${power}`);
}
// console.log(`User power ${power}`); //out of scope

const balance = 500;
if (balance > 1000) console.log("Has Balance");
console.log("No Balance");

// if(){

// } else if(){

// } else if(){

// } else {

// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = false;

if(userLoggedIn && debitCard){
    console.log("Purchase course");
}

if(userLoggedIn && (loggedInFromEmail || loggedInFromGoogle) && debitCard){
    console.log("Purchase course after login");
}


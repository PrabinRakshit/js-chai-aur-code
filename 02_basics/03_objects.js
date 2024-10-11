// singleton -- A type of object when created via constructor --> Object.create


const mySym = Symbol("key1")

// object literals
const JsUser = {
    name: "Prabin",
    "full name": "Prabin Rakshit",
    [mySym]: "Key1",
    age: 30,
    location: "Bnagalore",
    email: "prabin@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "prabin@gpt.com"
// Object.freeze(JsUser) // Freezes object from changing values. Can be applied on specific key:values of object
JsUser.email = "prabin@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello ${this["full name"]}.`);
}

console.log(JsUser.greeting());

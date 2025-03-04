//ES6 version (syntactical sugar)

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }


//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     capitalizeUsername(){
//         return this.username.toUpperCase();
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "chai123")

// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.capitalizeUsername());


// Behind the scene functionality
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.capitalizeUsername = function(){
    return this.username.toUpperCase();
}

const tea = new User("Tea", "tea@gmail.com", "tea123")

console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.capitalizeUsername());
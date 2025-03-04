// Object literal

const user = {
    username: "Prabin",
    loginCount: 5,
    singedIn: true,

    getUserDetails: function (){
        console.log(`User details fetched for ${this.username}`);
        console.log(this);
        
    }
}

// Not feasible to create repeated functions. Better option is to use constructor functions when instances of the object can be created
const user2 = {
    username: "Prabin",
    loginCount: 5,
    singedIn: true,

    getUserDetails: function (){
        console.log(`User details fetched for ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin

    this.greeting = function(){
        console.log(`Hello ${this.username}`);
        
    }
    return this
    return {username, loginCount, isLoggedin}
}

// userTwo will override the values of userOne as it is targetting the same function and is not a new instance
// const userOne = User("Prabin", 12, true)
// const userTwo = User("Prabin", 12, true)

const userOne = new User("Prabin", 12, true)
const userTwo = new User("Vicky", 10, false)

// new -> new keyword creates an empty object which is knowns as instance, all arguments are packed for the new created instance, then it is injected to 'this' in the function and then it is passed
console.log(userOne.greeting());
console.log(userTwo);

console.log(userOne instanceof User);
console.log(userOne instanceof Object);

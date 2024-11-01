const user = {
    username: "Prabin",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this); // Empty object if code is run in node env. Window object if code is run on browser

// function chai(){
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return
// const addTwo = (num1, num2) => num1 + num2 // return not required if no paranthesis
// const addTwo = (num1, num2) => (num1 + num2) // return not required if no paranthesis

const addTwo = (num1, num2) => ({username: "Prabin"}) //To return anything without explicitly mentioning return keyword, it must be wrapped in paranthesis
// console.log(addTwo(3, 4));

// const myArr = [1,2,3,4,5]
// myArr.forEach(()=>({}))

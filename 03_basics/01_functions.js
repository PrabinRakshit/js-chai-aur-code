function loginUserMessage(username = "Sam"){ //Default value if param is empty

    if(!username){
        console.log("Please enter a username");
        return        
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage());

function calculateCartPrice(...num){ //rest operator
    return num;
}

function calculateCartPrice2(val1, val2, ...num){ //rest operator
    return num;
}

// console.log(calculateCartPrice(100, 200, 300, 400, 500));
// console.log(calculateCartPrice2(100, 200, 300, 400, 500));

const user = {
    username: "Prabin",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({
    username: "Broom",
    price: 399
})

const myNewArray = [200, 300, 400, 500, 100]

function returnSecondValue(arr){
    return arr[1];
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 300, 100, 500]));

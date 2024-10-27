function loginUserMessage(username = "Sam"){ //Default value if param is empty

    if(!username){
        console.log("Please enter a username");
        return        
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage());
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Async task is completed');
//         resolve();
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log('Promise Complete');
// })

// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Async Task 2");
//         resolve();
//     }, 1000)
// }).then(()=>{
//     console.log("Async 2 resolved");
    
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@chaicode.com"})
//     }, 1000)
// })

// promiseThree.then(function(response){
//     console.log(response);
// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Prabin", password: "prabin123"})
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000)
})

const username = promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
    
})
.catch((msg)=>{
    console.log(msg);
    
})
.finally(()=>{
    console.log('Either Promise is resolved or rejected');
    
})

console.log(username);

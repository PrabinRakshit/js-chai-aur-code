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

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "Prabin", password: "prabin123"})
//         } else {
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// })

// const username = promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
    
// })
// .catch((msg)=>{
//     console.log(msg);
    
// })
// .finally(()=>{
//     console.log('Either Promise is resolved or rejected');
    
// })

// console.log(username);

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true;

//         if(!error){
//             resolve({username: "Javscript", password: "js123"})
//         } else {
//             reject('Error: JS went wrong')
//         }
//     }, 1000);
// })

// async function consumePromiseFive() {
//     try {
//         const reponse = await promiseFive
//         console.log(reponse);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(`Error: ${error}`);
        
//     }
    
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
        .then(result => console.log(result))
            .catch(error=>console.log(error))
                .finally(console.log(`Fetch is completed`)
);
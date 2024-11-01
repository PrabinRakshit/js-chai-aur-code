if(true){
    let num = 10;
    const bal = 20;
    var count = 30;
}

// console.log(num);
// console.log(bal);
// console.log(count);

// for(let i = 0; i<10; i++){
//     const element = array[i]
// }


function one(){
    const username = "Prabin"

    function two(){
        const website = "Youtube"
        // console.log(username);
        
    }
    // console.log(website);
    
    two()
}

one();


// +++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++

// console.log(addOne(5)) // Works because of hoisting
function addOne(num){ // Normal function
    return num + 1;
}

// console.log(addTwo(5)) // Doesn't work because of declaration and assigned to a variable that is initialized later
const addTwo = function(num){ //Function Expression
    return num + 2;
}

// console.log(addOne(5))
// console.log(addTwo(5))
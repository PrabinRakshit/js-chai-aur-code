// Immediately Invoked Function Exrpession - IIFE is mostly used to reduce the global scope pollution or declaration.
(function chai(){ //named IIFE
    console.log("Db Connected");
    
})(); 
// semicolon is required to end the running function explicity to run the next IIFE

((arg)=>{ //unnamed IIFE //params can be passed just like regular functions
    console.log("Db Connected");
})();
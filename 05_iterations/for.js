// for loop

// for(let index=0; index<=10;index++){
//     console.log(index);
// }

// for (let i = 1; i < 10; i++) {
//     console.log(`Outer loop ${i}`);
//     for(let j = 1; j<10; j++){
//         // console.log(`Inner loop ${j}`);
//         console.log(i +'*'+ j +'='+ i * j);
//     }
// }

// break and continue

// for (let i = 1; i < 20; i++) {
//     console.log(`Value of i is ${i}`);
//     if(i == 5){
//         console.log('5 Detected');
//         break
//     }
// }

for (let i = 1; i < 20; i++) {
    console.log(`Value of i is ${i}`);
    if(i == 5){
        console.log('5 Detected');
        continue
    }
}
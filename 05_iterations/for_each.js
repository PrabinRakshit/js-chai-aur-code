// foreach loop

const codelang = ["js", "ruby", "php", "python"]

// codelang.forEach(function(item){
//     console.log(item);
// })

// codelang.forEach((item)=>console.log(item))

// function printMe(item){
//     console.log(item);
// }

// codelang.forEach(printMe)

// codelang.forEach((item, index, arr)=>console.log(item, index, arr))

const myCode = [
    {
        languageName: "JavaScript",
        languageFileName: "js",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    },
    {
        languageName: "React",
        languageFileName: "jsx",
    }
]

myCode.forEach((item)=>console.log(`Filename ${item.languageFileName}, Lang ${item.languageName}`))
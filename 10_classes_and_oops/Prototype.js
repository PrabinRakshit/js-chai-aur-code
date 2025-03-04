let myName = "Prabin        "
let myTea = "Chai           "

// console.log(myName.trueLength);

let myHeros = ['Thor', 'Spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'web',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.prabin = function(){
    console.log(`Prabin is present in all objects`);
}

Array.prototype.heyPrabin = function(){
    console.log(`Prabin says hello`);
}

// myHeros.prabin()
// heroPower.prabin()
// myHeros.heyPrabin()
// heroPower.heyPrabin()

// INHERITANCE
const User = {
    name: "Prabin",
    email: "prabin@gmail.com"
}

const Teacher = {
    videoContent: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, User)
Object.setPrototypeOf(Teacher, TeachingSupport)

// console.log(TASupport.isAvailable);
// console.log(Teacher.name);
// console.log(Teacher.isAvailable);

String.prototype.trueLength = function(){
    return `True Length is ${this.trim().length}`
} 
console.log("Prabin   ".trueLength());
console.log(myName.trueLength());
console.log(myTea.trueLength());
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "chai@email.com", "123")

chai.addCourse();
chai.logMe();

const masalaChai = new User("MasalaChai")

masalaChai.logMe()

console.log(chai === masalaChai);

console.log(chai === Teacher);

console.log(chai instanceof Teacher);

console.log(chai instanceof User);

console.log(chai instanceof Object);

// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "user@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Prabin",
            lastname: "Rakshit"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2};
const obj3 = Object.assign({}, obj1, obj2) //syntax : Object.assign(target, source) -> stores all the recurring objects to target
console.log(obj3);

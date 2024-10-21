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
// const obj3 = Object.assign({}, obj1, obj2) //syntax : Object.assign(target, source) -> stores all the recurring objects to target
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 2,
        email: "q@gmail.com"
    },
    {
        id: 3,
        email: "r@gmail.com"
    }
]

// console.log(users[0].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIns'));

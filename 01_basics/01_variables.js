const accountId = 15673;
let accountEmail = "prabin@gmail.com";
var accountPassword = "1235678";
accountCity = "Jodhpur";
let accountState;

// accountId = 234; // not allowed as it is constant
accountEmail = "pr@gm.com"
accountPassword = "123"
accountCity = "Pune"
// console.log(accountEmail, accountPassword, accountCity);
/*
Prefer Not to Use Var because of issues in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
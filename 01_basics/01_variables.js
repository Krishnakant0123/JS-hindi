const  accountId = 144553
let accountEmail = "KrishnakantPandey2021@gmail.com"
var accountPassward = "12345"
accountcity ="Gorakhpur"

// accountId = 2
accountEmail = "kk@gmail.com"
accountPassward = "111111222"
accountcity = "Goa"
let accountState;

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassward,accountcity,accountState])
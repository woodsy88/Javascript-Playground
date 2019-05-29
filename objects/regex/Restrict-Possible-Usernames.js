// 1) The only numbers in the username have to be at the end.
// There can be zero or more of them at the end.

// 2) Username letters can be lowercase and uppercase.

// 3) Usernames have to be at least two characters long.A two - 
// letter username can only use alphabet letter characters.


let username = "JackOfAllTrades";
let username1 = "JACK";
let username2 = " Oceans11";
let username3 = "RegexGuru";
let username4 = "007";
let username5 = "9";
let username6 = "j";


let userCheck = /^[a-z]{2,}\d*$/i;


let result = userCheck.test(username);
let result1 = userCheck.test(username1);
let result2 = userCheck.test(username2);
let result3 = userCheck.test(username3);
let result4 = userCheck.test(username4);
let result5 = userCheck.test(username5);
let result6 = userCheck.test(username6);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);

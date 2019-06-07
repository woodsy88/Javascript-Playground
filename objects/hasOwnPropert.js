// //  How to check if an object contains a certain property
// users.hasOwnProperty("Alan");
// "Alan" in users;
// // both return true


let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

console.log('users: ', users);


function isEveryoneHere(obj) {
  if (obj.hasOwnProperty("Alan", "Jeff", "Sarah", "Ryan")) {
    console.log("it does have these properties");
    return true
  }

  return false;
}


console.log(isEveryoneHere(users));
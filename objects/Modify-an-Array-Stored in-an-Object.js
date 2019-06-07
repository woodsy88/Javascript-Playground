let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    }
  }
};

// takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
function addFriend(userObj, friend) {

  console.log(userObj["data"]["friends"]);
  const addFriend = userObj["data"]["friends"].push(friend);
  console.log(userObj["data"]["friends"]);
  
 return userObj["data"]["friends"];
  
}

console.log(addFriend(user, "Pete"));

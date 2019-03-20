//Setup
var contacts = [{
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return "No such contact"

// If prop does not correspond to any valid properties of a contact found to match name then return "No such property"


function lookUpProfile(name, prop) {
  console.log(name);
  console.log(prop);
  console.log(contacts.length);
  console.log(contacts[1].hasOwnProperty(prop));

  for (var i = 0; i < contacts.length; i++) {
    console.log(contacts[i].firstName);

        if (contacts[i].firstName === name ) {
                console.log(name);
                console.log(prop);
            if (contacts[i].hasOwnProperty(prop)) {
                console.log(contacts[i][prop]);
                return contacts[i][prop];
            } else {
                console.log("no such property");
                return "no such property";
            }   
            
        } 

    }
      console.log("no such contact");
      return "no such contact";

  }


  // 1. check if name is an actual contact's firstName
  // 2. check if given property (prop) is a property of that contact.


  // 3. If both are true, then return the "value" of that property


  // 4. If name does not correspond to any contacts then return "No such contact"

  // 5. If prop does not correspond to any valid properties of a contact found to match name then return "No such property"



// lookUpProfile("Kristian", "lastName"); 
// // should return "Vos"
// lookUpProfile("Sherlock", "likes");
//  // should return ["Intriguing Cases", "Violin"]
// lookUpProfile("Harry","likes");
//  //should return an array
lookUpProfile("Bob", "number");
//  //should return "No such contact"
lookUpProfile("Bob", "potato");
//  //should return "No such contact"
lookUpProfile("Akira", "address");
 //should return "No such property"



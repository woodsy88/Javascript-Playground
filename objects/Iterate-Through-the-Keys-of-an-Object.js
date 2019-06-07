let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  
  let counter = 0;

  for (let user in obj) {
    console.log(obj[user]);
    console.log(obj[user]["online"]);
    
      if(obj[user]["online"] == true) {
       counter ++;
      }
  }

    console.log(counter);
    return counter;
  
}


console.log(countOnline(users));


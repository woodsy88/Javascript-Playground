const person = { 
  firstName: 'Rick',
  lastName: 'Sanchez',
  occupation: 'Scientist'
}
const { firstName, lastName, occupation } = person;
console.log(firstName); // Rick
console.log(lastName);  // Sanchez
console.log(occupation); // Scientist


// Default Value 

const person = { 
  firstName: 'Rick',
  lastName: 'Sanchez',
  occupation: 'Scientist'
}

const { firstName='Morty', lastName='Smith', occupation='Sidekick', crimes='Everything' } = person;
console.log(firstName); // Rick
console.log(lastName);  // Sanchez
console.log(occupation); // Scientist
console.log(crimes); // Everything

// Rename the keys

const person = { 
  firstName: 'Rick',
  lastName: 'Sanchez',
  occupation: 'Scientist'
}
const { firstName: rick, lastName: sanchez, occupation: scientist } = person;
console.log(rick); // Rick
console.log(sanchez);  // Sanchez
console.log(scientist); // Scientist

// RETURN AN OBJECT FROM A FUNCTION AND DESTRUCUTRE IT

function getPerson() {
  return {
    firstName: 'Rick',
    lastName: 'Sanchez',
    occupation: 'Scientist'
  }
}
const { firstName, lastName, occupation } = getPerson();
console.log(firstName); // Rick
console.log(lastName);  // Sanchez
console.log(occupation); // Scientist


// Destrucutirng function parameters so the order they are entered doesnt matter

// note the destructuring braces in the arg signature
function createPerson({ fName, lName, job }) {
  return {
    firstName: fName,
    lastName: lName,
    occupation: job
  }
}
const person = createPerson({
  lName: 'Sanchez',
  job: 'Scientist',
  fName: 'Rick'
};) // Whoah different order...

console.log(person.firstName); // Rick
console.log(person.lastName);  // Sanchez
console.log(person.occupation); // Scientist
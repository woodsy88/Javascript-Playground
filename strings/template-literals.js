//  multi line
const hello = "Hello";
const literal = "Literal";
const template = "Template";
console.log(`${hello} 
${template} 
${literal}`);
// Hello 
// Literal
// Template

// Expression interpolation

const peopleImSureThinkImAwesome = 55;
const peopleWhoActuallyThinkImAwesome = 5;
console.log(
  `I am awesome in the eyes of ${peopleImSureThinkImAwesome + peopleWhoActuallyThinkImAwesome} people`
);
// I am awesome in the eyes of 60 people


// Template literal nesting

const isAwesome = false;
const isLying = true;
console.log(
  `Greg is ${isAwesome ? 'defintely' : `${isLying ? 'possibly lying about being' : 'not'}`} awesome`);
// Greg is possibly lying about being awesome
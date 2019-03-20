let myLuckyNumbers = [1, 3, 5];
let myOtherLuckyNumbers = [7, 11, 13]
let allMyLuckyNumbers = [...myLuckyNumbers, ...myOtherLuckyNumbers];
console.log(allMyLuckyNumbers); // 1 3 5 7 11 13





// Our use of the spread passes these objects by value and not by reference. 
// It means that we can mutate the original array without 
// worry that a composed array is changed.

let yummyFoods = ["Jalapeno Nachos", "Jalapeno Pizza"]
let foodsToAvoid = [...yummyFoods];
yummyFoods.push("Jalapeno Salad");
console.log(yummyFoods);
// [ Jalapeno Nachos, Jalapeno Pizza, Jalapeno Salad ]
console.log(foodsToAvoid); // [ Jalapeno Nachos, Jalapeno Pizza ]






// Spreads can be used in function argument lists.

function printCodeName(code1, code2) {
  console.log(code1, code2);
}

let codeName = ["Illusive", "Man"];

printCodeName(...codeName); // Illusive Man


// spreading object literals!

let bigHero = {hero: "Batman", fearOf: "Day"};
let littleHero = {sidekick: "Robin", fearOf: "Circus" };
let allHero = {...bigHero, ...littleHero};
console.log(allHero); // { hero: 'Batman', fearOf: 'Circus', sidekick: 'Robin'


// Spreading params 

function printEverything(...everything) {
  console.log(everything);
}
printEverything(42, true, "Spoon"); // [ 42, true, 'Spoon' ]



function printEverything(...everything) {
  console.log(arguments);
}
printEverything(42, true, "Spoon");
// { '0': 42, '1': true, '2': 'Spoon' }
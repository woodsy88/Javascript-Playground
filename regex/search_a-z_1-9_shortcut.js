// search for all letters of the alphabet with [a-z] with This shortcut is equal to [A-Za-z0-9_]

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);


// Searching for things beside a-z, 1-9

let shortHand2 = /\W/;
let numbers2 = "42%";
let sentence = "Coding!";
numbers2.match(shortHand2); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]


// The shortcut for digit characters is\ d, with a lowercase d.This is equal to the character class[0 - 9], which looks
// for a single character of any number between zero and nine.

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result2 = numString.match(numRegex).length;
console.log(result2);


// The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], 
// which looks for a single character that is not a number between zero and nine.
  // find all the characters that are not numbers
let numString2 = "Your sandwich will be $5.00";
let noNumRegex2 = /\D/g; // Change this line
let result3 = numString2.match(noNumRegex2).length;
console.log(result3)
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true


let myString = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString) // Change this line
console.log(result1)


let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);
console.log(result2);


//  You can search for multiple patterns using the alternation or OR operator: |.
// This operator matches patterns either before or after it. For example, if you wanted to match "yes" or "no", the regex you want is /yes|no/.
// You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.


let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);
console.log(result3);

// ignore case with /i
let myString1 = "freeCodeCamp";
let fccRegex = /FreeCodeCamp/i; // Change this line
let result4 = fccRegex.test(myString1);
console.log(result4);


// using match
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result6 = extractStr.match(codingRegex); // Change this line
console.log(result6);


// To search or extract a pattern more than once, you can use the g flag.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result5 = twinkleStar.match(starRegex); // Change this line
console.log(result5);


let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null


let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result7 = quoteSample.match(vowelRegex);
console.log(result7);


//  using a character range
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bg1Regex = /[a-e]at/;
catStr.match(bg1Regex); // Returns ["cat"]
batStr.match(bg1Regex); // Returns ["bat"]
matStr.match(bg1Regex); // Returns null


let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]gi/; // Change this line
let result8 = alphabetRegex; 
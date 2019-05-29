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

// I - ignore case with /i
let myString1 = "freeCodeCamp";
let fccRegex = /FreeCodeCamp/i; // Change this line
let result4 = fccRegex.test(myString1);
console.log(result4);


// using match
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result6 = extractStr.match(codingRegex); // Change this line
console.log(result6);


// G - To search or extract a pattern more than once, you can use the g flag.

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


//  match a range of characters using a character range
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bg1Regex = /[a-e]at/;
catStr.match(bg1Regex); // Returns ["cat"]
batStr.match(bg1Regex); // Returns ["bat"]
matStr.match(bg1Regex); // Returns null


let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result8 = quoteSample2.match(alphabetRegex);
console.log(result8);


// Match a range of numbers using a numbers range
let jennyStr = "Jenny8675309";
let myRegex2 = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex2);

let quoteSample1 = "Blueberry 3.141592653s are delicious.";
let myRegex3 = /[h-s2-6]/gi; 
let result9 = quoteSample1.match(myRegex3); 
console.log(result9);

// create a set of characters that you do not want to match. These types of character sets are called negated character sets.
// single regex that matches all characters that are not a number or a vowel.
let quoteSample4 = "3 blind mice.";
let myRegex4 = /[^aeiou1-9]/gi; 
let result10 = quoteSample4.match(myRegex4); 
console.log(result10);


// Match Characters that Occur One or More Times In a Row
//  + character matchs anything ONE or more times

let difficultSpelling = "Mississippi";
let myRegex5 = /s+/g; // Change this line
let result11 = difficultSpelling.match(myRegex5);
console.log(result11);


// using the * to find characters that occur ZERO or more times

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

// uses the * character to match all the upper and lower "a"
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /a*/i; // Change this line
let result12 = chewieQuote.match(chewieRegex);
console.log(result12);

// Find Characters with Lazy Matching with ?        

let text = "<h1>Winter is coming</h1>";
let myRegex7 = /<[h1].*?>/; // Change this line
let result13 = text.match(myRegex7);
console.log(result13);


// test if a string contains something - gets a true or false result

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result14 = calRegex.test(rickyAndCal);
console.log(result14);

// You can search the end of strings using the dollar sign character $ at the end of the regex.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result15 = lastRegex.test(caboose);
console.log(result15);


// search for all letters of the alphabet with [a-z] with This shortcut is equal to [A-Za-z0-9_]

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
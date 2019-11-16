let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
let result1 =quit.match(quRegex); // Returns ["q"]
let result2 = noquit.match(qRegex); // Returns ["q"]


console.log(result1);
console.log(result2);


// looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
let result4 = checkPass.test(password); // Returns true
console.log(result4);



//  match passwords that are greater than 5 characters long and have two consecutive digits.

let sampleWord = "astronaut";
let sampleWord2 = "banan1";
let sampleWord3 = "abc123";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result3 = pwRegex.test(sampleWord);
let result5 = pwRegex.test(sampleWord2);
let result6 = pwRegex.test(sampleWord3);


console.log(result3);
console.log(result5);
console.log(result6);

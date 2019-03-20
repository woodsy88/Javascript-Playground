// The best way I describe to myself the difference between
// for..of and
// for..in is that,
// while both iterate over lists,
// for..in returns keys on the object, where
// for..of returns values of the object being iterated.

 let myLuckyNumbers = [1, 3, 5, 7, 11]

 let mostBeautifulWord = "Cellar Door";

//  for..in returns keys on the object


 for (let num in myLuckyNumbers) {
   console.log(num); // 0 1 2 3 4 - returning the indexs of the array
 }

for (let char in mostBeautifulWord) {
  console.log(char) // 0 1 2 3 4 6 7 8 9 10
}


 // for..of returns values of the object being iterated.


 for (let num of myLuckyNumbers) {
   console.log(num); // 1 3 5 7 11 - returning the values of the array
 }

 for (let char of mostBeautifulWord) {
   console.log(char) // C e l l a r   D o o r
 }
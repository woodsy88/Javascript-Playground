// compute the square of only the positive integers (decimal numbers are not integers) in the array realNumberArray
// store the new array in the variable squaredIntegers.


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];



const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegersFind = arr.filter((num) => {
    console.log(num);  
    console.log(Number.isInteger(num));
    return Number.isInteger(num) && num > 0;
    
  });

  console.log(squaredIntegersFind);

   const squareIntegers = squaredIntegersFind.map( x => x ** 2);

   console.log(squareIntegers)
  



  // change code above this line
  return squareIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


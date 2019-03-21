const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

console.log(maximus);


// ==================


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;


(function () {
  "use strict";
  let arr2 = [...arr1]; 
  console.log(arr2);
  // change this line
})();
console.log(arr2);
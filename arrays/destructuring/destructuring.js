// Use destructuring assignment with the rest operator so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [j, k, ...arr] = list; // change this
  console.log(j);
  console.log(k);
  console.log(arr);



  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(removeFirstTwo(source));

console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
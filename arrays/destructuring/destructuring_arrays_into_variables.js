const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2



// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const [c, d, , , e] = [1, 2, 3, 4, 5, 6];
console.log(c, d, e); // 1, 2, 5



// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let f = 8, g = 6;
(() => {
  "use strict";

  [f, g] = [g, f];

})();
console.log(g); // should be 6
console.log(f); // should be 8


// Using spread

const [h, i, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(h, i); // 1, 2
console.log(arr); // [3, 4, 5, 7]



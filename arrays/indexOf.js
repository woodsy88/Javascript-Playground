/*
 indexOf() checks for the presence of an element on an array. 
 indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
*/

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2
fruits.indexOf('pears') // returns 1, the first index at which the element exists

// =============================


function quickCheck(arr, elem) {
  // change code below this line


  const value = arr.indexOf(elem);
  console.log(value);

  return value > 0 ? true : false;
  
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
console.log(quickCheck(["squash", "onions", "shallots"], "onions"));

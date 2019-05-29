
// removing elements
function sumOfTen(arr) {
  // change code below this line

  // start an index 2, and splice out 2 items
  arr.splice(2, 2);
  console.log(arr);
  
  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

// ============================================================================


// replacing elements with 3rd paremeter added to splice()

// 
function colorChange(arr, index, newColor) {

  // start at the index of 2, remove 1 item, replace it with new item
  arr.splice(index, 1, newColor);
  return arr;
}

let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];

colorScheme = colorChange(colorScheme, 2, '#332327');
// we have removed '#bb7e8c' and added '#332327' in its place
// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']



// ============================================================================



/*
We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. 
Modify the function using splice() to remove the first two elements of 
the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

*/

function htmlColorNames(arr) {
  // change code below this line

  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurqoise",
    "FireBrick"
  ])
);
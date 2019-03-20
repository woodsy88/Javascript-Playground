// Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line


  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (var j = 0; j < arr[i].length; j++) {
      
      
        console.log(arr[i][j]);

        var multy = product *= arr[i][j]

        console.log(multy);

        multy = product;

        
    }
  }

  // Only change code above this line
  console.log(product);
  return product;
}

// Modify values below to test your code
multiplyAll([
  [1, 2],  [3, 4],
  [5, 6, 7]
]);


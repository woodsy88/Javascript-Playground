// var array1 = [1, 10, 100];
// var array2 = [8000, 9111,  8, 800];

// console.log(findLongest(array1));
// console.log(findLongest(array2));



// function findLongest(arr) {
//   return Math.max.apply(null, arr);
// }

function findLongest(array) {
  var biggestNum = 0;

  for (var i = 0; i < array.length; i++) {

    if (array[i].toString().length > biggestNum.toString().length) {
      biggestNum = array[i];
    }

  }

  return biggestNum;
}

console.log(findLongest([111, 1111, 5555, 10000, 1, 90000]));



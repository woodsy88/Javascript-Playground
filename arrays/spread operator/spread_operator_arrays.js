function copyMachine(arr, num) {
  let newArr = [];

  // this loop is going to run 2x
  while (num >= 1) {
    // change code below this line

    // return a new array made up of 2 copies of arr

    newArr.push([...arr]);

    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

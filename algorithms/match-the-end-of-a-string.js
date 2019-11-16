function confirmEnding(str, target) {

 
  console.log(str.length);
  console.log(target.length);
  console.log(str.length - target.length);
  str.split(" ")
  console.log('str.split(" "): ', str.split(""));


    // slice out the last element in the array and compare it to target to return true or false

  let cut = str.slice(str.length - target.length) === target;
  console.log( cut);

  return  cut;
}

// confirmEnding("Bastian", "n");
// confirmEnding("connor", "t");
confirmEnding("connor", "nor");


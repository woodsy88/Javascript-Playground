// find the largest number in each sub-array and all the largest numbers into 1 new array

function largestOfFour(arr) {

  console.log(arr);

  let longest = [];

  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
    let ordered = arr[i].sort((a, b) => {
      if (a > b){
        return 1;
      } else {
        return -1;
      }
    }).pop();

    console.log(ordered);

    longest.push(ordered)
 
  }

  console.log(longest);
  
  return longest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
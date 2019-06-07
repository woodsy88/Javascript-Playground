/* 
JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.)
*/

function greaterThanTen(arr) {
  let newArr = [];

  
  for (let i = 0; i < arr.length; i++) {
        // is array item greater then 10?
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]


function filteredArray(arr, elem) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {

    console.log(arr[i]);
    
      if(!arr[i].includes(elem)) {
        newArr.push(arr[i]);
        
      }
      
      
  }

  console.log(newArr);
  


  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [ 13, 26], [19, 3, 9]], 3));
filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2);
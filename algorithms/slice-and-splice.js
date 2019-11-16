function frankenSplice(arr1, arr2, n) {

  // create copies of the arrays so the originals dont get mutated
  const arrA = arr1.slice();
  const arrB = arr2.slice();

  // start a n, remove no items, spread the first array into the 2nd
 arrB.splice(n, 0, ...arrA);

 console.log(arrB);
  
  return arrB;
}

//  [4, 1, 2, 3, 5].
console.log(frankenSplice([1, 2, 3], [4, 5], 1));

// console.log(frankenSplice([1, 2, 3], [4, 5], 1));
// console.log(frankenSplice([1, 2], ["a", "b"], 1));

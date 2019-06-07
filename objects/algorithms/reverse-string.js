function reverseString(str) {

  // split the string into an array of letters
let arr = str.split("");
console.log('arr: ', arr);
// reverse the order of the array
 let reverse = arr.reverse();
//  join the reversed array back into a string
 let joined = reverse.join('');
 console.log('joined: ', joined);
// return the reversed string

  return joined;
}

reverseString("hello");

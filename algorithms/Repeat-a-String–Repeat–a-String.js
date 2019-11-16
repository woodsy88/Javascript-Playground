// Repeat a given string str(first argument) for num times(second argument).
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {

  
  let repeat = [];
  
  for (let index = 0; index < num; index++) {
    console.log(str);

    repeat.push(str)
    
    
  }

  console.log(repeat);
  let joined = repeat.join('');
  console.log(joined);
  
  
  
  return joined;
}

repeatStringNumTimes("abc", 3);
// should return "abcabcabc"

console.log();

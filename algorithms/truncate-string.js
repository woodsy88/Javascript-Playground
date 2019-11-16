// Truncate a string (first argument) if it is longer than the given 
// maximum string length (second argument). 
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  if (str.length > num ) {

    const strArr = [...str];
    console.log(strArr);
    console.log(Array.isArray(strArr));


    const sliceArr = strArr.slice(0, num);

    sliceArr.push('...');
 
    const joinedArr = sliceArr.join('');
    
    console.log(joinedArr);

    return joinedArr;

  } else {
    return str;
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
function findLongestWordLength(str) {

  // break the string into individual words in an array
  let arr = str.split(" ")
  console.log(arr)
  // 
  let longest = arr.sort((a, b) => {
    return b.length - a.length;
  })[0].length;

  console.log(longest);
  
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");



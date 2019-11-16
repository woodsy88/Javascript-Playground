function titleCase(str) {
  
  const words = str.split(' ');
  console.log(words);
  
  const letters = words.map((word) => {
      const lowWord = word.toLowerCase();
      console.log(lowWord);
      
      // get first letter of each word and uppercase it
      const firstLetter = lowWord.charAt(0);
      console.log(firstLetter);
      
      const capLetter = firstLetter.toUpperCase();
      console.log(capLetter);
    

      // slice out the original and letter and add in the capped letter
      let cappedString = capLetter + lowWord.slice(1);
      console.log(cappedString);
      
      let cappedArr = [...cappedString];
      console.log(cappedArr);
    
      let capped = cappedArr.join('');
      console.log(capped);
      
      return capped;
    
    
  });
    
  str = letters.join(' ');
  console.log(str);
  
  
  return str;
}

titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

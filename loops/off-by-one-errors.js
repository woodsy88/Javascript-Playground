let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
console.log('len: ', len);

// runs to many times because the length of the string is 26, and the index starts at 0\
// should only run from 0 - 25, instead the loop is running 26 times to be equal to len
for (let i = 0; i <= len; i++) {
  // loops one too many times at the end
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  // loops one too few times and misses the first character at index 0
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  // Goldilocks approves - this is just right
  console.log(alphabet[k]);
}
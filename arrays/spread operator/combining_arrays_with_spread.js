//   huge advantage of the spread operator, is the ability to combine arrays, or to insert all the elements of one array into another, at any index.

let thisArray = ["sage", "rosemary", "parsley", "thyme"];

let thatArray = ["basil", "cilantro", ...thisArray, "coriander"];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']


function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, 'is', 'fun']; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());
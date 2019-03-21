let allNumbers = [1, 2, 3, 4, 5];
let allNumbersAdded = allNumbers.reduce((acc, value) => acc += value);
console.log(allNumbersAdded); // 15


// ===

let presidentialVotes = ['Thanos', 'Stark',
  'Thanos', 'Rogers',
  'Rogers', 'Stark',
  'Thanos', 'Thanos',
  'Stark', 'Thanos'
];

let emptyInitialObj = {};
let voteCount = presidentialVotes.reduce(
  (countObj, candidate) => {
    countObj[candidate] ? countObj[candidate] += 1 : countObj[candidate] = 1;
    return countObj;
  }, emptyInitialObj);

console.log(voteCount); // { Thanos: 5, Stark: 3, Rogers: 2 }
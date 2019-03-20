const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(value => value * 2);
console.log(doubled); // [ 2, 4, 6, 8, 10 ]

const strings = ["Leonard", "Teddy", "Natalie"];
const htmlListItems = strings.map(name => `<li>${name}</li>`);
console.log(htmlListItems);
// [ '<li>Leonard</li>', '<li>Teddy</li>','<li>Natalie</li>' ]
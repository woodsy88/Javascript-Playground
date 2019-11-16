// console.log("hello");

const items = document.getElementsByClassName('item');
// console.log('items: ', items);

// const item1 = items[0];
// console.log('item1: ', item1);

// const li = document.getElementsByTagName('li');
// console.log('li: ', li);


// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

const itemsSelect = document.getElementsByClassName('item');
// console.log('itemsSelect: ', itemsSelect);

const itemArray = Array.from(itemsSelect);
// console.log('itemArray: ', itemArray);

const nodelist = document.querySelectorAll('.divy');
// console.log('nodelist: ', nodelist);
const divyArray = Array.from(nodelist)
// console.log('divyArray: ', divyArray);


const secondElement = document.querySelectorAll("#book-list li .name");
// console.log('secondElement: ', secondElement);

const secondElementArr = Array.from(secondElement);

// console.log(Array.isArray(secondElementArr));


// secondElementArr.forEach((name) => {
//   name.innerHTML = "poopy pie";
  
// });


Array.from(secondElement).forEach((item) => {
  item.textContent += ' book title'
  
});

const booklist = document.querySelector("#book-list");
// console.log('booklist: ', booklist.innerHTML);


booklist.innerHTML += "<li>Poopy pants</li>";


// console.log(booklist);
console.log("the parent node is: ", booklist.parentNode);
console.log("the parent element is: ", booklist.parentElement);
console.log("the children are: ", booklist.children);




// const arr2 = [...items];
// console.log('arr2: ', arr2);

// // const arr = Array.from(items);
// // console.log('arr', arr);

// console.log(Array.isArray(items));

// let arr = Array.from(items).forEach((item) => {
//   console.log(item);
// });

// console.log(Array.isArray(arr));
// console.log('arr : ', arr );



// items.forEach((item) => {
//   console.log(item);
  
// })

const banner = document.querySelector("#page-banner");

console.log(banner.nodeType);
console.log(banner.nodeName);
console.log(banner.hasChildNodes());


const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

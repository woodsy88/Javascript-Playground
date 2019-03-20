let getFoodPrice = (food, price) => {
  let foodprice = {};
  foodprice[food] = price;
  return foodprice;
}
let nachoPrice = getFoodPrice('nachos', '5');
console.log(nachoPrice); // { nachos: 5 };
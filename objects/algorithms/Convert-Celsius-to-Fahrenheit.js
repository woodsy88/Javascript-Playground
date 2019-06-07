// temperature in Celsius times 9/5, plus 32.

function convertToF(celsius) {
  let fahrenheit = (celsius * (9/5)) + 32;
  console.log('(celsius * (9/5)) + 32: ', (celsius * (9/5)) + 32);
  return fahrenheit;
}

convertToF(30);
convertToF(-30);
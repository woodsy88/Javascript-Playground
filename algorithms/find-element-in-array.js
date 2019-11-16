function findElement(arr, func) {
  let num = 0;


    for (let index = 0; index < arr.length; index++) {
      num = arr[index];
      console.log(num);
          if(func(num)) {
            return num;
          }
      }

  // newArr.forEach((item) => console.log(item));

  return undefined;


}

findElement([1, 2, 3, 4], num => num % 2 === 0);
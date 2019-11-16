function bouncer(arr) {
  // Don't show a false ID to this bouncer.
console.log(arr);

  const filterFalse = arr.filter((item) => {
   return Boolean(item) !== false;
   
  });

  console.log(filterFalse);
  
  return filterFalse;
}

console.log(bouncer([7, "ate", "", false, 9]))
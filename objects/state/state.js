const storeProducts = [{
      id: 1,
      title: "Google",
    },
    {
      id: 2,
      title: "Samsung",
    }];

   let tempProducts = [];

   storeProducts.forEach(item => {
     console.log(item);
     
     const singleItem = {
       ...item     
     };

     console.log(singleItem);
     
     tempProducts = [...tempProducts, singleItem];
     console.log(tempProducts);
     
   })

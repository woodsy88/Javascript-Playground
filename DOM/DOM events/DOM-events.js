var h2 = document.querySelector('#book-list h2');
const bannerContent = document.querySelector('#page-banner .banner-content');
const containerHeader = document.querySelector('.container-header');

containerHeader.addEventListener('click', function(e){
  // the element we are calling the event on
  console.log(e.target);
  // the event itself
  console.log(e); 

  console.log(e.altKey);  
  console.log(e.layerX);  

  if (e.shiftKey == true) {
    alert("farts")
  }
})

bannerContent.addEventListener('click', function(e){
  bannerContent.textContent = "i changed";
})

function updateText(element) {
  element.textContent = "poopy";
}

h2.addEventListener('click', updateText);

const buttons = document.querySelectorAll('#book-list .delete');


// buttons.forEach((button) => {
//   button.addEventListener('click', function(e){
//       console.log(e);

//       const li = e.target.parentElement;
//       li.parentNode.removeChild(li);
//   })
// })

const link = document.querySelector('#page-banner a');

link.addEventListener('click', (e) => {
  console.log(e);
  e.preventDefault();
  console.log(e.target);
  e.target.textContent = "button not working"
  
})


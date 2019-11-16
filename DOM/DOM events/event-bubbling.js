const list = document.querySelector('#book-list');

// delete item
list.addEventListener('click', (e) => {
  console.log('non-bubbler ran delete');
  
  // check if the target element clicked is a button with the class 'delete'
  if (e.target.className == 'delete') {
   
    // get the buttons parent element, which is an <li>
    const li = e.target.parentElement;
    // remmove the <li> from the <ul>
    list.removeChild(li);
  }
})

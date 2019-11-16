
// Clear inputs on each page load
window.onload = function () {
  const inputs = document.querySelectorAll('input[type="text"]');

  inputs.forEach((input) => {
    input.value = '';
  })
  
}

document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('#book-list .delete');
  const list = document.querySelector('#book-list');

  // delete item
  list.addEventListener('click', (e) => {
    console.log('non-bubbler ran delete');

    // check if the target element clicked is a button with the class 'delete'
    if (e.target.className == 'delete') {

      // get the buttons parent element, which is an <li>z
      const li = e.target.parentElement;
      // remmove the <li> from the <ul>
      list.removeChild(li);
    }
  })

  // Add item

  const addForm = document.querySelector('#add-book');
  const toRead = document.querySelector('#book-list');

  addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let value = addForm.querySelector('input[type="text"]').value;
    console.log(value);

    // create elements
    const li = document.createElement("li");
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('button');

    // add content
    deleteBtn.textContent = 'delete';

    bookName.textContent = value;
    // style added element
    li.style.color = "red";

    // add classes
    bookName.classList.add('name');
    // bookName.classList.remove('name');
    deleteBtn.classList.add('delete')

    // deleteBtn.className = 'delete';

    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    toRead.appendChild(li);

    addForm.reset();

  });


  // checkbox hide books

  const hideBox = document.querySelector('#hide');

  hideBox.addEventListener('change', (e) => {

    if (hideBox.checked) {
      list.style.display = 'none';
    } else {
      list.style.display = "initial";
    }
  })



  // Search

  const searchBar = document.forms["search-books"].querySelector('input');
  const searchForm = document.forms["search-books"];


  // prevent search form from submitting
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchBar.value = '';
  });

  searchBar.addEventListener('keyup', (e) => {

    // get the value from the input each time key is pressed
    const term = e.target.value.toLowerCase();
    console.log('term', term);


    const books = list.getElementsByTagName('li');

    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;

      if (title.toLowerCase().indexOf(term) != -1) {
        book.style.display = 'block';
        console.log('found me');

      } else {
        book.style.display = 'none';
        console.log('did not find me');

      }
    })
  })


  // Show tabbed content

  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');

  tabs.addEventListener('click', function (e) {
    // did we click on a <li>?
    if (e.target.tagName == "LI") {
      // dataset looks for data attributes - item is the data-item name
      const targetPanel = document.querySelector(e.target.dataset.item);

      panels.forEach((panel) => {
        if (panel == targetPanel) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      })
    }
  })

})

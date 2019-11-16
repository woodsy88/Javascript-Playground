const addForm = document.querySelector('#add-book');
const toRead = document.querySelector('#to-read');

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);

  // create elements
  const li = document.createElement("li");
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add content
  deleteBtn.textContent = 'delete';
  deleteBtn.;
  bookName.textContent = value;
  
  // append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  toRead.appendChild(li);

})

const data = JSON.parse(localStorage.getItem('BookList'));

const root = document.getElementById('root');
const wrapperBooks = document.createElement('div');
wrapperBooks.className = 'wrapper-books';

const wrapperPreview = document.createElement('div');
wrapperPreview.className = 'wrapper-preview';
root.append(wrapperBooks)
root.append(wrapperPreview)

function createBooksList(arr1) {
  let ul = document.createElement('ul');
  for (let i = 0; i < arr1.length; i++) {
    let li = document.createElement('li');
    li.className = 'list-item';
    let a = document.createElement('a');
    a.className = 'img-book'
    a.append(arr1[i].bookName);
    a.setAttribute('href', `#preview`);
    a.addEventListener('click', function () {
      console.log('Info about book!');
      history.pushState({ id: arr1[i].uid }, 'Priview Book', `?id=${arr1[i].uid}#preview`);
    })
    let editBook = document.createElement('button');
    editBook.className = 'edit-book';
    editBook.append('Edit')
    li.append(a);
    li.append(editBook);
    ul.append(li);
    wrapperBooks.append(ul);
  }
  let addBook = document.createElement('button');
  addBook.append('Add');
  addBook.className = 'add-book';
  addBook.addEventListener('click', function () {
    console.log('Add book');
  })
  ul.append(addBook);

  return wrapperBooks;
}

function createPreview(book) {
  let div = document.createElement('div');
  div.className = 'preview-block';
  let h1 = document.createElement('h1');
  h1.className = 'book-name';
  h1.append(book.bookName);
  let p = document.createElement('p');
  p.className = 'author-book';
  p.append(book.author);
  let img = document.createElement('img');
  img.className = 'img-book';
  img.setAttribute('src', book.img)
  img.append(book.img);
  let description = document.createElement('p');
  description.className = 'book-plot';
  description.append(book.plot);
  div.append(h1);
  div.append(p);
  div.append(img);
  div.append(description);
  return div;
}

function editBook(book) {
  let form = document.createElement('form');
  form.className = 'form';
  let labelBookName = document.createElement('label');
  labelBookName.append('Book Name:');
  let inputBookName = document.createElement('input');
  inputBookName.setAttribute('type', 'text');
  inputBookName.setAttribute('required', '');
  inputBookName.setAttribute('value', book.bookName);
  let labelAuthor = document.createElement('label');
  labelAuthor.append('Author:');
  let inputAuthor = document.createElement('input');
  inputAuthor.setAttribute('type', 'text');
  inputAuthor.setAttribute('required', '');
  inputAuthor.setAttribute('value', book.author);
  let labelimgUrl = document.createElement('label');
  labelimgUrl.append('Image Url:');
  let inputimgUrl = document.createElement('input');
  inputimgUrl.setAttribute('type', 'text');
  inputimgUrl.setAttribute('required', '');
  inputimgUrl.setAttribute('value', book.img);
  let labelPlot = document.createElement('label');
  labelPlot.append('Plot:');
  let inputPlot = document.createElement('input');
  inputPlot.setAttribute('type', 'text');
  inputPlot.setAttribute('required', '');
  inputPlot.setAttribute('value', book.plot);
  let cancelButton = document.createElement('button');
  cancelButton.append('Cancel');
  cancelButton.addEventListener('click', function () {
    prompt('Discard changes?', '');
  })
  let saveButton = document.createElement('button');
  saveButton.append('Save');
  saveButton.addEventListener('click', function () {
    setTimeout("alert('Book successfully updated')", 300);
  })
  form.append(labelBookName);
  form.append(inputBookName)
  form.append(labelAuthor);
  form.append(inputAuthor);
  form.append(labelimgUrl);
  form.append(inputimgUrl);
  form.append(labelPlot);
  form.append(inputPlot);
  form.append(cancelButton);
  form.append(saveButton);
  return form;
}

function addBook() {
  let form = document.createElement('form');
  form.className = 'form';
  let labelBookName = document.createElement('label');
  labelBookName.append('Book Name:');
  let inputBookName = document.createElement('input');
  inputBookName.setAttribute('type', 'text');
  inputBookName.setAttribute('required', '');
  let labelAuthor = document.createElement('label');
  labelAuthor.append('Author:');
  let inputAuthor = document.createElement('input');
  inputAuthor.setAttribute('type', 'text');
  inputAuthor.setAttribute('required', '');
  let labelimgUrl = document.createElement('label');
  labelimgUrl.append('Image Url:');
  let inputimgUrl = document.createElement('input');
  inputimgUrl.setAttribute('type', 'text');
  inputimgUrl.setAttribute('required', '');
  let labelPlot = document.createElement('label');
  labelPlot.append('Plot:');
  let inputPlot = document.createElement('input');
  inputPlot.setAttribute('type', 'text');
  inputPlot.setAttribute('required', '');
  let cancelButton = document.createElement('button');
  cancelButton.append('Cancel');
  cancelButton.addEventListener('click', function () {
    prompt('Discard changes?', '');
  })
  let saveButton = document.createElement('button');
  saveButton.append('Save');
  saveButton.addEventListener('click', function () {
    setTimeout("alert('Book successfully updated')", 300);
  })
  form.append(labelBookName);
  form.append(inputBookName)
  form.append(labelAuthor);
  form.append(inputAuthor);
  form.append(labelimgUrl);
  form.append(inputimgUrl);
  form.append(labelPlot);
  form.append(inputPlot);
  form.append(cancelButton);
  form.append(saveButton);
  return form;
}

function editableBooks(root, arr1) {
  root.append(createBooksList(arr1));
}

/*
function dynamicSection(root, book) {
  root.append(editBook(book[0]));
  root.append(addBook(book[0]));
}*/

window.onpopstate = function (event) {
  alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
  const parsedUrl = new URL(window.location.href);
  console.log(parsedUrl.hash);
  wrapperPreview.innerHTML = ''
  if (parsedUrl.hash === '#preview') {
    const id = parsedUrl.searchParams.get('id');
    const book = data.find(element => element.uid === Number(id))
    wrapperPreview.append(createPreview(book))
  } else if (parsedUrl.hash !== '#preview') {
    return 'hejgew';
  }
}

editableBooks(wrapperBooks, data);
// dynamicSection(root, data);
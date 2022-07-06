//  TODO
//  

const container = document.querySelector('.container');
const form = document.querySelector('#book-form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const modal = document.querySelector('.modal');
const addButton = document.querySelector('.btn-add-book');


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let myLibrary = [];

function displayBook() {
    container.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        // Book card
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.setAttribute('data-index', i);
        container.appendChild(bookCard);

        // Book title
        const bookTitle = document.createElement('p');
        bookTitle.textContent = myLibrary[i].title;
        bookCard.appendChild(bookTitle);

        // Book author
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = myLibrary[i].author;
        bookCard.appendChild(bookAuthor);

        // Book pages
        const bookPages = document.createElement('p');
        bookPages.textContent = myLibrary[i].pages;
        bookCard.appendChild(bookPages);
    }
}

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    displayBook();
}

const submitButton = document.querySelector('.btn-submit');
submitButton.addEventListener('click', () => {
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value);
    form.reset();
})

addButton.addEventListener('click', () => {
    modal.style.display = 'block';
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

addBookToLibrary('Arctic', 'Turner', 22);
addBookToLibrary('More', 'Tim Mark', 432);
addBookToLibrary('Endsar', 'Bail Torn', 242);





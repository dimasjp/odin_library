
const container = document.querySelector('.container');
const form = document.querySelector('#book-form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const modal = document.querySelector('.modal');
const addButton = document.querySelector('.btn-add-book');
const closeButton = document.querySelector('.btn-close-modal');


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let myLibrary = [];

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    displayBook();
}

const submitButton = document.querySelector('.btn-submit');
submitButton.addEventListener('click', () => {
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value);
    form.reset();
    closeModal();
})

// Open form modal
addButton.addEventListener('click', () => {
    modal.style.display = 'block';
})

// Close form modal
document.addEventListener('click', (event) => {
    if (event.target === modal || event.target === closeButton) {
        closeModal();
    }
})

function closeModal() {
    modal.style.display = 'none';
}

// Display form input into card
function displayBook() {
    container.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.setAttribute('data-index', i);
        container.appendChild(bookCard);

        const bookTitle = document.createElement('p');
        bookTitle.classList.add('card-title');
        bookTitle.textContent = myLibrary[i].title;
        bookCard.appendChild(bookTitle);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = "A";
        bookCard.appendChild(deleteButton);

        const cardDivider = document.createElement('div');
        cardDivider.classList.add('divider');
        bookCard.appendChild(cardDivider);

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = "by " + myLibrary[i].author;
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.textContent = myLibrary[i].pages + " pages";
        bookCard.appendChild(bookPages);

        const bookStatus = document.createElement('button');
        bookStatus.textContent = "READ";
        bookCard.appendChild(bookStatus);
    }
}

//Delete card and remove book from library
document.addEventListener('click', (event) => {
    if (event.target.className === 'delete-btn') {
        removeBook(event);
    }
})

function removeBook(event) {
    const index = event.target.parentElement.getAttribute('data-index');
    myLibrary.splice(index, 1);
    displayBook();
}

addBookToLibrary('Arctic', 'Turner', 22);
addBookToLibrary('More', 'Tim Mark', 432);
addBookToLibrary('Endsar', 'Bail Torn', 242);





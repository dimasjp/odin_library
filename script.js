
const container = document.querySelector('.container');
const form = document.querySelector('#book-form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const statusInput = document.querySelector('#status');
const modal = document.querySelector('.modal');
const addButton = document.querySelector('.btn-add-book');
const closeButton = document.querySelector('.btn-close-modal');


function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

let myLibrary = [];

function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    displayBook();
}

const submitButton = document.querySelector('.btn-submit');
submitButton.addEventListener('click', () => {
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, statusInput.checked);
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

        const cardTitle = document.createElement('div');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = myLibrary[i].title;
        bookCard.appendChild(cardTitle);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = "X";
        cardTitle.appendChild(deleteButton);

        const cardAuthor = document.createElement('p');
        cardAuthor.textContent = "by " + myLibrary[i].author;
        bookCard.appendChild(cardAuthor);

        const cardPages = document.createElement('p');
        cardPages.classList.add('card-details');
        cardPages.textContent = myLibrary[i].pages + " pages";
        bookCard.appendChild(cardPages);

        const cardStatus = document.createElement('button');
        cardStatus.classList.add('status-btn');
        if (myLibrary[i].status == true) {
            cardStatus.textContent = "Read";
            cardStatus.style.backgroundColor = '#059669';
        } else {
            cardStatus.textContent = "Not Read";
            cardStatus.style.backgroundColor = '#DC2626';
        }
        bookCard.appendChild(cardStatus);
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

document.addEventListener('click', (event) => {
    if (event.target.className === 'status-btn') {
        changeBookStatus(event);
    }
})

function changeBookStatus(event) {
    const index = event.target.parentElement.getAttribute('data-index');
    if (myLibrary[index].status === true) {
        myLibrary[index].status = false;
    } else {
        myLibrary[index].status = true;
    }
    displayBook();
}

addBookToLibrary('Arctic', 'Turner', 22, true);
addBookToLibrary('More', 'Tim Mark', 432, false);
addBookToLibrary('Endsar', 'Bail Torn', 242, true);
addBookToLibrary('Rome', 'Marcus Timmer', 224, false);
addBookToLibrary('Rose', 'Vale Thorne', 42, false);
addBookToLibrary('Desert', 'Turner', 23, true);





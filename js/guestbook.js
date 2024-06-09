const host = "http://35.169.119.254:8086";
// const host = "http://localhost:8085";
const guestBook = document.querySelector('.guest_book');

function getGuestBooks() {
    axios.get(`${host}/guestbook`)
    .then(response => {
        console.log(response.data);
        renderGuestBooks(response.data.books);
    })
    .catch(error => {
        console.error('Error fetching books:', error);
    });
}

function renderGuestBooks(books) {
    guestBook.innerHTML = '';
    books.forEach(book => {
        const bookArticle = document.createElement('article');
        bookArticle.classList.add('item');
        const bookh1 = document.createElement('h1');
        bookh1.textContent = book.title;
        const bookp = document.createElement('p');
        bookp.textContent = book.body;
        const timestamp = document.createElement('p');
        timestamp.classList.add("timestamp");
        timestamp.textContent = book.time;

        bookArticle.appendChild(bookh1);
        bookArticle.appendChild(bookp);
        bookArticle.appendChild(timestamp);

        guestBook.appendChild(bookArticle);

        const btnDelete = document.createElement('a');
        btnDelete.classList.add('delete_btn');
        btnDelete.textContent = '지우기';
        btnDelete.addEventListener('click', function() {
            deleteGuestBook(book.id);
        });

        bookArticle.appendChild(btnDelete);
    });
}

window.addEventListener('DOMContentLoaded', function () {
    getGuestBooks();
});

const inputTitle = document.querySelector(".input_nickname");
const inputBody = document.querySelector(".input_body");
const submitBtn = document.querySelector(".submit_btn");


submitBtn.addEventListener('click', function (event) {
    addGuestBook();
});

function addGuestBook() {
    const new_title = inputTitle.value.trim();
    const new_body = inputBody.value.trim();
    let today = new Date();
    const timestamp = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate() + " " +  today.getHours() + ":" + today.getMinutes();
    let newData = {
        id: 0,
        title: new_title,
        body: new_body,
        time: timestamp,
    };
    if(new_title == '' | new_body == '') return;

    axios.post(`${host}/guestbook`, newData)
        .then(response => {
            inputTitle.value = '';
            inputBody.value = '';
            getGuestBooks();
        }).catch(error => {
            console.error("Error adding guestbook:", error);
        });
}

function deleteGuestBook(bookId) {
    axios.delete(`${host}/guestbook/${bookId}`)
        .then(function (response) {
            console.log('Deleted');
            getGuestBooks();
        }).catch(error => {
            console.error('Error deleting book:', error);
        });
}
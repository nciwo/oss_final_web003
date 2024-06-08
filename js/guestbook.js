// const host = "http://35.169.119.254:8085";
const host = "http://localhost:8085";
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
        // <%# bookArticle.textContent = todo.item; %>
        const bookh1 = document.createElement('h1');
        bookh1.textContent = book.title;
        const bookp = document.createElement('p');
        bookp.textContent = book.body;
        bookArticle.appendChild(bookh1);
        bookArticle.appendChild(bookp);

        guestBook.appendChild(bookArticle);

        const btnDelete = document.createElement('a');
        btnDelete.classList.add('delete_btn');
        btnDelete.textContent = '읭';
        btnDelete.addEventListener('click', function() {
            deleteGuestBook(book.id);
        });

        bookArticle.appendChild(btnDelete);
    });
}

window.addEventListener('DOMContentLoaded', function () {
    getGuestBooks();
});

// const inputTitle = document.querySelector(".input_title");
// const inputBody = document.querySelector(".input_body");


// inputBody.addEventListener('keypress', function (event) {
//     if(event.key == 'Enter') {
//         addGuestBook();
//     }
// });

function addGuestBook() {
    const new_title = inputTitle.value.trim();
    const new_body = inputBody.value.trim();
    let newData = {
        id: 0,
        title: new_title,
        body: new_body,
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
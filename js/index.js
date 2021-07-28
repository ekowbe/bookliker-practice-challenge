const URL_PREFIX = 'http://localhost:3000/';

document.addEventListener("DOMContentLoaded", function() {
    // get list of books and render them

    fetch(URL_PREFIX + 'books')
        .then(rsp => rsp.json())
        .then(books => {
            console.log(books)
            // get the div
            const bookListPanel = document.querySelector('#list-panel')
            const bookList = bookListPanel.ul
            bookListPanel.innerHTML = ''

            // populate with books
            for (let i = 0; i < books.length; i++) {
                const book = books[i];
                
            }
        })
});

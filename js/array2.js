window.onload = () => {
    loadBookList();
};

const bookList = new Array();

const addBookOnClickHandle = () => {
    const book = {
        bookName: document.querySelector(".book-name-input").value,
        auther: document.querySelector(".auther-input").value,
        publisher: document.querySelector(".publisher-input").value
    }

    bookList.push(book)
    loadBookList();
};

bookList.push({
    bookName: "책1",
    auther: "저자1",
    publisher: "출판사1"
});
bookList.push({
    bookName: "책2",
    auther: "저자2",
    publisher: "출판사2"
});
bookList.push({
    bookName: "책3",
    auther: "저자3",
    publisher: "출판사3"
});
bookList.push({
    bookName: "책4",
    auther: "저자4",
    publisher: "출판사4"
});
bookList.push({
    bookName: "책5",
    auther: "저자5",
    publisher: "출판사5"
});

const loadBookList = () => {
    const bookListOl = document.querySelector(".book-list");

    bookListOl.innerHTML = bookList.map((book) => {
        return `
            <li>
                <span>${book.bookName}</span> | <span>${book.auther}</span> | <span>${book.publisher}</span>
            </li>
        `;
    }).join("");
};
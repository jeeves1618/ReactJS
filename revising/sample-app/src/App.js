import Header from "./header/Header";
import Form from "./form/Form";
import BookList from "./list/BookList";
import { useState } from "react";
function App() {
  let defaultBooks = [
    { title: "The Blind Watchmaker", bookId: "B001" },
    { title: "A random walk down wall street", bookId: "B002" },
    { title: "Arguably", bookId: "B003" },
  ];

  const [bookList, setBookList] = useState(defaultBooks);

  function addBooks(bookAdded) {
    let newBook = {
      title: bookAdded,
      bookId: "B004",
    };
    let pushList = defaultBooks;
    pushList.push(newBook); //Push is not working here. Every time I add a new book, it replacing the 4th one in the defaultBooks list above.
    setBookList(function addBook(existingBooks) {
      return [newBook, ...existingBooks]; //Spread operator works here. I have to analyze why push isn't working.
    });
    console.log("bookList : " + bookList);
    console.log("pushList : " + pushList);
  }

  return (
    <div className="App">
      <Header></Header>
      <Form onAddBook={addBooks}></Form>
      <BookList books={bookList}></BookList>
    </div>
  );
}

export default App;

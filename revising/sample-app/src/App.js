import Header from "./header/Header";
import Form from "./form/Form";
import FormModule from "./form/FormModule";
import BookList from "./list/BookList";
import { useState } from "react";
function App() {
  let defaultBooks = [
    {
      title: "The Blind Watchmaker",
      bookId: Math.trunc(Math.random().toString() * 1000000),
      isbn: "978-0393022162",
    },
    {
      title: "A random walk down wall street",
      bookId: Math.trunc(Math.random().toString() * 1000000),
      isbn: "978-0393047813",
    },
    {
      title: "Arguably",
      bookId: Math.trunc(Math.random().toString() * 1000000),
      isbn: "978-1455504114",
    },
  ];

  const [bookList, setBookList] = useState(defaultBooks);

  function addBooks(bookAdded) {
    let newBook = {
      title: bookAdded,
      bookId: Math.trunc(Math.random().toString() * 1000000),
      /*
      bookId: 500,

      The above value assignment on key would have resulted in the warning:Encountered 
      two children with the same key, `500`. Keys should be unique so that components 
      maintain their identity across updates. Non-unique keys may cause children to be 
      duplicated and/or omitted — the behavior is unsupported and could change in a future version.
 
      */
      isbn: "978-0000000000",
    };
    //let pushList = defaultBooks;
    //pushList.push(newBook); //Push is not working here. Every time I add a new book, it replacing the 4th one in the defaultBooks list above.
    setBookList(function addBook(existingBooks) {
      return [...existingBooks, newBook]; //Spread operator works here. I have to analyze why push isn't working.
    });
  }

  function deleteBooks(bookDeletedTile) {
    console.log(bookDeletedTile + " is deleted");
    setBookList(function delBook(existingBooks) {
      const updatedList = existingBooks.filter(
        (book) => book.title !== bookDeletedTile
      );
      return updatedList;
    });
  }

  return (
    <div className="App">
      <Header></Header>
      <Form onAddBook={addBooks}></Form>
      <BookList books={bookList} onDeleteBook={deleteBooks}></BookList>
      <hr></hr>
      <h2>Form using CSS Module</h2>
      <FormModule onAddBook={addBooks}></FormModule>
    </div>
  );
}

export default App;

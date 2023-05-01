import React from "react";
import "./BookList.css";
import BookItem from "./BookItem";
import BookTable from "./BookTable";

function BookList(props) {
  function deleteHandler(bookDeletedTile) {
    //event.preventDefault(); //This is preventing the reload of the page. It retains the below console log.
    props.onDeleteBook(bookDeletedTile);
    console.log("Delete Button Pressed in the list");
  }

  return (
    <div className="mainSection">
      <h2>Book Catalogue</h2>
      <p className="viewToggle">Table View | Tile View</p>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
          </tr>
        </thead>
        {props.books.map((book) => (
          <BookTable
            key={book.bookId}
            title={book.title}
            isbn={book.isbn}
          ></BookTable>
        ))}
      </table>
      {props.books.map((book) => (
        <BookItem
          key={book.bookId}
          title={book.title}
          isbn={book.isbn}
          deleteHandler={deleteHandler}
        ></BookItem>
      ))}
    </div>
  );
}

export default BookList;

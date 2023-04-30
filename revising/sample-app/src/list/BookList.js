import React from "react";
import "./BookList.css";

function BookList(props) {
  return (
    <div>
      <h2>Book Catalogue</h2>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
          </tr>
        </thead>
        {props.books.map((book) => (
          <tbody>
            <tr>
              <td>{book.bookId}</td>
              <td>{book.title}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default BookList;

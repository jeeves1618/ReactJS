import React from "react";
import "./BookList.css";
import BookItem from "./BookItem";
import BookTable from "./BookTable";
import BookTableStyled from "./BookTableStyled";
import styled from "styled-components";

function BookList(props) {
  function deleteHandler(bookDeletedTile) {
    //event.preventDefault(); //This is preventing the reload of the page. It retains the below console log.
    props.onDeleteBook(bookDeletedTile);
    console.log("Delete Button Pressed in the list");
  }

  const BooksTable = styled.table`
    border-collapse: collapse;
    border-radius: 6px;
    width: 50%;
    border: 1px solid;
    margin: auto;

    @media (max-width: 1000px) {
      border: 2px solid red;
    }
  `;

  const BooksTableHeader = styled.thead``;

  const BooksTableHeading = styled.th`
    padding: 5px 0px 5px 5px;
    border: 1px solid;
  `;

  const BooksTableRow = styled.tr``;

  return (
    <div className="mainSection">
      <h2>Books in Table Format</h2>
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
      <h2>Books in Styled Table</h2>
      <BooksTable>
        <BooksTableHeader>
          <BooksTableRow>
            <BooksTableHeading>ISBN</BooksTableHeading>
            <BooksTableHeading>Title</BooksTableHeading>
          </BooksTableRow>
        </BooksTableHeader>
        {props.books.map((book) => (
          <BookTableStyled
            key={book.bookId}
            title={book.title}
            isbn={book.isbn}
          ></BookTableStyled>
        ))}
      </BooksTable>
      <h2>Books in Tile</h2>
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

import React from "react";
import "./BookItem.css";

function BookItem(props) {
  function deleteHandler(event) {
    event.preventDefault(); //This is preventing the reload of the page. It retains the below console log.
    console.log("Delete Button Pressed");
    props.deleteHandler(props.title);
  }
  return (
    <div>
      <br></br>
      <ul>
        <div className="isbnElement">
          <p>{props.isbn}</p>
        </div>
        <div className="bookElement">
          <p>{props.title}</p>
        </div>
      </ul>
      <div className="delUpdButton">
        <form onSubmit={deleteHandler}>
          <button type="submit">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default BookItem;

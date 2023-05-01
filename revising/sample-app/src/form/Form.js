import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const [enteredValue, setEnteredValue] = useState("");

  function newTitleHandler(event) {
    setEnteredValue(event.target.value);
  }

  function addToCatalogueHandler(event) {
    event.preventDefault(); //This is preventing the reload of the page. It retains the below console log.
    props.onAddBook(enteredValue);
    setEnteredValue("");
  }

  return (
    <form onSubmit={addToCatalogueHandler}>
      <div className="formSection">
        <h2>Please enter the title of the book to be added to catalogue</h2>
        <input
          type="text"
          size="80"
          value={enteredValue}
          onChange={newTitleHandler}
        ></input>
        <button type="submit">Add to catalogue</button>

        <p></p>
        <hr></hr>
      </div>
    </form>
  );
}

export default Form;

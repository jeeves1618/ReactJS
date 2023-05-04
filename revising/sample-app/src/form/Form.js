import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidTitle, setIsValidTitle] = useState("true");
  function newTitleHandler(event) {
    setIsValidTitle(true);
    setEnteredValue(event.target.value);
  }

  function addToCatalogueHandler(event) {
    event.preventDefault(); //This is preventing the reload of the page. It retains the below console log.
    if (enteredValue.trim().length === 0) {
      setIsValidTitle(false);
      return;
    }
    props.onAddBook(enteredValue);
    setEnteredValue("");
  }

  return (
    <form onSubmit={addToCatalogueHandler}>
      <div className="formSection">
        <h2 style={{ color: !isValidTitle ? "red" : "black" }}>
          Please enter the title of the book to be added to catalogue
        </h2>
        <input
          type="text"
          size="80"
          value={enteredValue}
          onChange={newTitleHandler}
          style={{
            backgroundColor: !isValidTitle ? "#E7BFBF" : "white",
            borderColor: !isValidTitle ? "red" : "black",
          }}
        ></input>
        <div className={`form-control ${!isValidTitle ? "invalid" : ""}`}>
          <button type="submit">Add to catalogue</button>
        </div>
        <p></p>
        <hr></hr>
      </div>
    </form>
  );
}

export default Form;

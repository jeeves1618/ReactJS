import React, { useState } from "react";
import Styles from "./Form.module.css";
import Button from "../utils/Button";

function FormModule(props) {
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
      console.log(
        "Is the book title empty ? " +
          enteredValue.trim().length +
          " and " +
          isValidTitle
      );
      return;
    }
    props.onAddBook(enteredValue);
    setEnteredValue("");
  }

  console.log(
    "Is the book title empty ? " +
      enteredValue.trim().length +
      " and " +
      isValidTitle
  );

  return (
    <form onSubmit={addToCatalogueHandler}>
      <div className={Styles.formModuled}>
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
        <div
          className={`${Styles.formModule}  ${!isValidTitle && Styles.empty}`}
        >
          <Button type="submit">Add to catalogue</Button>
        </div>
        <p></p>
        <hr></hr>
      </div>
    </form>
  );
}

export default FormModule;

import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState("");

  function goalInputChangeHandler(event) {
    setEnteredValue(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Task to be Accomplished</label>
        <input type="text" onChange={goalInputChangeHandler}></input>
      </div>
      <Button type="submit"></Button>
    </form>
  );
}

export default CourseInput;

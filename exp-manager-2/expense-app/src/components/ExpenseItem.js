import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const hoverHandler = () => {
    console.log("Mouse overed....");
    //userState returns a function.
    //It returns an array. First array item is the variable. Second one is the function that updates the variable
  };

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2 onMouseOver={hoverHandler}>{title}</h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

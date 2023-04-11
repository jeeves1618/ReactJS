import "./ExpenseDate.css";
function ExpenseDate(props) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {props.date.toLocaleString("en-IN", { month: "long" })}
      </div>
      <div className="expense-date__year">
        {props.date.toLocaleString("en-IN", { year: "numeric" })}
      </div>
      <div className="expense-date__day">
        {props.date.toLocaleString("en-IN", { day: "numeric" })}
      </div>

      <div className="expense-date__time">
        {props.date.toLocaleTimeString("en-IN")}
      </div>
    </div>
  );
}

export default ExpenseDate;

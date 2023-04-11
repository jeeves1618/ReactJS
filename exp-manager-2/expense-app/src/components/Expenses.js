import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [defaultYear, setSelectedYear] = useState("2005");
  function filterChangeController(selectedYear) {
    console.log(selectedYear);
    setSelectedYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === defaultYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={defaultYear}
          onChangeFilter={filterChangeController}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        {filteredExpenses.length === 0 ? (
          <p className="expenses-list__fallback">No shows found!</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.expenseid}
              amount={expense.amount}
              date={expense.date}
              title={expense.title}
              className="expenses-list"
            ></ExpenseItem>
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;

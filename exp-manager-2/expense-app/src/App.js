import Expenses from "./components/Expenses";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    expenseid: "E01",
    title: "The protector",
    amount: 300,
    date: new Date("2005-01-26T08:10:00"),
  },
  {
    expenseid: "E02",
    title: "Roaring Fire (1981)",
    amount: 375,
    date: new Date("2005-01-27T08:03:00"),
  },
  {
    expenseid: "E03",
    title: "Drink, eat, pray",
    amount: 400,
    date: new Date("2005-01-31T08:16:00"),
  },
  {
    expenseid: "E04",
    title: "Fountainhead of joy",
    amount: 350,
    date: new Date("2005-02-01T08:11:00"),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expenseData) {
    console.log(expenseData);
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  }
  return (
    <div>
      <h1>It's show time!</h1>
      <hr></hr>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;

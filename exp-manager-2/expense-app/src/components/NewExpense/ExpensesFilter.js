import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  function dropDownHandler(event) {
    props.onChangeFilter(event.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownHandler}>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

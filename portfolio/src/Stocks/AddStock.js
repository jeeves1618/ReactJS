import React from "react";
import Card from "../UI/Card";
import StockStyle from "./AddStock.module.css";

function AddStock(props) {
  function addStockHandler(event) {
    event.preventDefault();
    console.log("Added Stock");
  }
  return (
    <Card cssClassName={StockStyle.input}>
      <form onSubmit={addStockHandler}>
        <label htmlFor="stockname">Stock Name</label>
        <input id="stockname" type="text"></input>
        <label htmlFor="investment">Investment (in Rupees) </label>
        <input id="investment" type="number"></input>
        <button type="submit">Add Stock to Portfolio</button>
      </form>
    </Card>
  );
}

export default AddStock;

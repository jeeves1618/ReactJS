import React from "react";
import styled from "styled-components";

function BookTable(props) {
  return (
    <tbody>
      <tr>
        <td>{props.isbn}</td>
        <td>{props.title}</td>
      </tr>
    </tbody>
  );
}

export default BookTable;

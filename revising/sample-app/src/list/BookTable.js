import React from "react";

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

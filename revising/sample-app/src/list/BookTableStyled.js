import React from "react";
import styled from "styled-components";

function BookTableStyled(props) {
  let isValid = true;
  if (props.isbn === "978-0000000000") {
    isValid = false;
  }

  let lcTitle = false;
  if (props.title[0] === props.title[0].toLowerCase()) {
    lcTitle = true;
  }

  //Example for dynamically setting the properties by changing class names
  const IsbnColumn = styled.td`
    padding: 5px 0px 5px 5px;
    border: 1px solid black;

    &.invalid {
      color: red;
    }
  `;

  //Example for dynamically setting the properties without changing class names
  //This is not the props passes to this JS component from parent component. This is the props from custom html element to style
  const TitleColumn = styled.td`
    padding: 5px 0px 5px 5px;
    border: 1px solid black;
    color: ${(props) => (props.lcTitle ? "red" : "black")};
  `;

  return (
    <tbody>
      <tr>
        <IsbnColumn className={!isValid ? "invalid" : ""}>
          {props.isbn}
        </IsbnColumn>
        <TitleColumn lcTitle={lcTitle}>{props.title}</TitleColumn>
      </tr>
    </tbody>
  );
}

export default BookTableStyled;

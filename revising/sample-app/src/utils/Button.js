import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: black; /* Green */
  border: solid white 2px;
  color: white;
  padding: 5px 5px;
  margin-left: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    background-color: white; /* Green */
    border: solid black 2px;
    color: black;
  }
`; //This is called tagged template literal

export default Button;

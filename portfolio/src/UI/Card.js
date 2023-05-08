import React from "react";
import CardStyle from "./Card.module.css";

function Card(props) {
  console.log(props.children);
  //props.children will have the elements under the calling element in the parent class
  return (
    <div className={`${CardStyle.card} ${props.cssClassName}`}>
      {props.children}
    </div>
  );
}

export default Card;

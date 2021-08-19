import React from "react";
import "../styles/card.scss";

const Card = (props) => {
  console.log(props);
  return (
    <div className="dishCard" id={props.dish.idMeal}>
      <h1>{props.dish.strMeal}</h1>
    </div>
  );
};

export default Card;

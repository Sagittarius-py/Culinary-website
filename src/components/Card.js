import React from "react";
import "../styles/card.scss";

const Card = (props) => {
  console.log(props);
  return (
    <div className="dishCard" id={props.dish.idMeal}>
      <img src={props.dish.strMealThumb} alt={props.dish.strMealThumb} />

      <div className="dishTitle">
        <h1>{props.dish.strMeal}</h1>
        <h5>#{props.dish.strCategory}</h5>
      </div>
      <div className="text">
        <p>{props.dish.strInstructions}</p>
      </div>
    </div>
  );
};

export default Card;

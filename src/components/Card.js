import React from "react";
import "../styles/card.scss";

import Dish from "./Dish";

const style = {
  width: "800px",
  height: "800px",
  backgroundColor: "white",
  position: "absolute",
  zIndex: 100,
};

const dishDetail = (mealId) => {
  console.log(mealId);
  return (
    <div style={style}>
      <Dish mealId={mealId} />
      {mealId}
    </div>
  );
};

const Card = (props) => {
  console.log(props.dish);

  return (
    <div className="dishCard" onClick={() => dishDetail(props.dish.idMeal)}>
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

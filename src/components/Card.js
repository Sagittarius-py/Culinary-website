import React from "react";

const style = {
  width: "500px",
  height: "500px",
  backgroundColor: "red",
};

const Card = (props) => {
  console.log(props);
  return (
    <div className="dishCard" style={style} id={props.dish.idMeal}>
      <h1>{props.dish.strMeal}</h1>
    </div>
  );
};

export default Card;

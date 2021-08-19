import React from "react";

const style = {
  width: "30rem",
  height: "30rem",
  backgroundColor: "red",
  margin: "4rem",
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

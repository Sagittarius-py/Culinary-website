import React from "react";
import "../styles/dishDetail.scss";

const Dish = (props) => {
  return (
    <div className="dishDetails">
      <h1>cokolwiek{props.mealId}</h1>
    </div>
  );
};

export default Dish;

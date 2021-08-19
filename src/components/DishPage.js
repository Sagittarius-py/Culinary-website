import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";

import { AppContext } from "../Context/AppContext";

const style = {
  display: "flex",
  flexWrap: "wrap ",
  justifyContent: "space-around",
};

const DishPage = () => {
  const [food, setFood] = useState({});
  const [letter, setLetter] = useState({});

  const { letterState } = useContext(AppContext);

  const url =
    "https://www.themealdb.com/api/json/v1/1/search.php?f=" + letterState;

  const fetchFood = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setFood(data.meals);
  };

  if (letter !== letterState) {
    setLetter(letterState);
    fetchFood();
  }

  useEffect(() => {
    fetchFood();
  }, []);

  const generateOneCard = (dish) => {
    return <Card dish={dish} key={Math.random()} />;
  };

  const useGeneratedCards = () => {
    if (food !== null) {
      var result = Array.from(food);
      const newObject = result.map((dish) => generateOneCard(dish));
      return newObject;
    } else {
      return <div>Sorry, we have not dishes for tghis letter</div>;
    }
  };

  return <div style={style}>{useGeneratedCards()}</div>;
};

export default DishPage;
import React, { useState, useEffect } from "react";
import Card from "./components/Card";

const style = {
  display: "flex",
  flexWrap: "wrap ",
  justifyContent: "space-around",
};

const App = () => {
  const [food, setFood] = useState({});

  const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";

  const fetchFood = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setFood(data.meals);
  };

  const generate = (dish) => {
    return <Card dish={dish} key={Math.random()} />;
  };

  const useGenerate = () => {
    var result = Array.from(food);
    const newObject = result.map((dish) => generate(dish));
    return newObject;
  };

  useEffect(() => {
    fetchFood();
  }, []);

  // console.log(state);

  return <div style={style}>{useGenerate()}</div>;
};

export default App;

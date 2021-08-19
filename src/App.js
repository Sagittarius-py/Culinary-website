import React, { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  const [food, setFood] = useState({});

  const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

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

  return <div>{useGenerate()}</div>;
};

export default App;

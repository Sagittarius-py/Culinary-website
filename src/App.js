import React from "react";
import DishPage from "./components/DishPage";
import LetterNav from "./components/LetterNav";

import AppProvider from "./Context/AppContext";

import "./styles/app.scss";

const style = {
  display: "flex",
  flexWrap: "wrap ",
  justifyContent: "space-around",
};

const App = () => {
  // console.log(state);

  return (
    <div className="app">
      <AppProvider>
        <div style={style}>
          <LetterNav />
          <DishPage />
        </div>
      </AppProvider>
    </div>
  );
};

export default App;

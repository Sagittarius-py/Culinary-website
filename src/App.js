import React from "react";
import DishPage from "./components/DishPage";
import LetterNav from "./components/LetterNav";

import AppProvider from "./Context/AppContext";

const style = {
  display: "flex",
  flexWrap: "wrap ",
  justifyContent: "space-around",
};

const App = () => {
  // console.log(state);

  return (
    <AppProvider>
      <div style={style}>
        <LetterNav />
        <DishPage />
      </div>
    </AppProvider>
  );
};

export default App;

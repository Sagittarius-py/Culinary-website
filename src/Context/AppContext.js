import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [letterState, setLetterState] = useState("a");

  const changeLetter = (letter) => setLetterState(letter);

  return (
    <AppContext.Provider
      value={{
        letterState,
        changeLetter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "../styles/letterNav.scss";

const LetterNav = () => {
  const { changeLetter, letterState } = useContext(AppContext);

  const style = {
    backgroundColor: "white",
  };

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const buttonStyle = (letter) => {
    if (letterState === letter.toLowerCase()) {
      return style;
    } else {
      return null;
    }
  };

  const buttonList = alphabet.map((letter) => (
    <button
      style={buttonStyle(letter, style)}
      onClick={() => changeLetter(letter.toLowerCase())}
      key={Math.random()}
    >
      {letter}
    </button>
  ));

  return (
    <div className="navigation">
      <nav className="AlphabetNav">{buttonList}</nav>
    </div>
  );
};

export default LetterNav;

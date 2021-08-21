import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "../styles/letterNav.scss";

const LetterNav = () => {
  const { changeLetter } = useContext(AppContext);

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

  const buttonList = alphabet.map((letter) => (
    <button onClick={() => changeLetter(letter.toLowerCase())}>{letter}</button>
  ));

  return (
    <div className="navigation">
      <nav className="AlphabetNav">{buttonList}</nav>
    </div>
  );
};

export default LetterNav;

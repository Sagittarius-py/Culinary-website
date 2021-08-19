import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const LetterNav = () => {
  const { changeLetter } = useContext(AppContext);

  return (
    <div>
      <nav className="AlphabetNav">
        <button onClick={() => changeLetter("a")}>A</button>
        <button onClick={() => changeLetter("b")}>B</button>
        <button onClick={() => changeLetter("c")}>C</button>
        <button onClick={() => changeLetter("d")}>D</button>
        <button onClick={() => changeLetter("e")}>E</button>
        <button onClick={() => changeLetter("f")}>F</button>
        <button onClick={() => changeLetter("g")}>G</button>
        <button onClick={() => changeLetter("h")}>H</button>
        <button onClick={() => changeLetter("i")}>I</button>
        <button onClick={() => changeLetter("j")}>J</button>
        <button onClick={() => changeLetter("k")}>K</button>
        <button onClick={() => changeLetter("l")}>L</button>
        <button onClick={() => changeLetter("m")}>M</button>
        <button onClick={() => changeLetter("n")}>N</button>
        <button onClick={() => changeLetter("o")}>O</button>
        <button onClick={() => changeLetter("p")}>P</button>
        <button onClick={() => changeLetter("q")}>Q</button>
        <button onClick={() => changeLetter("r")}>R</button>
        <button onClick={() => changeLetter("s")}>S</button>
        <button onClick={() => changeLetter("t")}>T</button>
        <button onClick={() => changeLetter("u")}>U</button>
        <button onClick={() => changeLetter("v")}>V</button>
        <button onClick={() => changeLetter("w")}>W</button>
        <button onClick={() => changeLetter("x")}>X</button>
        <button onClick={() => changeLetter("y")}>Y</button>
        <button onClick={() => changeLetter("z")}>Z</button>
      </nav>
    </div>
  );
};

export default LetterNav;

import React from "react";
import { useRef } from "react";
import { useState } from "react";
import Cubes from "./componenets/Cubes";
import Keyboard from "./componenets/keyboard";

function Grid() {
  const cubeRef = useRef();
  const [col, setCol] = useState(0);
  const [row, setRow] = useState(0);
  const [arr, setArr] = useState([
    [
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
    ],
    [
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
    ],
    [
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
    ],
    [
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
    ],
    [
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
      { letter: "", isCorrect: false, notInPlace: false },
    ],
  ]);
  const clickOnKey = (key) => {
    switch (key) {
      case "enter":
        if (col === 5) {
          cubeRef.current.onEnter(row);
          setRow((prev) => {
            return prev + 1;
          });
          setCol(0);
        }
        break;
      default:
        if (col < 5) {
          setArr((prevState) => {
            let arrCopy = [...prevState];
            arrCopy[row][col].letter = key;
            setCol((prev) => {
              return prev + 1;
            });
            return arrCopy;
          });
        }
    }
  };
  return (
    <div id="CubeLocation" className="CubeLocation">
      <Cubes arr={arr} ref={cubeRef} row={row} />
      <Keyboard handleClick={clickOnKey} />
    </div>
  );
}

export default Grid;

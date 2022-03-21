import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import Cubes from "../componenets/Cubes";

let keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["enter", "z", "x", "c", "v", "b", "n", "m", "delete"],
];
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 5px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function Keyboard() {
  const [arr, setArr] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const clickOnKey = (key) => {
    console.log(key);
    setArr((prevState) => {
      let [i, j] = getIndex();
      let arrCopy = [...prevState];
      console.log(arrCopy);
      arrCopy[i][j] = key;
      console.log([i, j]);
      console.log("the number", [...prevState]);
      return arrCopy;
    });
  };

  const getIndex = () => {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (arr[i][j] == "") return [i, j];
      }
    }
  };

  return (
    <div className="gamekeyboard" id="gamekeyboard">
      <div className="CubeLocation">
        <Cubes arr={arr} />
      </div>
      {keyboard.map((row, index) => {
        return (
          <div className="row" key={index}>
            {row.map((btn, i) => {
              return (
                <Button
                  className="col"
                  key={i}
                  data-key={btn}
                  onClick={(e) => {
                    clickOnKey(e.target.dataset.key);
                  }}
                >
                  {btn.toUpperCase()}
                </Button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;

import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import styled from "styled-components";
import { RowLine } from "./RowLine";
const Cube = styled.div`
  width: 62px;
  height: 62px;
  background-color: white;
  border-color: blue;
  margin: 0 8px;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: gray;
  font-weight: bold;
  padding: 0.5em 1em;
`;
const Cubes = forwardRef((props, ref) => {
  const mainWord = ["C", "L", "O", "U", "D"];
  useImperativeHandle(ref, () => ({
    onEnter(row) {
      for (let j = 0; j < 5; j++) {
        let currentLetter = props.arr[row][j].letter.toUpperCase();
        if (currentLetter === mainWord[j]) {
          props.arr[row][j].isCorrect = true;
        } else if (mainWord.includes(currentLetter)) {
          let countOfSameWord = mainWord.filter((word) => word === currentLetter);
          console.log(mainWord.filter((word) => word === currentLetter).length);
          props.arr[row][j].notInPlace = true;
        }
      }
    },
  }));
  return (
    <div className="container pt-3">
      {props.arr.map((row, i) => {
        return (
          <RowLine key={i}>
            {row.map((cube, index) => {
              return (
                <Cube
                  key={index}
                  data-key={cube.letter}
                  className={cube.isCorrect ? "active" : cube.notInPlace ? "notInPlace" : ""}
                >
                  <Title>{cube.letter.toUpperCase()}</Title>
                </Cube>
              );
            })}
          </RowLine>
        );
      })}
    </div>
  );
});

export default Cubes;

import React, { useState } from "react";
import styled from "styled-components";
import { RowLine } from "./RowLine";
function Cubes(props) {
  const [word, setWord] = useState([]);
  const handleClick = (key) => {
    setWord((prev) => {
      return [...prev, key];
    });
  };
  

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
  return (
    <div className="container pt-3">
      {props.arr.map((row,i) => {
        return (
          <RowLine key={i}>
            {row.map((cube, index) => {
              return (
                <Cube key={index} data-key={cube}>
                   <Title>
                   {cube}
                   </Title>
                </Cube>
              );
            })}
          </RowLine>
        );
      })}
    </div>
  );
}

export default Cubes;

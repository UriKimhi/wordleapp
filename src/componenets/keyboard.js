import "../App.css";
import styled from "styled-components";


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

function Keyboard(props) {
  return (
    <div className="gamekeyboard" id="gamekeyboard">
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
                    props.handleClick(e.target.dataset.key);
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

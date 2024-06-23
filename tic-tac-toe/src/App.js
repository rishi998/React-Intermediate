import { useState } from "react";

export default function App() {
  return (
    <>
      <div className="App">
        <Board />
      </div>
    </>
  );
}

function Board() {
  const [state, setstate] = useState(Array(9).fill(null));
  const [isxturn, setisxturn] = useState(true);

  function handleclick(index) {
    const copystate = [...state];
    copystate[index] = isxturn ? "X" : "O";
    setstate(copystate);
    setisxturn(!isxturn);
  }

  function checkwinner() {
    const winnerlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerlogic) {
      const [a, b, c] = logic;
      if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  }

  const iswinner = checkwinner();
  return (
    <>
      <div className="board-container">
        {iswinner ? (
          <>{iswinner} won the game</>
        ) : (
          <>
            <div className="board-row">
              <Square onClick={() => handleclick(0)} value={state[0]} />
              <Square onClick={() => handleclick(1)} value={state[1]} />
              <Square onClick={() => handleclick(2)} value={state[2]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleclick(3)} value={state[3]} />
              <Square onClick={() => handleclick(4)} value={state[4]} />
              <Square onClick={() => handleclick(5)} value={state[5]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleclick(6)} value={state[6]} />
              <Square onClick={() => handleclick(7)} value={state[7]} />
              <Square onClick={() => handleclick(8)} value={state[8]} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

function Square(props) {
  return (
    <>
      <div
        onClick={props.onClick}
        className="square"
        style={{
          border: "1px solid ",
          height: "100px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5>{props.value}</h5>
      </div>
    </>
  );
}

import React, { useState } from "react";
import Square from "./Square";
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  //console.log("state", state);
  const getValue = (value) => {
    //console.log("clicked on indexed", value);
    if (state[value] !== null) {
      return;
    }
    const copystate = [...state];
    copystate[value] = isXturn ? "X" : "0";
    setState(copystate);
    setIsXturn(!isXturn);
  }

  //New Game
  const NewGame = () => {
    setState(Array(9).fill(null));
  }

  //checking winner
  const checkwinner = () => {

    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }

    }
  }
  const isWinner = checkwinner();

  return (

    <div className="board-container">
      {
        isWinner ? (
          <>{isWinner} won the game <button onClick={NewGame}>Play Again</button></>
        )
          :
          (
            <>
              <h4>Player {isXturn ? "X" : "0"} please move</h4>
              <div className="board-row">
                <Square onClick={() => getValue(0)} value={state[0]} />
                <Square onClick={() => getValue(1)} value={state[1]} />
                <Square onClick={() => getValue(2)} value={state[2]} />
              </div>
              <div className="board-row">
                <Square onClick={() => getValue(3)} value={state[3]} />
                <Square onClick={() => getValue(4)} value={state[4]} />
                <Square onClick={() => getValue(5)} value={state[5]} />
              </div>
              <div className="board-row">
                <Square onClick={() => getValue(6)} value={state[6]} />
                <Square onClick={() => getValue(7)} value={state[7]} />
                <Square onClick={() => getValue(8)} value={state[8]} />
              </div>
            </>
          )
      }
    </div>

  );
};

export default Board;

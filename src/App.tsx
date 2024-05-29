import "./App.css";
import { Square } from "./components/Square";
import { TMine, getMines } from "./components/utils/getBomb";

function App() {
  // do not use new Array(5).fill(new Array(5).fill(0)) as fill method can be a root of cause to modify in same sub array

  const testArray = (num: number) => {
    return Array.from({ length: num }, () =>
      Array.from({ length: num }, () => 0)
    );
  };
  const gameBoard = testArray(5);

  const nums: TMine[] = getMines();

  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      const isMinePosition = nums.some(
        (num) => num.row === i && num.column === j
      );
      if (isMinePosition) {
        gameBoard[i][j] = 0;
      }
      if (!isMinePosition) {
        gameBoard[i][j] = 1;
      }
    }
  }

  return (
    <>
      <p>test</p>
      {gameBoard.map((row, i) => (
        <div className="flex" key={i}>
          {row.map((_, j) => (
            <Square key={j} row={i} column={j} distance={gameBoard[i][j]} />
          ))}
        </div>
      ))}
    </>
  );
}

export default App;

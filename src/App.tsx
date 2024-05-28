import "./App.css";
import { Square } from "./Square";

function App() {
  const gameBoard: number[][] = new Array(5).fill(new Array(5).fill(null));

  return (
    <>
      {gameBoard.map((row, i) => (
        <div className="flex" key={i}>
          {row.map((_, j) => (
            <Square key={j} row={i} column={j} />
          ))}
        </div>
      ))}
    </>
  );
}

export default App;

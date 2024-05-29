export type TMine = {
  row: number;
  column: number;
};

export const getMines = () => {
  let Mines: TMine[] = [];
  const numOfMines = 5;
  for (let x = 0; x < numOfMines; x++) {
    const newRow = Math.floor(Math.random() * 5);
    const newColumn = Math.floor(Math.random() * 5);

    const isExist = Mines.find(
      (mine) => mine.row === newRow && mine.column === newColumn
    );

    !isExist && Mines.push({ row: newRow, column: newColumn });
  }

  return Mines;
};

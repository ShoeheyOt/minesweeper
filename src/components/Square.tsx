import { useState } from "react";

export const Square = ({
  row,
  column,
  distance,
}: {
  row: number;
  column: number;
  distance: number;
}) => {
  const [isSquare, setIsSquare] = useState({
    isClicked: false,
    backGround: "none",
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsSquare({ isClicked: true, backGround: "bg-blue-300" });
  };

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSquare({ isClicked: true, backGround: "bg-red-300" });
  };
  return (
    <div className="w-20 h-20 border border-slate-500">
      <button
        disabled={isSquare.isClicked}
        onClick={(e) => handleClick(e)}
        onContextMenu={(e) => handleRightClick(e)}
        className={`w-full h-full ${isSquare.backGround}`}
      >
        {distance}
      </button>
    </div>
  );
};

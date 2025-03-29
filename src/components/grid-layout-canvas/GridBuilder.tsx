import React from "react";
import GridCell from "./GridCell";
import { GridBuilderProps } from "./types";

const GridBuilder: React.FC<GridBuilderProps> = ({
  rows,
  cols,
  gap,
  gridAreas,
  selectedCells,
  onCellMouseDown,
  onCellMouseEnter,
  onMouseUp,
}) => {
  return (
    <div
      className="grid bg-brand-contrast/5 backdrop-blur-sm border border-brand-contrast/20 rounded-xl p-6 transition-all duration-300 hover:border-brand-contrast/30 shadow-lg shadow-brand-primary/5"
      style={{
        gridTemplateRows: `repeat(${rows}, minmax(40px, 1fr))`,
        gridTemplateColumns: `repeat(${cols}, minmax(40px, 1fr))`,
        gap: `${gap}px`,
      }}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {Array.from({ length: rows }).map((_, rowIndex) =>
        Array.from({ length: cols }).map((_, colIndex) => {
          const row = rowIndex + 1;
          const col = colIndex + 1;
          const cellId = `${row}-${col}`;
          const cell = gridAreas.find(
            (c) => c.row === row && c.col === col
          ) || {
            id: "",
            row: 0,
            col: 0,
            area: "",
          };
          const isSelected = selectedCells.includes(cellId);

          return (
            <GridCell
              key={cellId}
              cell={cell}
              isSelected={isSelected}
              onMouseDown={() => onCellMouseDown(row, col)}
              onMouseEnter={() => onCellMouseEnter(row, col)}
            />
          );
        })
      )}
    </div>
  );
};

export default GridBuilder;

import React from "react";
import { IGridCell } from "./types";

interface GridCellProps {
  cell: IGridCell;
  isSelected: boolean;
  onMouseDown: () => void;
  onMouseEnter: () => void;
}

const GridCell: React.FC<GridCellProps> = ({
  cell,
  isSelected,
  onMouseDown,
  onMouseEnter,
}) => {
  return (
    <div
      className={`min-h-20 w-full border border-brand-contrast/20 flex items-center justify-center cursor-pointer 
        transition-all duration-200 rounded-lg
        ${isSelected
          ? "bg-brand-primary/20 border-brand-primary/50"
          : "hover:bg-brand-contrast/5 hover:border-brand-contrast/30"
        } 
        ${cell.area
          ? "bg-brand-secondary/20 border-brand-secondary/50"
          : ""
        }`}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      title={`Row ${cell.row}, Col ${cell.col}`}
    >
      {cell.area && (
        <span className="text-xs font-medium text-brand-contrast">
          {cell.area}
        </span>
      )}
    </div>
  );
};

export default GridCell;

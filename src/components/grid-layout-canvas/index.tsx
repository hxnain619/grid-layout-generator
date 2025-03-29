import React, { useState, useEffect } from "react";
import GridConfigPanel from "./GridConfigPanel";
import GridBuilder from "./GridBuilder";
import LayoutItemsPanel from "./LayoutItemsPanel";
import CodeOutputPanel from "./CodeOutputPanel";
import { CodeGenerationModal } from "./CodeGenerationModal";
import { IGridCell, LayoutItem, OutputCode, GridConfig } from "./types";
import { CodeGenerationOptions } from "./types";
import Button from "../common/Button";
import Input from "../common/Input";
import { generateCode } from "../../utils/generators";

const GridLayoutCanvas: React.FC = () => {
  const [config, setConfig] = useState<GridConfig>({
    rows: 3,
    cols: 3,
    gap: 10,
  });
  const [gridAreas, setGridAreas] = useState<IGridCell[]>([]);
  const [selectedCells, setSelectedCells] = useState<string[]>([]);
  const [areaName, setAreaName] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startCell, setStartCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [output, setOutput] = useState<OutputCode>({ html: "", css: "" });
  const [layoutItems, setLayoutItems] = useState<LayoutItem[]>([]);
  const [codeOptions, setCodeOptions] = useState<CodeGenerationOptions>({
    tool: 'css',
    useCSSVariables: false,
    useCSSModules: false,
    useTypeScript: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize grid areas when config changes
  useEffect(() => {
    const areas: IGridCell[] = [];
    for (let i = 0; i < config.rows; i++) {
      for (let j = 0; j < config.cols; j++) {
        areas.push({
          id: `${i + 1}-${j + 1}`,
          row: i + 1,
          col: j + 1,
          area: "",
        });
      }
    }
    setGridAreas(areas);
    setSelectedCells([]);
    setOutput({ html: "", css: "" });
    setLayoutItems([]);
  }, [config]);

  // Grid interaction handlers
  const handleCellMouseDown = (row: number, col: number) => {
    setIsDragging(true);
    setStartCell({ row, col });
    setSelectedCells([`${row}-${col}`]);
  };

  const handleCellMouseEnter = (row: number, col: number) => {
    if (!isDragging || !startCell) return;

    const newSelected: string[] = [];
    const minRow = Math.min(startCell.row, row);
    const maxRow = Math.max(startCell.row, row);
    const minCol = Math.min(startCell.col, col);
    const maxCol = Math.max(startCell.col, col);

    for (let r = minRow; r <= maxRow; r++) {
      for (let c = minCol; c <= maxCol; c++) {
        newSelected.push(`${r}-${c}`);
      }
    }

    setSelectedCells(newSelected);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartCell(null);
  };

  // Area assignment
  const assignAreaName = () => {
    if (!areaName || selectedCells.length === 0) return;

    const updatedAreas = gridAreas.map((cell) => {
      const cellId = `${cell.row}-${cell.col}`;
      if (selectedCells.includes(cellId)) {
        return { ...cell, area: areaName };
      }
      return cell;
    });

    setGridAreas(updatedAreas);
    setSelectedCells([]);
    setAreaName("");

    setLayoutItems([...layoutItems, {
      id: Date.now().toString(),
      name: areaName,
      content: areaName
    }]);
  };

  const handleGenerateOutput = () => {
    setIsModalOpen(true);
  };

  const handleGenerateWithOptions = (options: CodeGenerationOptions) => {
    setCodeOptions(options);
    const generatedCode = generateCode(config, gridAreas, layoutItems, options);
    setOutput(generatedCode);
  };

  const clearGrid = () => {
    setGridAreas(gridAreas.map(cell => ({ ...cell, area: "" })));
    setLayoutItems([]);
    setOutput({ html: "", css: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-brand-contrast mb-3">Grid Layout Canvas</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Grid Builder */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Top Controls */}
          <div >
            <GridConfigPanel config={config} onConfigChange={setConfig} />
          </div>

          {/* Grid Builder */}
          <div className="bg-brand-contrast/5 backdrop-blur-sm border border-brand-contrast/20 rounded-xl p-4">
            <div className="w-full flex flex-col items-start justify-start md:flex-row gap-3 my-3">
              <Input
                id="area-name"
                type="text"
                placeholder="Enter area name"
                value={areaName}
                onChange={(e) => setAreaName(e.target.value)}
                className="w-full md:min-w-[400px]"
                containerClass="flex-1 sm:w-full"
              />
              <Button
                variant="primary"
                onClick={assignAreaName}
                disabled={!areaName || selectedCells.length === 0}
                className="w-full md:w-auto py-3"
              >
                Assign Area
              </Button>
            </div>
            <div>
              <GridBuilder
                rows={config.rows}
                cols={config.cols}
                gap={config.gap}
                gridAreas={gridAreas}
                selectedCells={selectedCells}
                onCellMouseDown={handleCellMouseDown}
                onCellMouseEnter={handleCellMouseEnter}
                onMouseUp={handleMouseUp}
              />
            </div>
            {/* Bottom Controls */}
            <div className="flex flex-col sm:flex-row gap-3 my-3">
              <Button
                variant="primary"
                onClick={handleGenerateOutput}
                className="flex-1"
              >
                Generate Code
              </Button>
              <Button
                variant="secondary"
                onClick={clearGrid}
                className="flex-1"
              >
                Clear Grid
              </Button>
            </div>
          </div>

        </div>

        {/* Right Column - Layout Items */}
        <div className="lg:w-96 flex flex-col gap-6 h-full">
          <LayoutItemsPanel
            items={layoutItems}
            onItemsChange={setLayoutItems}
          />
        </div>
      </div>
      <div className="mt-6">
        {Object.values(output).some(value => value.length > 0) && <CodeOutputPanel output={output} />}
      </div>

      <CodeGenerationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onGenerate={handleGenerateWithOptions}
        currentOptions={codeOptions}
      />
    </div>
  );
};

export default GridLayoutCanvas;

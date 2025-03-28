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

    if (!layoutItems.some((item) => item.name === areaName)) {
      setLayoutItems([
        ...layoutItems,
        {
          id: areaName,
          name: areaName,
          content: areaName,
        },
      ]);
    }
  };

  // Code generation
  const handleGenerateOutput = () => {
    setIsModalOpen(true);
  };

  const handleGenerateWithOptions = (options: CodeGenerationOptions) => {
    setCodeOptions(options);
    const newOutput = generateCode(config, gridAreas, layoutItems, options);
    setOutput(newOutput);
  };

  const clearGrid = () => {
    setGridAreas(gridAreas.map((cell) => ({ ...cell, area: "" })));
    setSelectedCells([]);
    setOutput({ html: "", css: "" });
    setLayoutItems([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-brand-contrast mb-6">
        Grid Layout Generator
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Grid Builder and Config */}
        <div className="lg:col-span-2 space-y-4">

          <div className="bg-brand-contrast/5 backdrop-blur-sm border border-brand-contrast/20 rounded-xl p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-brand-contrast/70 mb-2">
                Area Name
              </label>
              <div className="flex gap-2 items-center">
                <Input
                  id="area-name"
                  type="text"
                  value={areaName}
                  onChange={(e) => setAreaName(e.target.value)}
                  placeholder="e.g. header sidebar main"
                  variant="glass"
                  className="min-w-[260px] py-2!"
                />
                <Button
                  size="sm"
                  className="mb-4 py-3"
                  variant="primary"
                  onClick={assignAreaName}
                  disabled={!areaName || selectedCells.length === 0}
                >
                  Assign
                </Button>
              </div>
              <p className="text-xs text-brand-contrast/50 mt-1">
                Select cells by dragging, then enter an area name and click Assign
              </p>
            </div>

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

            <div className="flex gap-2 mt-4">
              <Button
                size="sm"
                variant="primary"
                onClick={handleGenerateOutput}
                disabled={gridAreas.every((cell) => !cell.area)}
              >
                Generate Code
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={clearGrid}
              >
                Clear Grid
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Layout Items and Code Output */}
        <div className="space-y-4">
          <GridConfigPanel config={config} onConfigChange={setConfig} />
          <LayoutItemsPanel items={layoutItems} onItemsChange={setLayoutItems} />
        </div>
        {output.css || output.html && <CodeOutputPanel output={output} />}
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

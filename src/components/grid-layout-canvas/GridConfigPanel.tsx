import React from "react";
import { GridConfig, GridConfigPanelProps } from "./types";
import Input from "../common/Input";

const GridConfigPanel: React.FC<GridConfigPanelProps> = ({
  config,
  onConfigChange,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof GridConfig
  ) => {
    const value = parseInt(e.target.value) || 0;
    onConfigChange({
      ...config,
      [key]: key === "gap" ? Math.min(50, value) : Math.min(10, value),
    });
  };

  return (
    <div className="bg-brand-contrast/5 backdrop-blur-sm border border-brand-contrast/20 rounded-xl p-3">
      <p className="mb-2 font-semibold">Configuration</p>
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <label className="block text-xs font-medium text-brand-contrast/70 mb-1">
            Rows
          </label>
          <Input
            id="row"
            type="number"
            min="1"
            max="10"
            value={config.rows}
            onChange={(e) => handleChange(e, "rows")}
            variant="glass"
            className="h-10"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-medium text-brand-contrast/70 mb-1">
            Columns
          </label>
          <Input
            id="cols"
            type="number"
            min="1"
            max="10"
            value={config.cols}
            onChange={(e) => handleChange(e, "cols")}
            variant="glass"
            className="h-10"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-medium text-brand-contrast/70 mb-1">
            Gap (px)
          </label>
          <Input
            id="gap"
            type="number"
            min="0"
            max="50"
            value={config.gap}
            onChange={(e) => handleChange(e, "gap")}
            variant="glass"
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default GridConfigPanel;

export type IGridCell = {
  id: string;
  row: number;
  col: number;
  area: string;
};

export type LayoutItem = {
  id: string;
  name: string;
  content: string;
};

export type GridConfig = {
  rows: number;
  cols: number;
  gap: number;
};

export type GridBuilderProps = {
  rows: number;
  cols: number;
  gap: number;
  gridAreas: IGridCell[];
  selectedCells: string[];
  onCellMouseDown: (row: number, col: number) => void;
  onCellMouseEnter: (row: number, col: number) => void;
  onMouseUp: () => void;
};

export type GridConfigPanelProps = {
  config: GridConfig;
  onConfigChange: (config: GridConfig) => void;
};

export type LayoutItemsPanelProps = {
  items: LayoutItem[];
  onItemsChange: (items: LayoutItem[]) => void;
};

export type CodeOutputPanelProps = {
  output: OutputCode;
};

export type CodeGenerationTool =
  | "css"
  | "sass"
  | "tailwind"
  | "material-ui"
  | "shadcn"
  | "chakra-ui"
  | "emotion"
  | "styled-components";

export interface CodeGenerationOptions {
  tool: CodeGenerationTool;
  useCSSVariables?: boolean;
  useCSSModules?: boolean;
  useTypeScript?: boolean;
}

export interface OutputCode {
  html: string;
  css: string;
  jsx?: string;
  tsx?: string;
}

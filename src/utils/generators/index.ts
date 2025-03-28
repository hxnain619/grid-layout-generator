import { generateCSS } from "./css";
import { generateSASS } from "./sass";
import { generateTailwind } from "./tailwind";
import { generateMaterialUI } from "./material-ui";
import { generateShadcn } from "./shadcn";
import { generateChakraUI } from "./chakra-ui";
import { generateEmotion } from "./emotion";
import { generateStyledComponents } from "./styled-components";
import {
  CodeGenerationTool,
  CodeGenerationOptions,
  OutputCode,
} from "../../components/GridLayoutCanvas/types";
import {
  GridConfig,
  IGridCell,
  LayoutItem,
} from "../../components/GridLayoutCanvas/types";

const generators: Record<
  CodeGenerationTool,
  (
    config: GridConfig,
    gridAreas: IGridCell[],
    layoutItems: LayoutItem[],
    options: CodeGenerationOptions
  ) => OutputCode
> = {
  css: generateCSS,
  sass: generateSASS,
  tailwind: generateTailwind,
  "material-ui": generateMaterialUI,
  shadcn: generateShadcn,
  "chakra-ui": generateChakraUI,
  emotion: generateEmotion,
  "styled-components": generateStyledComponents,
};

export const generateCode = (
  config: GridConfig,
  gridAreas: IGridCell[],
  layoutItems: LayoutItem[],
  options: CodeGenerationOptions
): OutputCode => {
  const generator = generators[options.tool];
  return generator(config, gridAreas, layoutItems, options);
};

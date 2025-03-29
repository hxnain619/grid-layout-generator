import {
  GridConfig,
  IGridCell,
  LayoutItem,
} from "../../components/grid-layout-canvas/types";
import {
  CodeGenerationOptions,
  OutputCode,
} from "../../components/grid-layout-canvas/types";

const generateGridTemplateAreas = (
  config: GridConfig,
  gridAreas: IGridCell[]
): string => {
  const template: string[] = [];
  for (let r = 1; r <= config.rows; r++) {
    const rowAreas: string[] = [];
    for (let c = 1; c <= config.cols; c++) {
      const cell = gridAreas.find((cell) => cell.row === r && cell.col === c);
      rowAreas.push(cell?.area || ".");
    }
    template.push(`"${rowAreas.join(" ")}"`);
  }
  return template.join("\n");
};

export const generateChakraUI = (
  config: GridConfig,
  gridAreas: IGridCell[],
  layoutItems: LayoutItem[],
  options: CodeGenerationOptions
): OutputCode => {
  const gridTemplateAreas = generateGridTemplateAreas(config, gridAreas);
  const areas = [
    ...new Set(gridAreas.map((cell) => cell.area).filter(Boolean)),
  ];
  const useTypeScript = options.useTypeScript;

  const tsx = `
import { Box, Grid } from '@chakra-ui/react';
${useTypeScript ? "import { ReactNode } from 'react';" : ""}

const gridTemplateAreas = \`
${gridTemplateAreas}
\`;

${areas
  .map((area) => {
    const componentName = area
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
    return `${useTypeScript ? "interface " + componentName + "Props {\n  children?: ReactNode;\n}" : ""}

const ${componentName} = ({ ${useTypeScript ? "children" : ""} }: ${useTypeScript ? componentName + "Props" : "any"}) => (
  <Box gridArea="${area}">
    ${useTypeScript ? "{children}" : ""}
  </Box>
);`;
  })
  .join("\n\n")}

export const GridLayout = () => {
  return (
    <Grid
      templateRows={\`repeat(${config.rows}, 1fr)\`}
      templateColumns={\`repeat(${config.cols}, 1fr)\`}
      templateAreas={gridTemplateAreas}
      gap="${config.gap}px"
    >
${layoutItems
  .map((item) => {
    const componentName = item.name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
    return `      <${componentName}>${item.content}</${componentName}>`;
  })
  .join("\n")}
    </Grid>
  );
};
  `.trim();

  return { tsx, html: "", css: "" };
};

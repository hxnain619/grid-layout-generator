import {
  GridConfig,
  IGridCell,
  LayoutItem,
} from "../../components/GridLayoutCanvas/types";
import {
  CodeGenerationOptions,
  OutputCode,
} from "../../components/GridLayoutCanvas/types/codeGeneration";

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

export const generateSASS = (
  config: GridConfig,
  gridAreas: IGridCell[],
  layoutItems: LayoutItem[],
  options: CodeGenerationOptions
): OutputCode => {
  const gridTemplateAreas = generateGridTemplateAreas(config, gridAreas);
  const areas = [
    ...new Set(gridAreas.map((cell) => cell.area).filter(Boolean)),
  ];
  const useCSSVariables = options.useCSSVariables;

  const sassVariables = useCSSVariables
    ? `
$grid-rows: ${config.rows};
$grid-cols: ${config.cols};
$grid-gap: ${config.gap}px;
`
    : "";

  const html = `
<div class="grid-container">
${layoutItems.map((item) => `  <div class="${item.name.replace(/\s+/g, "-")}">${item.content}</div>`).join("\n")}
</div>
  `.trim();

  const css = `
${sassVariables}

.grid-container {
  display: grid;
  grid-template-rows: repeat(${useCSSVariables ? "$grid-rows" : config.rows}, 1fr);
  grid-template-columns: repeat(${useCSSVariables ? "$grid-cols" : config.cols}, 1fr);
  grid-template-areas:
${gridTemplateAreas};
  gap: ${useCSSVariables ? "$grid-gap" : config.gap}px;

  ${areas
    .map((area) => {
      const className = area.replace(/\s+/g, "-");
      return `& .${className} {
    grid-area: ${area};
    /* Add your styles here */
  }`;
    })
    .join("\n\n  ")}
}
  `.trim();

  return { html, css };
};

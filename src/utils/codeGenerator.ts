import {
  IGridCell,
  LayoutItem,
  OutputCode,
  GridConfig,
} from "../components/grid-layout-canvas/types";

export const generateGridTemplateAreas = (
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

export const generateOutput = (
  config: GridConfig,
  gridAreas: IGridCell[],
  layoutItems: LayoutItem[]
): OutputCode => {
  const gridTemplateAreas = generateGridTemplateAreas(config, gridAreas);
  const areas = [
    ...new Set(gridAreas.map((cell) => cell.area).filter(Boolean)),
  ];

  const html = `
<div class="grid-container">
${layoutItems.map((item) => `  <div class="${item.name.replace(/\s+/g, "-")}">${item.content}</div>`).join("\n")}
</div>
  `.trim();

  const css = `
.grid-container {
  display: grid;
  grid-template-rows: repeat(${config.rows}, 1fr);
  grid-template-columns: repeat(${config.cols}, 1fr);
  grid-template-areas:
${gridTemplateAreas};
  gap: ${config.gap}px;
}

${areas
  .map((area) => {
    const className = area.replace(/\s+/g, "-");
    return `.${className} {
  grid-area: ${area};
  /* Add your styles here */
}`;
  })
  .join("\n\n")}
  `.trim();

  return { html, css };
};

import {
  GridConfig,
  IGridCell,
  LayoutItem,
} from "../../components/GridLayoutCanvas/types";
import { OutputCode } from "../../components/GridLayoutCanvas/types/codeGeneration";

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

export const generateTailwind = (
  config: GridConfig,
  gridAreas: IGridCell[],
  layoutItems: LayoutItem[]
): OutputCode => {
  const gridTemplateAreas = generateGridTemplateAreas(config, gridAreas);
  const areas = [
    ...new Set(gridAreas.map((cell) => cell.area).filter(Boolean)),
  ];

  const html = `
<div class="grid grid-cols-${config.cols} grid-rows-${config.rows} gap-${config.gap} grid-areas-[${gridTemplateAreas.replace(/\n/g, " ").replace(/"/g, "")}]">
${layoutItems.map((item) => `  <div class="grid-area-${item.name.replace(/\s+/g, "-")}">${item.content}</div>`).join("\n")}
</div>
  `.trim();

  const css = `
@layer utilities {
  .grid-areas-[${gridTemplateAreas.replace(/\n/g, " ").replace(/"/g, "")}] {
    grid-template-areas: ${gridTemplateAreas};
  }

  ${areas
    .map((area) => {
      const className = area.replace(/\s+/g, "-");
      return `.grid-area-${className} {
    grid-area: ${area};
  }`;
    })
    .join("\n\n  ")}
}
  `.trim();

  return { html, css };
};

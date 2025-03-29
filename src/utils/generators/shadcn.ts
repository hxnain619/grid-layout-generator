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

export const generateShadcn = (
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
import { cn } from "@/lib/utils";
${useTypeScript ? "import { ReactNode } from 'react';" : ""}

const gridStyles = {
  display: 'grid',
  gridTemplateRows: \`repeat(${config.rows}, 1fr)\`,
  gridTemplateColumns: \`repeat(${config.cols}, 1fr)\`,
  gridTemplateAreas: \`
${gridTemplateAreas}
  \`,
  gap: '${config.gap}px',
};

${areas
  .map((area) => {
    const componentName = area
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
    return `${useTypeScript ? "interface " + componentName + "Props {\n  children?: ReactNode;\n  className?: string;\n}" : ""}

const ${componentName} = ({ ${useTypeScript ? "children, className" : "className"} }: ${useTypeScript ? componentName + "Props" : "any"}) => (
  <div className={cn("grid-area-${area}", className)}>
    ${useTypeScript ? "{children}" : ""}
  </div>
);`;
  })
  .join("\n\n")}

export const GridLayout = ({ className }: ${useTypeScript ? "{ className?: string }" : "any"}) => {
  return (
    <div className={cn("grid", className)} style={gridStyles}>
${layoutItems
  .map((item) => {
    const componentName = item.name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
    return `      <${componentName}>${item.content}</${componentName}>`;
  })
  .join("\n")}
    </div>
  );
};
  `.trim();

  const css = `
@layer utilities {
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

  return { tsx, css, html: "" };
};

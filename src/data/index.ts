import { CodeGenerationTool } from "../components/GridLayoutCanvas/types";

export const tools: {
  value: CodeGenerationTool;
  label: string;
  description: string;
}[] = [
  { value: "css", label: "CSS", description: "Pure CSS with modern features" },
  {
    value: "sass",
    label: "SASS",
    description: "Enhanced CSS with variables and nesting",
  },
  {
    value: "tailwind",
    label: "Tailwind CSS",
    description: "Utility-first CSS framework",
  },
  {
    value: "material-ui",
    label: "Material UI",
    description: "React components following Material Design",
  },
  {
    value: "shadcn",
    label: "shadcn/ui",
    description: "Beautifully designed components",
  },
  {
    value: "chakra-ui",
    label: "Chakra UI",
    description: "Modern component library",
  },
  {
    value: "emotion",
    label: "Emotion",
    description: "CSS-in-JS with styled components",
  },
  {
    value: "styled-components",
    label: "Styled Components",
    description: "Visual primitives for the component age",
  },
];

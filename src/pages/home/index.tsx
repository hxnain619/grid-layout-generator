import React from "react";
import SEO from "../../components/common/SEO";
import GridLayoutCanvas from "../../components/grid-layout-canvas";
import StructuredData from "../../components/common/StructuredData";

const Home: React.FC = () => {
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create CSS Grid Layouts",
    "description": "Learn how to create beautiful CSS grid layouts using our intuitive drag-and-drop interface",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Drag and Drop Elements",
        "text": "Use our intuitive drag-and-drop interface to place elements in your grid",
        "image": "https://grid-layout-generator.vercel.app/preview.png"
      },
      {
        "@type": "HowToStep",
        "name": "Customize Grid Properties",
        "text": "Adjust grid properties like columns, rows, and gaps to create your desired layout",
        "image": "https://grid-layout-generator.vercel.app/preview.png"
      },
      {
        "@type": "HowToStep",
        "name": "Generate Code",
        "text": "Get clean, responsive CSS code for your grid layout",
        "image": "https://grid-layout-generator.vercel.app/preview.png"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Grid Layout Generator"
      }
    ],
    "totalTime": "PT5M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Web Browser"
      }
    ],
    "yield": {
      "@type": "QuantitativeValue",
      "value": "1",
      "unitText": "CSS Grid Layout"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is CSS Grid Layout?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CSS Grid Layout is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces."
        }
      },
      {
        "@type": "Question",
        "name": "How do I use the Grid Layout Generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply drag and drop elements into the grid, customize the properties, and generate the CSS code. Our intuitive interface makes it easy to create responsive layouts."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Grid Layout Generator free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the Grid Layout Generator is completely free to use. You can create unlimited grid layouts without any cost."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Grid Layout - Create Beautiful CSS Grids"
        description="Generate responsive CSS grid layouts with ease. Create beautiful, modern grid layouts using our intuitive drag-and-drop interface."
      />
      <section aria-labelledby="hero-title" className="relative">
        <h1 id="hero-title" className="sr-only">Grid Layout Generator</h1>
        <GridLayoutCanvas />
      </section>
      <StructuredData data={howToData} />
      <StructuredData data={faqData} />
    </>
  );
};

export default Home;

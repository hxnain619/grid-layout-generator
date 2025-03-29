import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import StructuredData from "../components/common/StructuredData";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Grid Layout Generator",
    url: "https://grid-layout-generator.vercel.app",
    description:
      "Create beautiful CSS grid layouts with ease using our intuitive drag-and-drop interface",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Drag and drop interface",
      "Responsive grid layouts",
      "CSS code generation",
      "Grid template areas",
      "Custom grid properties",
    ],
    screenshot: "https://grid-layout-generator.vercel.app/preview.png",
    softwareVersion: "1.0.0",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    applicationSubCategory: "CSS Grid Tool",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "100",
    },
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow" role="main">
          <article>
            <Outlet />
          </article>
        </main>
        <Footer />
      </div>
      <StructuredData data={webAppData} />
    </>
  );
};

export default Layout;

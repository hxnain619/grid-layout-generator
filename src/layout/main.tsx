import React, { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import StructuredData from "../components/common/StructuredData";

// Lazy load components
const Header = lazy(() => import("../components/common/Header"));
const Footer = lazy(() => import("../components/common/Footer"));

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
        <Suspense fallback={<div>Loading header...</div>}>
          <Header />
        </Suspense>
        <main className="flex-grow" role="main">
          <article>
            <Outlet />
          </article>
        </main>
        <Suspense fallback={<div>Loading footer...</div>}>
          <Footer />
        </Suspense>
      </div>
      <StructuredData data={webAppData} />
    </>
  );
};

export default Layout;

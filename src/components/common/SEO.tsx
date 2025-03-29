import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Grid Layout - Create Beautiful CSS Grids",
  description = "Generate responsive CSS grid layouts with ease. Create beautiful, modern grid layouts using our intuitive drag-and-drop interface. Perfect for web developers and designers.",
  keywords = "css grid, grid layout generator, css grid generator, responsive grid, web design, frontend development, css layout, grid system, css framework, web layout, drag and drop grid, grid builder, css grid builder, grid template, grid areas, grid layout tool, css grid tool, web development, responsive design, modern web layout, grid css generator, grid layout maker, grid layout creator, css grid layout generator, grid layout builder, grid layout designer, grid layout tool, grid layout system, grid layout framework, grid layout template, grid layout areas, grid layout builder tool, grid layout generator tool, grid layout maker tool, grid layout creator tool, grid layout designer tool, grid layout system tool, grid layout framework tool, grid layout template tool, grid layout areas tool",
  ogImage = "/og-image.jpg",
  ogUrl = "https://grid-layout-generator.vercel.app",
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Grid Layout" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Grid Layout" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1d3554" />
      <meta name="msapplication-TileColor" content="#1d3554" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="Grid Layout Generator" />
      <link rel="canonical" href={ogUrl} />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SEO;

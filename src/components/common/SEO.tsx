import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

const SEO = ({
  title = 'Grid Layout Generator - Create Responsive CSS Grid Layouts',
  description = 'Create responsive CSS grid layouts with our free online grid layout generator. Features include drag-and-drop interface, responsive breakpoints, gap controls, and instant code generation. Perfect for web developers and designers.',
  keywords = [
    'css grid',
    'grid layout',
    'css grid generator',
    'responsive grid',
    'grid system',
    'css layout',
    'web design',
    'frontend development',
    'css framework',
    'grid template',
    'css grid layout',
    'grid builder',
    'css grid builder',
    'grid generator',
    'css grid template',
    'responsive design',
    'web layout',
    'css grid system',
    'grid css',
    'css grid properties'
  ],
  ogImage = 'https://grid-layout-generator.vercel.app/og-image.png',
  ogType = 'website',
  canonicalUrl = 'https://grid-layout-generator.vercel.app',
  noIndex = false
}: SEOProps) => {
  const fullTitle = `${title} | Grid Layout Generator`;
  const fullDescription = `${description} Generate custom grid layouts with our intuitive drag-and-drop interface. Export clean, semantic HTML and CSS code instantly.`;
  const fullKeywords = [...new Set([...keywords])].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content="Grid Layout Generator" />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="Grid Layout Generator" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Grid Layout Generator" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-touch-fullscreen" content="yes" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SEO;

import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  robots?: string;
}

const SEOHead = ({ 
  title = "IPMTTI - International Plant Machinery & Technical Training Institute | Kenya",
  description = "Premier technical training institute in Thika, Kenya. Learn driving, heavy plant operation, mechanics, welding, plumbing, and ICT. NITA accredited courses with hands-on training.",
  keywords = "technical training Kenya, vocational college Thika, driving school Kenya, heavy plant operator training, mechanics course Kenya, welding training, plumbing course, ICT training, IPMTTI, NITA certified courses",
  ogImage = "/og-image.png",
  canonical,
  robots
}: SEOHeadProps) => {
  const siteName = "IPMTTI";
  const fullTitle = title.includes("IPMTTI") ? title : `${title} | ${siteName}`;
  const siteUrl = (import.meta as any)?.env?.VITE_SITE_URL || window.location.origin || "https://ipmtti.co.ke";
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : (typeof window !== 'undefined' ? window.location.href : siteUrl);

  return (
    <Helmet>
      {/* Resource Hints for Performance */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="International Plant Machinery & Technical Training Institute" />
      <meta name="robots" content={robots || "index, follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_KE" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="KE-400" />
      <meta name="geo.placename" content="Thika" />
      <meta name="geo.position" content="-1.0332;37.0694" />
      <meta name="ICBM" content="-1.0332, 37.0694" />
    </Helmet>
  );
};

export default SEOHead;

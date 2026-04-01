import React from 'react';

interface SchemaMarkupProps {
  type: 'Product' | 'Offer' | 'Article' | 'WebSite';
  data: any;
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
  const baseUrl = "https://amazondeals4u.com";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <React.Fragment>
      <title>{title} | DealHunter UK</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </React.Fragment>
  );
};

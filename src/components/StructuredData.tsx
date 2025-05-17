import React from 'react';

interface StructuredDataProps {
  name?: string;
  jobTitle?: string;
  url?: string;
  imageUrl?: string;
  sameAs?: string[];
}

const StructuredData: React.FC<StructuredDataProps> = ({
  name = "Maret Rudin-Aulenbach",
  jobTitle = "Software Engineer",
  url = "https://maretrudinaulenbach.com",
  imageUrl = "https://maretrudinaulenbach.com/images/profile.png",
  sameAs = [
    "https://github.com/MaretRudAul",
    "https://linkedin.com/in/maret-ra",
  ]
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    url,
    image: imageUrl,
    sameAs
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
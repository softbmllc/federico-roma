// src/components/SEO.tsx

import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Federico Roma | Campeón mundial de Muay Thai y Kickboxing",
  description = "Conocé la historia, trayectoria y entrenamientos de Federico Roma, campeón mundial argentino de Muay Thai y Kickboxing. Clases, videos y más.",
  image = "https://tusitio.com/images/federico-og.jpg", // Reemplazá con la URL real de una imagen destacada
  url = "https://federicoroma.com", // Reemplazá con tu dominio real
}) => {
  return (
    <Helmet>
      {/* HTML Head Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
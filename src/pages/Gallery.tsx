// src/pages/Gallery.tsx

import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import GallerySection from "../components/GallerySection";

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("gallery.title")} | Federico Roma</title>
      </Helmet>
      <GallerySection />
    </>
  );
};

export default Gallery;

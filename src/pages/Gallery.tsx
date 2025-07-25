// src/pages/Gallery.tsx

import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import GalleryBlock from "../components/GalleryBlock";

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("gallery.title")} | Federico Roma</title>
      </Helmet>
      <section className="mt-[80px] px-6 md:px-12 lg:px-20 py-12 space-y-20 bg-black">
        <GalleryBlock title={t("gallery.peleando")} folder="peleando" />
        <GalleryBlock title={t("gallery.entrenando")} folder="entrenando" />
        <GalleryBlock title={t("gallery.dandoClases")} folder="dando-clases" />
        <GalleryBlock title={t("gallery.destacados")} folder="trofeos" />
      </section>
    </>
  );
};

export default Gallery;

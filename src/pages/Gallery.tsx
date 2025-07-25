// src/pages/Gallery.tsx

import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useState, useMemo } from "react";
import GalleryBlock from "../components/GalleryBlock";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const sections = [
  { folder: "peleando", count: 6, key: "gallery.peleando" },
  { folder: "entrenando", count: 3, key: "gallery.entrenando" },
  { folder: "dando-clases", count: 3, key: "gallery.dandoClases" },
  { folder: "trofeos", count: 6, key: "gallery.destacados" },
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState<number>(-1);

  // Generar slides una sola vez con todas las imágenes en orden
  const slides = useMemo(() => {
    return sections.flatMap((section) =>
      Array.from({ length: section.count }, (_, i) => ({
        src: `/images/gallery/${section.folder}/img${i + 1}.jpg`,
      }))
    );
  }, []);

  // Manejar click usando el índice global
  const handleImageClick = (globalIndex: number) => {
    setIndex(globalIndex);
  };

  let offset = 0;

  return (
    <>
      <Helmet>
        <title>{t("gallery.title")} | Federico Roma</title>
      </Helmet>
      <section className="mt-[80px] px-6 md:px-12 lg:px-20 py-12 space-y-20 bg-black">
        {sections.map((section) => {
          const count = section.count;
          const currentOffset = offset;
          offset += count;

          return (
            <GalleryBlock
              key={section.folder}
              title={t(section.key)}
              folder={section.folder}
              onImageClick={(localIndex) =>
                handleImageClick(currentOffset + localIndex)
              }
            />
          );
        })}
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={slides}
          index={index}
          on={{ view: ({ index }) => setIndex(index) }}
        />
      </section>
    </>
  );
};

export default Gallery;

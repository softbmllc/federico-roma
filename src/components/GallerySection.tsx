// src/components/GallerySection.tsx

import { useTranslation } from "react-i18next";

export default function GallerySection() {
  const { t } = useTranslation();

  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
  ];

  return (
    <section className="bg-white text-black py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 uppercase text-center tracking-wide">
          {t("gallery.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded shadow-md">
              <img
                src={src}
                alt={`${t("gallery.imageAlt")} ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/GalleryBlock.tsx

import React, { useEffect, useState } from "react";

interface GalleryBlockProps {
  title: string;
  folder: string;
  onImageClick: (startIndex: number, slides: { src: string }[]) => void;
}

const GalleryBlock: React.FC<GalleryBlockProps> = ({ title, folder, onImageClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const images =
    folder === "trofeos" || folder === "peleando"
      ? ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"]
      : ["img1.jpg", "img2.jpg", "img3.jpg"];

  const slides = images.map((img) => ({
    src: `/images/gallery/${folder}/${img}`,
  }));

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      {isMobile ? (
        <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory flex-nowrap">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.src}
              alt={`${title} ${i + 1}`}
              className="w-full max-w-[90vw] h-auto object-cover rounded shadow-md snap-center shrink-0 cursor-pointer"
              onClick={() => onImageClick(i, slides)}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.src}
              alt={`${title} ${i + 1}`}
              className="w-full h-auto object-cover rounded shadow-md cursor-pointer"
              onClick={() => onImageClick(i, slides)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default GalleryBlock;
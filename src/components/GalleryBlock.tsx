// src/components/GalleryBlock.tsx

import React from "react";

interface GalleryBlockProps {
  title: string;
  folder: string;
}

const GalleryBlock: React.FC<GalleryBlockProps> = ({ title, folder }) => {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={`/images/gallery/${folder}/${img}`}
            alt={`${title} ${index + 1}`}
            className="w-full h-auto object-cover rounded shadow-md"
          />
        ))}
      </div>
    </section>
  );
};

export default GalleryBlock;
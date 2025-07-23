// src/components/TestimonialCard.tsx

import React from "react";
import { useTranslation } from "react-i18next";
import { FiInstagram } from "react-icons/fi";
import type { Testimonial } from "../data/testimonialsData";

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  const { name, title, text, photos, instagram } = testimonial;
  const { t } = useTranslation();
  return (
    <div className="bg-neutral-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-neutral-200 dark:border-neutral-700 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#f97316]">{name}</h3>
          <p className="text-sm text-[#cbd5e1]">{t(title || "")}</p>
        </div>
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600"
            title="Ver perfil en Instagram"
          >
            <FiInstagram size={20} />
          </a>
        )}
      </div>
      <p className="text-white">{t(text || "")}</p>
      {photos.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mt-2 mb-2">
          {photos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Foto de ${name} ${idx + 1}`}
              className="w-full aspect-[4/3] object-cover object-top rounded hover:scale-[1.02] transition-transform duration-300 ease-in-out hover:brightness-110 hover:contrast-125"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
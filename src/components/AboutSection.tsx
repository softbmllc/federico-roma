// src/components/AboutSection.tsx

import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white text-black py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <img
            src="/federico-about.jpg" // Reemplazar con imagen real en /public
            alt="Federico Roma"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-wide">
            {t("about.title")}
          </h2>
          <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
            {t("about.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
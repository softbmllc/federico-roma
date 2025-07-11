// src/components/AboutSection.tsx

import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-start gap-12">
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <img
            src="/federico-humano.jpg" // Reemplazar con imagen real en /public
            alt="Federico Roma"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-wide">
            {t("about.title")}
          </h2>
          <p className="text-xl leading-relaxed md:leading-loose text-gray-800 whitespace-pre-line">
            {t("about.description")}
          </p>
          <a
            href="/sobre-mi"
            className="inline-block mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            {t("about.button")}
          </a>
        </div>
      </div>
    </section>
  );
}
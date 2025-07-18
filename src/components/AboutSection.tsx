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
            alt={t("about.imageAlt")}
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
            href="/about"
            className="inline-block mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            {t("about.button")}
          </a>
        </div>
      </div>

      <div className="mt-10 w-full max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-6">
          <h3 className="text-4xl font-extrabold uppercase tracking-wide mb-2">
            {t("about.videoTitle")}
          </h3>
          <p className="text-gray-700 text-lg">
            {t("about.videoSubtitle")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/V8Q420T1bcY"
                title="Federico Roma - Cicatrices"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/BAdq2RwcNiY"
                title="Federico Roma - Full Contact TV"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// src/pages/Classes.tsx

import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { FiArrowRight, FiUsers, FiUser, FiBookOpen } from "react-icons/fi";

const Classes: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("classes.metaTitle")} | Federico Roma</title>
        <meta name="description" content={t("classes.metaDescription")} />
      </Helmet>

      <section className="relative w-full bg-black text-white pt-28 pb-12 before:absolute before:inset-0 before:bg-[url('/images/pattern-light.svg')] before:bg-center before:bg-repeat before:opacity-5 before:z-0">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-4">
            {t("classes.heading")}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto">
            {t("classes.subheading")}
          </p>
        </div>
      </section>

      <section className="relative w-full bg-black text-white pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <div className="group bg-[#111] p-6 md:p-8 rounded-lg shadow-lg border border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-orange-500/50">
              <div className="flex items-center mb-4 text-orange-500">
                <FiUser className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t("classes.custom.title")}</h2>
              <p className="text-gray-300 text-base md:text-lg">{t("classes.custom.description")}</p>
              <p className="text-sm text-gray-400 mt-4">{t("classes.custom.ctaText")}</p>
            </div>

            <div className="group bg-[#111] p-6 md:p-8 rounded-lg shadow-lg border border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-orange-500/50">
              <div className="flex items-center mb-4 text-orange-500">
                <FiUsers className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t("classes.group.title")}</h2>
              <p className="text-gray-300 text-base md:text-lg">{t("classes.group.description")}</p>
              <p className="text-sm text-gray-400 mt-4">{t("classes.group.ctaText")}</p>
            </div>

            <div className="group bg-[#111] p-6 md:p-8 rounded-lg shadow-lg border border-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-orange-500/50">
              <div className="flex items-center mb-4 text-orange-500">
                <FiBookOpen className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t("classes.seminars.title")}</h2>
              <p className="text-gray-300 text-base md:text-lg">{t("classes.seminars.description")}</p>
              <p className="text-sm text-gray-400 mt-4">{t("classes.seminars.ctaText")}</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg md:text-xl text-gray-400 mb-4">{t("classes.ctaText")}</p>
            <a
              href="https://wa.me/16454442941"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-all duration-200 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            >
              {t("classes.cta")} <FiArrowRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Classes;

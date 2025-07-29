// src/pages/Sponsors.tsx

import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function Sponsors() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("nav.sponsors")} | Federico Roma</title>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <section className="bg-gray-50 pt-[120px] sm:pt-24 pb-24 px-4 flex-grow">
          <div className="max-w-6xl mx-auto text-center text-left">
            <h2 className="text-4xl font-bold text-black">{t("sponsors.title")}</h2>
            <p className="text-gray-600 mt-2">{t("sponsors.subtitle")}</p>

            {/* Sponsor institucional - Dojo Serpiente */}
            <div className="mt-12 grid grid-cols-[150px_1fr] gap-6 items-start justify-center">
              {/* Logo */}
              <div className="w-[150px] max-h-[150px]">
                <img
                  src="/images/dojo-serpiente-logo.png"
                  alt="Dojo Serpiente logo"
                  className="w-[150px] max-h-[150px] drop-shadow-sm object-contain"
                />
              </div>
              {/* Info */}
              <div className="flex flex-col items-start text-left">
                <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide text-black">
                  DOJO SERPIENTE
                </h3>
                <p className="mt-2 md:mt-3 text-gray-700 text-sm md:text-base">
                  {t("sponsors.dojoSerpiente.line1")} <br />
                  {t("sponsors.dojoSerpiente.line2")} <br />
                  {t("sponsors.dojoSerpiente.line3")}
                </p>
                <div className="mt-4 flex flex-col sm:flex-row w-full sm:w-auto items-center gap-3">
                  <a
                    href="https://www.instagram.com/dojoserpienteok?igsh=aDE4bmRic2cwNWlp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition w-full sm:w-auto text-sm font-medium"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://dojoserpiente.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto text-sm font-medium"
                  >
                    {t("sponsors.buttonWebsite")}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-[150px_1fr] gap-6 items-start justify-center">
              {/* Logo */}
              <div className="w-[150px] max-h-[150px]">
                <img
                  src="/images/huracan-logo-main.png"
                  alt="Huracan Premium logo"
                  className="w-[150px] max-h-[150px] drop-shadow-sm object-contain"
                />
              </div>
              {/* Info */}
              <div className="flex flex-col items-start text-left">
                <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide text-black">
                  HURACAN Premium ®
                </h3>
                <p className="mt-2 md:mt-3 text-gray-700 text-sm md:text-base">
                  {t("sponsors.line1")} <br />
                  {t("sponsors.line2")}
                </p>
                <div className="mt-4 flex flex-col sm:flex-row w-full sm:w-auto items-center gap-3">
                  <a
                    href="https://www.instagram.com/huracanpremium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition w-full sm:w-auto text-sm font-medium"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://wa.me/message/KKWAFBSLX5LKN1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full sm:w-auto text-sm font-medium"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-[150px_1fr] gap-6 items-start justify-center">
              {/* Logo */}
              <div className="w-[150px] max-h-[150px]">
                <img
                  src="/images/boating-adventures-logo.png"
                  alt="Boating Adventures Miami logo"
                  className="w-[150px] max-h-[150px] drop-shadow-sm object-contain"
                />
              </div>
              {/* Info */}
              <div className="flex flex-col items-start text-left">
                <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide text-black">
                  BOATING ADVENTURES MIAMI
                </h3>
                <p className="mt-2 md:mt-3 text-gray-700 text-sm md:text-base">
                  {t("sponsors.boating.line1")} <br />
                  {t("sponsors.boating.line2")}
                </p>
                <div className="mt-4 flex flex-col sm:flex-row w-full sm:w-auto items-center gap-3">
                  <a
                    href="https://www.instagram.com/boating.adventuresmiami/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition w-full sm:w-auto text-sm font-medium"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://boatingadventuresmiami.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto text-sm font-medium"
                  >
                    {t("sponsors.buttonWebsite")}
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-12 text-gray-500 italic text-sm">
              {t("sponsors.footerNote")}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
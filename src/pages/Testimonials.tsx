// src/pages/Testimonials.tsx

import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { testimonials, type Testimonial } from "../data/testimonialsData";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "es" | "en";
  const currentTestimonials: Testimonial[] = testimonials[lang];

  return (
    <main className="bg-black text-white">
      <Helmet>
        <title>{t("testimonialsPage.metaTitle")}</title>
        <meta
          name="description"
          content={t("testimonialsPage.metaDescription")}
        />
      </Helmet>

      <section className="pt-24 pb-32 px-4 md:px-12 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight">
            {t("testimonialsPage.title")}
          </h2>
          <div className="text-lg text-gray-100 text-center mb-12 max-w-3xl mx-auto">
            <p>{t("testimonialsPage.subtitle.line1")}</p>
            <p>{t("testimonialsPage.subtitle.line2")}</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {currentTestimonials.map((testi, idx) => (
              <TestimonialCard key={idx} testimonial={testi} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black text-white px-4 pb-32">
        <div className="max-w-2xl mx-auto text-center mt-10">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
            <>
              {t("testimonialsPage.ctaHeadingLine1")}<br />
              {t("testimonialsPage.ctaHeadingLine2")}
            </>
          </h3>
          <a
            href="https://wa.me/16454442941"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#f59e0b] text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
          >
            {t("testimonialsPage.ctaButton")}
          </a>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;

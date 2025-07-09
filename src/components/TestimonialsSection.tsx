// src/components/TestimonialsSection.tsx

import { useTranslation } from "react-i18next";

export default function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t("testimonials.list.0.quote"),
      author: t("testimonials.list.0.author"),
    },
    {
      quote: t("testimonials.list.1.quote"),
      author: t("testimonials.list.1.author"),
    },
    {
      quote: t("testimonials.list.2.quote"),
      author: t("testimonials.list.2.author"),
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center" id="testimonials">
      <h2 className="text-3xl font-bold mb-8">{t("testimonials.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded shadow">
            <p className="italic text-gray-600 mb-4">“{item.quote}”</p>
            <p className="font-semibold">{item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
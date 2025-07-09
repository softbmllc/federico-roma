// src/pages/Testimonials.tsx

import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import TestimonialsSection from "../components/TestimonialsSection";

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <main>
      <Helmet>
        <title>{`${t("nav.testimonials")} | Federico Roma`}</title>
      </Helmet>
      <TestimonialsSection />
    </main>
  );
};

export default Testimonials;

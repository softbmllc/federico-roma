// src/pages/About.tsx

import AboutSection from "../components/AboutSection";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("nav.about")} | Federico Roma</title>
        <meta name="description" content={t("about.description")} />
      </Helmet>
      <AboutSection />
    </>
  );
}

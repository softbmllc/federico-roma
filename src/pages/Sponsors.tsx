// src/pages/Sponsors.tsx

import SponsorsSection from "../components/SponsorsSection";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function Sponsors() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("nav.sponsors")} | Federico Roma</title>
      </Helmet>
      <SponsorsSection />
    </>
  );
}

// src/pages/Classes.tsx

import ClassesSection from "../components/ClassesSection";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Classes: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("classes.title")} | Federico Roma</title>
        <meta name="description" content={t("classes.subtitle")} />
      </Helmet>
      <ClassesSection />
    </>
  );
};

export default Classes;

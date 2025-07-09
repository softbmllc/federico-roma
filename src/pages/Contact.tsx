// src/pages/Contact.tsx

import ContactSection from "../components/ContactSection";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("nav.contact")} | Federico Roma</title>
        <meta name="description" content={t("contact.description")} />
      </Helmet>
      <main>
        <ContactSection />
      </main>
    </>
  );
};

export default Contact;

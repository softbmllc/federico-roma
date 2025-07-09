// src/components/ContactSection.tsx

import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-white mb-4">
          {t("contact.title")}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-10">
          {t("contact.description")}
        </p>
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2 text-left">
          <input
            type="text"
            placeholder={t("contact.name")}
            className="p-3 border rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
          />
          <input
            type="email"
            placeholder={t("contact.email")}
            className="p-3 border rounded-md dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
          />
          <textarea
            placeholder={t("contact.message")}
            rows={4}
            className="p-3 border rounded-md md:col-span-2 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
          />
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-md md:col-span-2 hover:bg-neutral-800 transition-all"
          >
            {t("contact.send")}
          </button>
        </form>
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://www.instagram.com/federicoroma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
          >
            {t("contact.social.instagram")}
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
          >
            {t("contact.social.whatsapp")}
          </a>
          <a
            href="mailto:federico@example.com"
            className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
          >
            {t("contact.social.email")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
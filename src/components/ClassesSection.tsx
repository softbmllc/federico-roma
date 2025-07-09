// src/components/ClassesSection.tsx

import { useTranslation } from "react-i18next";
import { FaDumbbell, FaLaptop, FaGlobe } from "react-icons/fa";

export default function ClassesSection() {
  const { t } = useTranslation();

  const classOptions = [
    {
      icon: <FaDumbbell size={40} />,
      title: t("classes.options.inPerson"),
    },
    {
      icon: <FaLaptop size={40} />,
      title: t("classes.options.online"),
    },
    {
      icon: <FaGlobe size={40} />,
      title: t("classes.options.seminars"),
    },
  ];

  return (
    <section className="bg-gray-100 text-black py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-wide">
          {t("classes.title")}
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          {t("classes.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classOptions.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-orange-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-orange-600 transition">
            {t("classes.cta")}
          </button>
        </div>
      </div>
    </section>
  );
}

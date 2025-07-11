// src/components/ClassesSection.tsx

import { useTranslation } from "react-i18next";
import { FaDumbbell, FaGlobe, FaUsers } from "react-icons/fa";

export default function ClassesSection() {
  const { t } = useTranslation();

  const classOptions = [
    {
      icon: <FaDumbbell size={40} />,
      title: t("classes.options.personalized"),
    },
    {
      icon: <FaUsers size={40} />,
      title: t("classes.options.group"),
    },
    {
      icon: <FaGlobe size={40} />,
      title: t("classes.options.seminars"),
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-4 md:px-10 w-full">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-wide">
          {t("classes.title")}
        </h2>
        <p className="text-lg text-gray-300 italic mb-12 max-w-full px-4 md:px-0 md:whitespace-nowrap md:overflow-x-auto">
          {t("classes.subtitleV2")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classOptions.map((item, index) => {
            const imageNames = ["personalizadas", "grupales", "seminarios"];
            const imageUrl = `/images/${imageNames[index]}.jpg`;
            const imagePosition = index === 1 ? "top center" : "center";

            return (
              <div
                key={index}
                className="relative h-[300px] md:h-60 rounded-xl overflow-hidden shadow-md group"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: imagePosition,
                }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-300"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
                  <div className="mb-2 text-gray-200">{item.icon}</div>
                  <h3 className="text-xl font-semibold uppercase tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <a
            href="https://wa.me/16454442941"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-orange-700 transition"
          >
            {t("classes.ctaV2")}
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Consultá disponibilidad por WhatsApp o reservá desde la agenda online.
          </p>
        </div>
      </div>
    </section>
  );
}

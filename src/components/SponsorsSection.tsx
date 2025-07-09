// src/components/SponsorsSection.tsx

import { useTranslation } from "react-i18next";

const SponsorsSection = () => {
  const { t } = useTranslation();

  const sponsors = [
    {
      name: "Top Gym",
      logo: "/images/sponsors/topgym.png",
      url: "https://topgym.com",
    },
    {
      name: "Fight Wear",
      logo: "/images/sponsors/fightwear.png",
      url: "https://fightwear.com",
    },
    {
      name: "MuayPro",
      logo: "/images/sponsors/muaypro.png",
      url: "https://muaypro.com",
    },
  ];

  return (
    <section id="sponsors" className="py-16 bg-gray-100 dark:bg-neutral-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">
          {t("sponsors.title")}
        </h2>
        <p className="mb-10 text-neutral-700 dark:text-neutral-300">
          {t("sponsors.description")}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                title={sponsor.name}
                className="h-16 md:h-20 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;

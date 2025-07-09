// src/components/HeroSection.tsx

import { useTranslation } from "react-i18next";
import Button from "./ui/Button";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative md:h-screen min-h-screen overflow-hidden flex items-start justify-start bg-black text-white">
      {/* Imagen desktop */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-right-top hidden md:block"
        style={{ backgroundImage: "url('https://ik.imagekit.io/devrodri/5.jpg?tr=w-1920,h-1080,c-at_max')" }}
      />

      {/* Imagen mobile */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center md:hidden"
        style={{ backgroundImage: "url('https://ik.imagekit.io/devrodri/Disen%CC%83o%20sin%20ti%CC%81tulo-5.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-start text-left px-[5%] pt-[4rem] md:pt-20 space-y-10 w-full">
        <h1 className="font-display font-extrabold leading-[0.8] tracking-tight w-full">
          <div className="leading-none md:pt-0 pt-[1rem] sm:pt-[2rem]">
            <div className="text-white text-[4rem] md:text-[8rem] lg:text-[10rem] drop-shadow-lg uppercase">FEDERICO</div>
            <div className="text-[#f59e0b] text-[4rem] md:text-[8rem] lg:text-[10rem] drop-shadow-lg uppercase mt-[-0.5rem] md:mt-[-1rem]">ROMA</div>
          </div>
        </h1>
        {/* Subtítulo */}
        <div className="relative top-[14rem] md:top-0 w-full">
          <p className="text-white text-[1.125rem] md:text-[2rem] lg:text-[1.75rem] font-semibold uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:drop-shadow-xl leading-snug tracking-tight max-w-[900px] whitespace-pre-line px-1.5 sm:px-6">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Botones */}
        <div className="relative top-[16rem] md:top-0 flex flex-col md:flex-row gap-4 md:gap-4 mt-8 md:mt-0">
          <Button variant="primary" labelKey="hero.ctaBiography" />
          <Button variant="secondary" labelKey="hero.ctaBookClass" />
        </div>
      </div>
    </section>
  );
}
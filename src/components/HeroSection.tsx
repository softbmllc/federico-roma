// src/components/HeroSection.tsx

import { useTranslation } from "react-i18next";
import Button from "./ui/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative flex items-start justify-start bg-black text-white pt-[64px] sm:pt-[calc(64px+8vh)] md:pt-[8rem] overflow-hidden w-full" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
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
      <div className="relative z-10 w-full px-[5%]">
        {/* Título */}
        <div className="pt-[8vh] sm:pt-[10vh] md:pt-[8vh] lg:pt-[10vh] text-left">
          <h1 className="font-display font-extrabold leading-[0.8] tracking-tight w-full">
            <span className="sr-only">{t("hero.srTitle")}</span>
            <div className="text-white text-[4rem] md:text-[8rem] lg:text-[10rem] drop-shadow-lg uppercase">FEDERICO</div>
            <div className="text-white text-[4rem] md:text-[8rem] lg:text-[10rem] drop-shadow-lg uppercase mt-[0.5rem] md:mt-[1rem]">ROMA</div>
            <div className="text-[#f59e0b] text-[1.25rem] md:text-[2.3rem] lg:text-[3.1rem] drop-shadow-lg uppercase mt-[0.25rem] tracking-tight" style={{ letterSpacing: '-0.035em' }}>
              THE LITTLE BIG MAN
            </div>
          </h1>
        </div>

        {/* Subtítulo */}
        <div className="mt-[12vh] sm:mt-[6vh] moblg:mt-[24vh] md:mt-[6vh] text-left pl-[0.5rem] sm:pl-[1rem] max-w-full">
          <p className="text-white text-[1.125rem] md:text-[1.5rem] lg:text-[1.75rem] moblg:text-[1.625rem] font-semibold uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:drop-shadow-xl leading-snug tracking-tight whitespace-pre-line px-1.5 sm:px-6">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Botones */}
        <div className="mt-[6vh] sm:mt-[6vh] moblg:mt-[18vh] flex flex-col md:flex-row gap-4 text-left md:justify-start mb-10 max-w-[900px] px-1.5 sm:px-6">
          <Button variant="primary" labelKey="hero.ctaBiography" onClick={() => navigate("/about")} />
          <a
            href="https://wa.me/16454442941"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="secondary" labelKey="hero.ctaBookClass" className="block w-full md:w-auto" />
          </a>
        </div>
      </div>
      <img
        src="https://ik.imagekit.io/devrodri/5.jpg?tr=w-1920,h-1080,c-at_max"
        alt="Federico Roma de espaldas con cinturón de campeón"
        className="sr-only"
      />
    </section>
  );
}
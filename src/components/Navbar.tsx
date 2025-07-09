// src/components/Navbar.tsx

import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenuOpen]);

  const changeLanguage = (lang: "es" | "en") => {
    i18n.changeLanguage(lang);
  };

  const routes = [
    { to: "/", key: "home" },
    { to: "/about", key: "about" },
    { to: "/classes", key: "classes" },
    { to: "/gallery", key: "gallery" },
    { to: "/testimonials", key: "testimonials" },
    { to: "/sponsors", key: "sponsors" },
    { to: "/contact", key: "contact" },
  ];

  return (
    <header className="relative w-full bg-black/70 backdrop-blur-sm text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between" aria-label="Main Navigation">
        {/* Logo / Nombre */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-extrabold tracking-widest text-white uppercase"
        >
          FEDERICO <span className="text-orange-400">ROMA</span>
        </Link>

        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {routes.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `uppercase tracking-wide text-sm font-semibold transition duration-300 ${
                  isActive
                    ? "text-orange-400 border-b-2 border-orange-400 pb-1"
                    : "text-white hover:text-orange-400"
                }`
              }
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </div>

        {/* Idiomas */}
        <div className="flex items-center gap-2 text-sm font-semibold border border-white px-2 py-1 rounded">
          <button
            onClick={() => changeLanguage("es")}
            className={i18n.language === "es" ? "text-orange-400" : "hover:text-orange-400"}
          >
            ES
          </button>
          <span>/</span>
          <button
            onClick={() => changeLanguage("en")}
            className={i18n.language === "en" ? "text-orange-400" : "hover:text-orange-400"}
          >
            EN
          </button>
        </div>

        {/* Botón hamburguesa */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-3xl focus:outline-none"
            aria-label="Alternar menú"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Menú Mobile */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm text-white flex flex-col pb-10">
          <div className="flex items-center justify-between px-4 py-4">
            <Link
              to="/"
              className="text-xl font-extrabold tracking-widest text-white uppercase"
            >
              FEDERICO <span className="text-orange-400">ROMA</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold border border-white px-2 py-1 rounded">
                <button
                  onClick={() => changeLanguage('es')}
                  className={i18n.language === 'es' ? 'text-orange-400' : 'hover:text-orange-400'}
                >
                  ES
                </button>
                <span>/</span>
                <button
                  onClick={() => changeLanguage('en')}
                  className={i18n.language === 'en' ? 'text-orange-400' : 'hover:text-orange-400'}
                >
                  EN
                </button>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-3xl"
                aria-label="Cerrar menú"
              >
                <HiX />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start px-8 space-y-6 mt-4">
            {routes.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="uppercase tracking-wide text-lg font-semibold text-white hover:text-orange-400 transition"
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
// src/pages/About.tsx

import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { GiBoxingGlove, GiLaurels, GiSouthAmerica } from "react-icons/gi";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { FaMedal, FaCrown, FaGlobeAmericas } from "react-icons/fa";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="page-about">
      <main className="px-4 py-24 md:px-12 max-w-5xl mx-auto text-white">

        <Helmet>
          <title>{t("aboutPage.metaTitle")}</title>
          <meta
            name="description"
            content={t("aboutPage.metaDescription")}
          />
        </Helmet>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center text-white drop-shadow-xl mb-2 leading-tight">
          {t("aboutPage.mainTitleLine1")}
        </h1>
        <h2 className="text-2xl md:text-3xl font-light italic tracking-tight text-center text-white drop-shadow-lg mb-12">
          {t("aboutPage.mainTitleLine2")}
        </h2>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#f59e0b] mb-4">{t("aboutPage.earlySteps.title")}</h2>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.earlySteps.p1")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.earlySteps.p2")}</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
            <img
              src="/images/about/tenis-infancia.jpeg"
              alt="Federico Roma jugando al tenis en su infancia"
              className="w-full max-w-sm rounded-xl shadow-md"
            />
            <img
              src="/images/about/recuperacion-infancia.jpeg"
              alt="Federico Roma entrenando tras fractura en su niñez"
              className="w-full max-w-sm rounded-xl shadow-md"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#f59e0b] mb-4">{t("aboutPage.infancyDiscipline.title")}</h2>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.infancyDiscipline.p1")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.infancyDiscipline.p2")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.infancyDiscipline.p3")}</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#f59e0b] mb-4">{t("aboutPage.christianBosch.title")}</h2>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.christianBosch.p1")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.christianBosch.p2")}</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#f59e0b] mb-4">{t("aboutPage.firstFight.title")}</h2>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.firstFight.p1")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.firstFight.p2")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.firstFight.p3")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.firstFight.p4")}</p>
          {/* VIDEO: highlight pelea amateur */}
          {/*
          <iframe className="mt-6 w-full max-w-2xl mx-auto aspect-video rounded-xl shadow-lg" src="URL_VIDEO_AMATEUR" allowFullScreen />
          */}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#f59e0b] mb-4">{t("aboutPage.lossAndStrength.title")}</h2>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.lossAndStrength.p1")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.lossAndStrength.p2")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.lossAndStrength.p3")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.lossAndStrength.p4")}</p>
          
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#f59e0b] mb-4">{t("aboutPage.dojoToWorld.title")}</h2>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.dojoToWorld.p1")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.dojoToWorld.p2")}</p>
          <video
            controls
            className="mt-4 mb-6 w-full max-w-md mx-auto rounded-xl shadow-lg"
          >
            <source src="/videos/about/victoria-ko-4to-round.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.dojoToWorld.p3")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.dojoToWorld.p4")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.dojoToWorld.p5")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.dojoToWorld.p6")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.dojoToWorld.p7")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.dojoToWorld.p8")}</p>
          <video
            controls
            className="mt-4 mb-6 w-full max-w-md mx-auto rounded-xl shadow-lg"
          >
            <source src="/videos/about/ko-a-tomaz.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.dojoToWorld.p9")}</p>
          {/*
          <iframe className="mt-6 w-full max-w-2xl mx-auto aspect-video rounded-xl shadow-lg" src="URL_VIDEO_CINTURON" allowFullScreen />
          */}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#f59e0b] mb-4">{t("aboutPage.shareMission.title")}</h2>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.shareMission.p1")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.shareMission.p2")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.shareMission.p3")}</p>
          <div className="mt-6 text-center">
            <a href="https://wa.me/16454442941" target="_blank" rel="noopener noreferrer" className="bg-[#f59e0b] text-black px-6 py-3 rounded-lg font-bold shadow-md hover:scale-105 transition">
              {t("aboutPage.ctaBookClass")}
            </a>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[#f59e0b] mb-4">{t("aboutPage.careerPath.title")}</h2>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.careerPath.p1")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.careerPath.p2")}</p>
          <p className="text-lg leading-relaxed mb-4">{t("aboutPage.careerPath.p3")}</p>

          <h2 className="text-2xl font-bold text-[#f59e0b] mt-10 mb-4">{t("aboutPage.fightRecord.title")}</h2>
          <ul className="text-lg leading-loose mb-6">
            <li className="flex items-center gap-2"><GiBoxingGlove /> {t("aboutPage.fightRecord.line1")}</li>
            <li className="flex items-center gap-2"><HiCheckCircle className="text-green-500" /> {t("aboutPage.fightRecord.line2")}</li>
            <li className="flex items-center gap-2"><HiXCircle className="text-red-500" /> {t("aboutPage.fightRecord.line3")}</li>
            <li className="flex items-center gap-2"><FaMedal className="text-yellow-500" /> {t("aboutPage.fightRecord.line4")}</li>
            <li className="flex items-center gap-2"><GiLaurels className="text-yellow-500" /> {t("aboutPage.fightRecord.line5")}</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-4 mt-10">{t("aboutPage.fightRecord.titlesHeading")}</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="w-full text-white border-collapse text-base md:text-lg">
              <thead>
                <tr className="bg-[#f59e0b] text-black">
                  <th className="p-4 text-left font-bold">🏆 {t("aboutPage.fightRecord.table.title")}</th>
                  <th className="p-4 text-left font-bold">{t("aboutPage.fightRecord.table.org")}</th>
                  <th className="p-4 text-left font-bold">{t("aboutPage.fightRecord.table.weight")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-800 transition">
                  <td className="p-4 whitespace-nowrap flex items-center gap-2"><FaCrown className="text-yellow-400" /> {t("aboutPage.fightRecord.titles.wtMuay")}</td>
                  <td className="p-4 whitespace-nowrap">WKN</td>
                  <td className="p-4 whitespace-nowrap">58 kg</td>
                </tr>
                <tr className="hover:bg-gray-800 transition">
                  <td className="p-4 whitespace-nowrap flex items-center gap-2"><FaCrown className="text-yellow-400" /> {t("aboutPage.fightRecord.titles.wtK1")}</td>
                  <td className="p-4 whitespace-nowrap">WKN</td>
                  <td className="p-4 whitespace-nowrap">58 kg</td>
                </tr>
                <tr className="hover:bg-gray-800 transition">
                  <td className="p-4 whitespace-nowrap flex items-center gap-2"><FaGlobeAmericas className="text-blue-400" /> {t("aboutPage.fightRecord.titles.icMuay1")}</td>
                  <td className="p-4 whitespace-nowrap">WKN</td>
                  <td className="p-4 whitespace-nowrap">57 kg</td>
                </tr>
                <tr className="hover:bg-gray-800 transition">
                  <td className="p-4 whitespace-nowrap flex items-center gap-2"><FaGlobeAmericas className="text-blue-400" /> {t("aboutPage.fightRecord.titles.icMuay2")}</td>
                  <td className="p-4 whitespace-nowrap">WKC</td>
                  <td className="p-4 whitespace-nowrap">58 kg</td>
                </tr>
                <tr className="hover:bg-gray-800 transition">
                  <td className="p-4 whitespace-nowrap flex items-center gap-2"><GiSouthAmerica className="text-green-400" /> {t("aboutPage.fightRecord.titles.saMuay")}</td>
                  <td className="p-4 whitespace-nowrap">WKN</td>
                  <td className="p-4 whitespace-nowrap">59 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}

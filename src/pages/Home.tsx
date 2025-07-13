// src/pages/Home.tsx

import SEO from "../components/SEO";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ClassesSection from "../components/ClassesSection";
import GallerySection from "../components/FedericoSlider";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("home.seoTitle")}
        description={t("home.seoDescription")}
        image="https://federicoroma.com/images/federico-og.jpg"
        url="https://federicoroma.com"
      />
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <GallerySection />
    </>
  );
};

export default Home;

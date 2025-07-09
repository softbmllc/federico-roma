// src/pages/Home.tsx

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ClassesSection from "../components/ClassesSection";
import GallerySection from "../components/GallerySection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <GallerySection />
    </>
  );
};

export default Home;

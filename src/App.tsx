// src/App.tsx

import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ClassesSection from "./components/ClassesSection";
import GallerySection from "./components/FedericoSlider";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-black text-white">
      <Navbar />
      <HeroSection />
      <main className="w-full min-h-[60vh]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutSection />
                <ClassesSection />
                <GallerySection />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

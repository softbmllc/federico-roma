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
import GallerySection from "./components/GallerySection";
import './App.css';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <main className="max-w-screen-xl mx-auto px-4">
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
    </div>
  );
}

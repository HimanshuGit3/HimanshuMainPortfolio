import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Preloader from './components/Preloader';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import BlogsSection from './components/BlogsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="App">
      <Preloader />
      <ParticleBackground />
      <CustomCursor />
      <Navbar />
      
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
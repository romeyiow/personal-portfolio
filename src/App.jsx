import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import BioSection from "./components/BioSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');

            // Remove 'active' class from all nav links
            navLinks.forEach((link) => {
              link.classList.remove('active');
            });

            // Add 'active' class to the matching nav link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
              activeLink.classList.add('active');
            }
          }
        });
      },
      {
        threshold: 0.6, // 60% of the section needs to be visible to be considered "active"
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (

    <body>
      <div className="designs-container">
        <div className="nav-hero-des left">
          <img src="public/assets/images/design/three-clustered-dots.png" alt="" />
        </div>
        <div className="nav-hero-des right">
          <img src="public/assets/images/design/Group 9079.png" alt="" />
        </div>
      </div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <BioSection />
      <SkillsSection />
      <ProjectsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </body>

  );
}

export default App;

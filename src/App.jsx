import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import StatsSection from "./components/StatsSection"
import BioSection from "./components/BioSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ReviewsSection from "./components/ReviewsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="pseudo-body">
      <div className="designs-container">
        <div className="nav-hero-des left">
          <img src="public\assets\images\design\three-clustered-dots.png" alt="" />
        </div>
        <div className="nav-hero-des right">
          <img src="public\assets\images\design\Group 9079.png" alt="" />

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


    </div>

  )
}

export default App

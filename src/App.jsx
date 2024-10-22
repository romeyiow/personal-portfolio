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
      <Navbar/>
      <HeroSection/>
      <StatsSection />
      <BioSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ReviewsSection/>
      <ContactSection/>
      <Footer/>

      
    </div>

  )
}

export default App

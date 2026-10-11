import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SystemStatus from './components/SystemStatus'
import ExperienceSection from './components/experience/ExperienceSection'
import Projects from './components/Projects'
import SkillsSection from './components/skills/SkillsSection'
import CertificationsSection from './components/certifications/CertificationsSection'
import EducationSection from './components/education/EducationSection'
import About from './components/About'
import Contact from './components/Contact'
import Terminal from './components/Terminal'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SystemStatus />
      <ExperienceSection />
      <Projects />
      <SkillsSection />
      <CertificationsSection />
      <EducationSection />
      <About />
      <Contact />
      <Footer />
      <Terminal />
    </main>
  )
}

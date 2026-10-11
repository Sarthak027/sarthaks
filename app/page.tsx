import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SystemStatus from './components/SystemStatus'
import ExperiencePreview from './components/experience/ExperiencePreview'
// import Projects from './components/Projects'
import SkillsSection from './components/skills/SkillsSection'
import CertificationsSection from './components/certifications/CertificationsSection'
import EducationSection from './components/education/EducationSection'
import Contact from './components/Contact'
import Terminal from './components/Terminal'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SystemStatus />
      <ExperiencePreview />
      {/* <Projects /> */}
      <SkillsSection />
      <CertificationsSection />
      <EducationSection />
      <Contact />
      <Footer />
      <Terminal />
    </main>
  )
}

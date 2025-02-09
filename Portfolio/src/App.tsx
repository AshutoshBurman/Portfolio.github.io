import './App.css'
import AboutPage from './screens/AboutPage'
import CertificatesPage from './screens/CertificatesPage'
import FooterPage from './screens/FooterPage'
import LandingPage from './screens/landingPage'
import ProjectPage from './screens/ProjectPage'
import SkillsPage from './screens/SkillsPage'
import ReactLenis from "lenis/react";


function App() {

  return (
    <ReactLenis root>
      <div>
        <LandingPage/>
        <AboutPage/>
        <SkillsPage/>
        <ProjectPage/>
        <CertificatesPage />
        <FooterPage/>
      </div>
    </ReactLenis>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './comp/Header'
import HeroSection from './comp/Hero'
import SkillsSection from './comp/Skill'
import ProjectSection from './comp/Project'
import ExperienceSection from './comp/Exp'
import Education from './comp/Edu'
import AboutMe from './comp/About'
import ContactMe from './comp/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <HeroSection/>
     <SkillsSection/>
     <ProjectSection/>
     <ExperienceSection/>
     <AboutMe/>
     <ContactMe/>
     <Education/>
    </>
  )
}

export default App

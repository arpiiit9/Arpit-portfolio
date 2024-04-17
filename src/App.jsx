import React, { useState, useEffect } from 'react';
import Header from './comp/Header';
import HeroSection from './comp/Hero';
import SkillsSection from './comp/Skill';
import ProjectSection from './comp/Project';
import ExperienceSection from './comp/Exp';
import Education from './comp/Edu';
import AboutMe from './comp/About';
import ContactMe from './comp/Contact';
import LoadingScreen from './comp/Load';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Hide the loading screen after 3 seconds
    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showLoading && <LoadingScreen />}
      {!showLoading && (
        <>
          <Header />
          <HeroSection />
          <SkillsSection />
          <ProjectSection />
          <ExperienceSection />
          <AboutMe />
          <ContactMe />
          <Education />
        </>
      )}
    </>
  );
}

export default App;

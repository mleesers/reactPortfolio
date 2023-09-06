import React from 'react'
import NavBar from './components/navBar'
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ProjectData } from './data/ProjectData';
function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero/>
      <AboutMe />
      <Projects slides = {ProjectData} />
      <Footer />
    </>
  );
}

export default App;
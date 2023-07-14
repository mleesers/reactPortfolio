import React from 'react'
import NavBar from './components/navBar'
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects/>
      <Footer />
    </>
  );
}

export default App;
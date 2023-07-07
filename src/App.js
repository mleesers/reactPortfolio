import React from 'react'
import NavBar from './components/navBar'
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects/>
    </>
  );
}

export default App;
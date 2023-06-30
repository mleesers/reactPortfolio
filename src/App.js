import React from 'react'
import NavBar from './components/navBar'
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <AboutMe />
    </>
  );
}

export default App;
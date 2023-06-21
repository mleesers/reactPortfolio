import React from 'react'
import NavBar from './components/navBar'
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';


function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
    </>
  );
}

export default App;
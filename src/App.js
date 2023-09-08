import React, { useState } from "react";
import NavBar from "./components/navBar";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import { ProjectData } from "./data/ProjectData";
import Projects from "./components/Projects";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <AboutMe />
      <Projects slides={ProjectData} />
      <Footer />
    </>
  );
}

export default App;

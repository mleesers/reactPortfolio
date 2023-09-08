import React, {useState} from 'react'
import NavBar from './components/navBar'
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import oldPortfolioImage from '../src/images/oldPortfolio.png';
import weatherDashboardImage from '../src/images/Weather.jpg';
import longRidesImage from '../src/images/LongRides.jpg';
import thisDayInSpaceImage from '../src/images/Space.jpg';
import hangmanImage from '../src/images/HangmanWebsite.png';

const ProjectData = [
  {
    title: 'My Old Portfolio',
    label: 'JavaScript, HTML, CSS',
    image: oldPortfolioImage,
    link: 'https://github.com/mleesers/Portfolio'
  }
  ,
  {
    title: 'Weather Dashboard',
    label: 'JavaScript, HTML, CSS, APIs',
    image: weatherDashboardImage,
    link: 'https://github.com/mleesers/Weather-Forecast'
  }
  ,
  {
    title: 'Long Rides',
    label: 'APIs, SQL, Node, Express, Heroku',
    image: longRidesImage,
    link: 'https://github.com/mleesers/Long_Rides_project_two'
  }
  ,
  {
    title: 'This Day in Space',
    label: 'JavaScript, HTML, CSS, APIs',
    image: thisDayInSpaceImage,
    link: 'https://github.com/mleesers/This-Day-In-Space'
  }
  ,
  {
    title: 'Hangman',
    label: 'HTML, CSS, JavaScript',
    image: hangmanImage,
    link: 'https://github.com/mleesers/HangmanWebsite'
  },
];


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <NavBar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>      
      <Hero/>
      <AboutMe />
      <Projects slides = {ProjectData} />
      <Footer />
    </>
  );
}

export default App;
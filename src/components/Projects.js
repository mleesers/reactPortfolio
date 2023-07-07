import React, { useState } from "react";
import styled from 'styled-components/macro';
import oldPortfolioImage from '../images/oldPortfolio.png';
import weatherDashboardImage from '../images/Weather.jpg';
import longRidesImage from '../images/LongRides.jpg';
import thisDayInSpaceImage from '../images/Space.jpg';
import hangmanImage from '../images/Hangman.jpg';

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  margin-bottom: 20px;
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: fit-content;
  overflow-x: scroll; /* Enable horizontal scrolling */
  scroll-snap-type: x mandatory; /* Enable snap-scrolling behavior */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align the content to the bottom of the card */
  position: relative;
  width: 600px;
  height: 400px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 10px;
  scroll-snap-align: center; /* Snap the card to the center of the viewport */
  overflow: hidden; /* Hide any overflow */
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0; /* Position the overlay at the bottom of the card */
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
`;

const ProjectData = {
  'OldPortfolio': {
    title: 'Old Portfolio',
    label: 'JavaScript, HTML, CSS',
    image: oldPortfolioImage,
  },
  'WeatherDashboard': {
    title: 'Weather Dashboard',
    label: 'JavaScript, HTML, CSS, APIs',
    image: weatherDashboardImage
  },
  'LongRides': {
    title: 'Long Rides',
    label: 'JavaScript, HTML, CSS, APIs',
    image: longRidesImage
  },
  'ThisDayInSpace': {
    title: 'This Day in Space',
    label: 'JavaScript, HTML, CSS, APIs',
    image: thisDayInSpaceImage
  },
  'Hangman': {
    title: 'Hangman',
    label: 'Python',
    image: hangmanImage
  }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState('OldPortfolio');

  const handleCardClick = (key) => {
    setSelectedProject(key);
  };

  return (
    <MainArea>
      <Header>Projects</Header>
      <Carousel>
        {Object.keys(ProjectData).map((key) => (
          <Card
            key={key}
            onClick={() => handleCardClick(key)}
            style={{
              opacity: selectedProject === key ? 1 : 0.6, // Adjust opacity based on the selected project
            }}
          >
            <CardImage src={ProjectData[key].image} alt={ProjectData[key].title} />
            <CardOverlay>
              <h3>{ProjectData[key].title}</h3>
              <p>{ProjectData[key].label}</p>
            </CardOverlay>
          </Card>
        ))}
      </Carousel>
    </MainArea>
  );
};

export default Projects;

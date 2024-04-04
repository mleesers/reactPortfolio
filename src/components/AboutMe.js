import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components/macro'
import me from '../images/me.jpg'
import {BiUpArrowAlt} from 'react-icons/bi'

const AboutMeSection = styled.section`
    display: flex;
    margin-top: 5%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
        margin-top: none;
    }
`
const MainArea = styled.div`
    display: flex;
    margin-top: 8%;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-bottom: 10%;
    color: #12091E;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease, transform 1s ease, visibility 0s 1s;
    visibility: hidden;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    
    }

  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
      transition-delay: 0s;
    `}
    `

const Photo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #12091E;
`

const SectionTitle = styled.h1`
    font-size: 2rem;
    color: #12091E;
    transform: translateX(-500%);
    transition: transform 1s ease;

    ${(props) =>
    props.isVisible &&
    css`
        transform: translateX(0);
    `}
`

const TextArea = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    flex: 1;
    color: #12091E;
    margin-right: 10%;
    @media screen and (max-width: 768px) {
        margin-right: 5%;
        margin-left: 5%;
        margin-top: 5%;
    
    }
`


const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        const handleScroll = () => {
        const element = document.getElementById('myImage');
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
      
        if (position < windowHeight && position > -element.offsetHeight) {
          setIsVisible(true);
        } else {
          // setIsVisible(false) please;
          console.log('not visible')
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <AboutMeSection id='about'>
        <SectionTitle isVisible={isVisible}>About Me</SectionTitle>
        <MainArea isVisible={isVisible}>
          <Photo>
            <img src={me} id="myImage" alt="me" />
            <h1>That's me {<BiUpArrowAlt />} :)</h1>
          </Photo>
          <TextArea id="text">
            <h1>Hello World! I'm currently employed as an App Developer for the City of Lubbock. I earned my Bachelor of Science in Computer Science from Texas Tech University and furthered my skills with a certificate from a full-stack coding boot camp at the University of Texas at Austin.</h1>
            <h1>I'm happily married to my wife, Crystal, and we're blessed with a one-year-old daughter. Our little family resides in Lubbock, TX, along with our adorable fur babies. Currently, I'm completing my Bachelor of Science degree while thriving on problem-solving challenges and eagerly exploring new technologies.</h1>
            <h1>For a comprehensive view of my capabilities and projects, feel free to browse through my resume and GitHub. I'm excited about the opportunity to collaborate!</h1>
          </TextArea>
        </MainArea>
      </AboutMeSection>
    );
  };


export default AboutMe

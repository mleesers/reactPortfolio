import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import me from '../images/me.jpg';
import { BiUpArrowAlt } from 'react-icons/bi';

const AboutMeSection = styled.section`
  display: flex;
  margin-top: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: none;
  }
`;

const MainArea = styled.div`
  display: flex;
  margin-top: 8%;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 10%;
  color: #12091e;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 1s ease, visibility 0s 1s;
  visibility: hidden;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
    transition-delay: 0s;
  }
`;

const Photo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: #12091e;
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  color: #12091e;
  transform: translateX(-500%);
  transition: transform 1s ease;

  &.visible {
    transform: translateX(0);
  }
`;

const TextArea = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex: 1;
  color: #12091e;
  margin-right: 10%;
  @media screen and (max-width: 768px) {
    margin-right: 5%;
    margin-left: 5%;
    margin-top: 5%;
  }
`;

const AboutMe = () => {
  const aboutMeRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          aboutMeRef.current.classList.add('visible');
          titleRef.current.classList.add('visible');
          observer.unobserve(aboutMeRef.current);
          observer.unobserve(titleRef.current);
        }
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <AboutMeSection id="about">
      <SectionTitle ref={titleRef}>About Me</SectionTitle>
      <MainArea ref={aboutMeRef}>
        <Photo>
          <img src={me} id="myImage" alt="me" />
          <h1>That's me {<BiUpArrowAlt />} :)</h1>
        </Photo>
        <TextArea id="text">
          <h1>
            Hello World! I am a computer science student at Texas Tech with an expected graduation date of December 2023. I have a certificate from a full-stack coding bootcamp at the University of Texas at Austin. I am married to my wife, Crystal, and we have a one year old daughter together. We live together with our beautiful fur babies in Lubbock, TX where I am currently completing my bachelor's of science. I am proficient in JavaScript and Python but am familiar with other languages and I learn quick! Make sure to check out my resume and Github for all my skills and projects!
          </h1>
        </TextArea>
      </MainArea>
    </AboutMeSection>
  );
};

export default AboutMe;

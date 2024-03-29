import React, {useState, useRef, useEffect} from "react";
import { Button } from "./Button";
import styled, { css } from 'styled-components/macro';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';


const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

const HeroWrapper = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

const HeroSlide = styled.div`
  z-index: ${props => props.active ? '10' : '1'};
  width: 100%;
  height: 100%;
`
const HeroSlider = styled.div`
  position:absolute;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items:center;
  justify-content: space-between;
  &::before{
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)
`

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height:100vh;
  object-fit: cover;
`
const HeroContent = styled.div`
  background-color: rgba(1,1,1,0.75);
  position: absolute;
  padding: 1rem;
  bottom:0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1600px;
  width: fit-content;
  color: #fff;'
  h1{
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400; 
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p{
    margin-bottom: 2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
  }
  @media screen and (max-width: 768px) {'
    z-index: 100;
  }
`
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`
const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`
const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  &:hover{
    background: #CD853F;
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    z-index: 1;
    width: 40px;
    height: 40px;
    padding: 5px;
    margin-right: 0.5rem;
    position: absolute;
  }
`
const Title = styled.h1`
  font-size: 2rem;
  color: #12091E;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateX(-500%);
  transition: opacity 1s ease, transform 1s ease;

  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`
const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}`

  
const Projects = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 7500);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const PrevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projectTitle');
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight && position > -element.offsetHeight) {
        setTitleVisible(true);
      } else {
        setTitleVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeroSection id='projects'>
      <Title isVisible={titleVisible} id="projectTitle">
        Some of my Projects
      </Title>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.label}</p>
                    <Button to={slide.link} target="_blank" primary="true">
                      View Project
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={PrevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Projects;
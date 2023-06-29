import React from 'react'
import styled, {css} from 'styled-components/macro'
import { Link } from 'react-router-dom'
import background from '../images/background.mp4'

const HeroSection = styled.section`
    height:100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`    
const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    `

 
const Hero = () => {
  return (
    <HeroSection>
        <video autoPlay loop muted id='video'>
            <source src={background} type='video/mp4' />
        </video>
        <div className="container">
            <h1>Welcome</h1>
            <h2>to my website!</h2>
        </div>
    </HeroSection>
  );
};

export default Hero
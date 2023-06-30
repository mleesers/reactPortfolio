import React from 'react'
import styled, {css} from 'styled-components/macro'
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

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  `

const Area = styled.div`
  font-size: 30px;
  position: absolute;
  margin-top: 75px;
  margin-left: 25px;
  width: 50%;
  height: 50%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: 10px;
  }

`



const Hero = () => {
  return (
    <HeroSection>
        <Video autoPlay loop muted id='video'>
            <source src={background} type='video/mp4' />
        </Video>
        <Area className="container">
            <h1>Welcome</h1>
            <h2>to my website!</h2>
        </Area>
    </HeroSection>
  );
};

export default Hero
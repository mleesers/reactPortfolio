import React, { useEffect } from 'react';
import styled, {css} from 'styled-components/macro'


const HeroSection = styled.section`
    height:100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`    
const VimeoVideoWrapper = styled.div`
    padding: 56.25% 0 0 0; // This ensures a 16:9 aspect ratio
    position: relative;
`;

const VimeoIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
`;
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
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

    return (
    <HeroSection>
        <VimeoVideoWrapper>
        <VimeoIframe 
              src="https://player.vimeo.com/video/859574925?autoplay=1&loop=1&controls=0&byline=0&title=0&portrait=0&background=1"
              allow="autoplay; fullscreen; picture-in-picture"
              title="background"
          ></VimeoIframe>
        </VimeoVideoWrapper>
        <Area className="container">
            <h1>Welcome</h1>
            <h2>to my website!</h2>
        </Area>
    </HeroSection>
  );
};

export default Hero;
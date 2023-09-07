import React, { useEffect } from 'react';
import styled from 'styled-components/macro';

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const VimeoVideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none; // This makes sure user interactions pass through to elements below
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 30%; // Keep this centered
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  overflow: hidden;
`;

const VimeoIframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;  // Adjust this value to move the video within the viewport
  transform: translate(-50%, -50%);
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
  z-index: 1; // Ensure this content is always on top
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: 10px;
  }
`;

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
  const adjustVideoSize = (e) => {
    const iframe = e.target;
    const ratio = 16 / 9;
    const width = iframe.offsetWidth;
    const height = width / ratio;
    iframe.style.height = `${height}px`;
    iframe.style.width = `${width}px`;
  };
  return (
    <HeroSection>
      <VimeoVideoWrapper>
        <VideoContainer>
          <VimeoIframe 
            onLoad={adjustVideoSize}
            src="https://player.vimeo.com/video/859574925?autoplay=1&loop=1&controls=0&byline=0&title=0&portrait=0&background=1"
            allow="autoplay; fullscreen; picture-in-picture"
            title="background"
          ></VimeoIframe>
        </VideoContainer>
      </VimeoVideoWrapper>
      <Area className="container">
        <h1>Welcome</h1>
        <h2>to my website!</h2>
      </Area>
    </HeroSection>
  );
};

export default Hero;

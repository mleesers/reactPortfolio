import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const VimeoVideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; // This makes sure user interactions pass through to elements below
`;

const VimeoIframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%; 
  height: 150%;
  border: none;
  object-fit: cover;
  @media screen and (max-width: 500px) {
    width: 500%;
    height: 500%;
    left: 20%;
  }
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
const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid black;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;
const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.Vimeo) {
      const player = new window.Vimeo.Player(document.querySelector('iframe'));

      player.on('loaded', () => {
        setLoading(false);
      });
    }
  }, []);

  return (
    <HeroSection>
      <VimeoVideoWrapper>
        {loading && <Loader />}
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

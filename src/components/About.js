// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #f4f4f4;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  font-size: 1.25rem;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          I'm a passionate developer with a knack for creating beautiful and functional web applications. 
          With a strong background in front-end development, I bring designs to life with clean and efficient code.
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
};

export default About;

// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/path-to-your-background-image.jpg') no-repeat center/cover;
  color: #000;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 1rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SummaryText = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
`;

const ResumeButton = styled.a`
  display: inline-block;
  background: #ff7e67;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.25rem;
  transition: background 0.3s;

  &:hover {
    background: #ff6247;
  }
`;

const Hero = () => (
  <HeroSection>
    <HeroContent>
      <HeroTitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm Kirti Bajaj
      </HeroTitle>
      <HeroSubtitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Data Scientist 
      </HeroSubtitle>
      <SummaryText
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        A dynamic data scientist and financial analyst adept at leveraging Python programming and machine
        learning techniques to drive impactful solutions. With a strong foundation in data analysis and visualization
        tools such as Power BI and machine learning (NLP).
      </SummaryText>
      <ResumeButton href="/My-Portfolio/Kirti_Resume.pdf" download="Kirti Resume.pdf">
      Download Resume
      </ResumeButton>


    </HeroContent>
  </HeroSection>
);

export default Hero;

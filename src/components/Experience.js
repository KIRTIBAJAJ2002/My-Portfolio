// src/components/Experience.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  background: transparent;
`;

const ExperienceContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ExperienceCard = styled(motion.div)`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExperienceCardTitle = styled.h3`
  font-size: 1.5rem;
`;

const DropdownIcon = styled.span`
  font-size: 1.5rem;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`;

const ExperienceItemText = styled(motion.ul)`
  font-size: 1rem;
  text-align: left;
  margin-top: 1rem;
  padding-left: 1rem;
  list-style-type: disc;
`;

const ExperienceItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Experience = () => {
  const [openExperience, setOpenExperience] = useState(null);

  const toggleExperience = (index) => {
    setOpenExperience(openExperience === index ? null : index);
  };

  const experiences = [
    {
      title: 'Data Scientist Intern, Biyani Technologies PVT LTD (04/2024–07/2024)',
      description: [
        'Successfully integrated text-to-speech functionality into the company\'s software, enhancing accessibility and user experience.',
        'Implemented a news aggregator for kids.',
        'Developed a chatbot for software using Python, Langchain, OpenAI, RAG, Vector Database, Embeddings, and Streamlit.',
        'Web-scraped various college websites for lead generation.',
      ],
    },
    {
      title: 'Data Scientist Intern, Ineuron.ai (04/2023 - 07/2023)',
      description: [
        'Developed a machine learning system for predicting insurance premiums with 86% accuracy using gradient boosting.',
        'Conducted data collection, cleaning, preprocessing, and applied statistics for prediction.',
      ],
    },
    {
      title: 'Jr. Financial Analyst, P Maloo & Associates (CA Firm) (07/2022-08/2023)',
      description: [
        'Conducted financial analysis on balance sheets, income statements, and cash flow statements to extract critical insights.',
        'Led financial audits, ensuring data accuracy and promptly addressing discrepancies.',
        'Performed ratio analysis and financial analysis for companies.',
      ],
    },
  ];

  return (
    <ExperienceSection id="experience">
      <ExperienceContent>
        <ExperienceTitle>Experience</ExperienceTitle>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} onClick={() => toggleExperience(index)}>
            <ExperienceHeader>
              <ExperienceCardTitle>{experience.title}</ExperienceCardTitle>
              <DropdownIcon isOpen={openExperience === index}>⌄</DropdownIcon>
            </ExperienceHeader>
            {openExperience === index && (
              <ExperienceItemText
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
              >
                {experience.description.map((item, idx) => (
                  <ExperienceItem key={idx}>{item}</ExperienceItem>
                ))}
              </ExperienceItemText>
            )}
          </ExperienceCard>
        ))}
      </ExperienceContent>
    </ExperienceSection>
  );
};

export default Experience;

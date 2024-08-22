// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: transparent;
`;

const SkillsContent = styled(motion.div)`
  max-width: 1000px; /* Increased width to accommodate more skills */
  margin: 0 auto;
  text-align: center;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  text-align: center;
`;

const SkillItem = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SkillName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const SkillCategory = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Skills = () => {
  const skills = [
    { name: 'Python (Pandas, Numpy, Scipy, Scikit)', category: 'Programming Languages & Libraries' },
    { name: 'TensorFlow/Keras', category: 'Programming Languages & Libraries' },
    { name: 'Machine Learning, MLOps', category: 'Machine Learning & MLOps' },
    { name: 'Natural Language Processing (NLP)', category: 'Machine Learning & MLOps' },
    { name: 'Power BI, Tableau, MS-Excel', category: 'Data Visualization' },
    { name: 'Accounting, CFS', category: 'Finance' },
    { name: 'Git', category: 'Version Control' },
    { name: 'Docker, AWS', category: 'DevOps & Cloud' },
    { name: 'SQL, MongoDB, Supabase', category: 'Databases' },
    { name: 'FastAPI, Flask, Streamlit', category: 'Web-based Frameworks' },
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContent
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SkillsTitle>Tech Stack & Skills</SkillsTitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              <SkillName>{skill.name}</SkillName>
              <SkillCategory>{skill.category}</SkillCategory>
            </SkillItem>
          ))}
        </SkillsGrid>
      </SkillsContent>
    </SkillsSection>
  );
};

export default Skills;

// src/components/Projects.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: transparent;
`;

const ProjectsContent = styled.div`
  max-width: 1000px; /* Adjusted to accommodate more projects */
  margin: 0 auto;
`;

const ProjectTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectCardTitle = styled.a`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: #333;

  &:hover {
    color: #ff7e67;
  }
`;

const DropdownIcon = styled.span`
  font-size: 1.5rem;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`;

const ProjectDescription = styled(motion.div)`
  font-size: 1rem;
  text-align: left;
  margin-top: 1rem;
  white-space: pre-line; /* Ensure newlines are respected */
`;

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  const projects = [
    {
      title: 'Web Scraping',
      description: `Successfully managed Web Scraping of the Flipkart website using Requests, BS4, Python, and Flask.
Extracted the list of reviews for any product that is to be displayed.
Tech Used: Requests, BS4, Python, Flask.`,
      link: 'https://github.com/KIRTIBAJAJ2002/Project1-Scraper-beanstalk-deployment',
    },
    {
      title: 'Web Portfolio Web Developer',
      description: `The script sends resume details to an LLM model to convert the resume info into JSON format, saves formatted data to a new file, and deploys a portfolio link.
Tech Used: Streamlit, AWS Lambda, LangChain, FastAPI, TensorFlow.`,
      link: 'https://github.com/your-username/web-portfolio-project',
    },
    {
      title: 'Text Summarizer',
      description: `Implemented a robust and efficient text summarization algorithm to condense large documents into concise summaries. Calculates BLEU Score and fine-tunes the model.
Tech Used: TensorFlow, NLP, Preprocessing.`,
      link: 'https://github.com/your-username/text-summarizer',
    },
    {
      title: 'Diamond Price Prediction',
      description: `Employed ML algorithms using the pipeline (Data Ingestion, Data Transformation, Model Training, Predicting), Docker, AWS, and Linear Regression to achieve 93% accuracy in predicting diamond prices.
Tech Used: Pandas, Numpy, Flask, Seaborn, Scikit-learn, Docker, AWS, Linear Regression.`,
      link: 'https://github.com/KIRTIBAJAJ2002/Diamondpriceprediction-ML-project',
    },
    {
      title: 'Insurance Premium Prediction',
      description: `Developed a machine learning system for predicting insurance premiums with 86% accuracy using gradient boosting.
Conducted data collection, cleaning, preprocessing, and applied statistics for prediction.`,
      link: 'https://github.com/your-username/insurance-premium-prediction', // Replace with actual link if available
    },
    {
      title: 'Taxkiller (Ongoing)',
      description: `An ongoing project aimed at automating tax calculations and filings using advanced algorithms and machine learning techniques.`,
      link: 'https://github.com/your-username/taxkiller', // Replace with actual link if available
    },
    {
      title: 'Chatbot (LLM)',
      description: `Developed a chatbot that takes the PDF of user manuals and answers questions prompted by the user. Utilized Retrieval-Augmented Generation (RAG) with Generalized AI.`,
      link: 'https://github.com/your-username/chatbot-llm', // Replace with actual link if available
    },
    {
      title: 'News Feed Aggregator',
      description: `Designed and implemented ETL pipelines for a news app, ensuring efficient data processing and integration.
Created robust handlers to manage various news providers, standardizing data collection and processing workflows.
Preprocessed and stored data in SQL, leveraging efficient database management.`,
      link: 'https://github.com/your-username/news-feed-aggregator', // Replace with actual link if available
    },
  ];

  const visualizationProjects = [
    {
      title: 'Job Market Analysis',
      description: `Analyzed job market trends using various data sources to identify in-demand skills and job openings.
Visualized the data using Power BI and Tableau to create interactive dashboards.`,
      link: 'https://github.com/your-username/job-market-analysis', // Replace with actual link if available
    },
    {
      title: 'Zomato Sales Analysis',
      description: `Performed a comprehensive analysis of Zomato's sales data to uncover key trends and insights.
Visualized the findings using Power BI, providing actionable insights for decision-making.`,
      link: 'https://github.com/your-username/zomato-sales-analysis', // Replace with actual link if available
    },
  ];

  return (
    <>
      <ProjectsSection id="projects">
        <ProjectsContent>
          <ProjectTitle>Projects</ProjectTitle>
          <ProjectGrid>
            {projects.map((project, index) => (
              <ProjectCard key={index} onClick={() => toggleProject(index)}>
                <ProjectHeader>
                  <ProjectCardTitle href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </ProjectCardTitle>
                  <DropdownIcon isOpen={openProject === index}>⌄</DropdownIcon>
                </ProjectHeader>
                {openProject === index && (
                  <ProjectDescription
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.description}
                  </ProjectDescription>
                )}
              </ProjectCard>
            ))}
          </ProjectGrid>
        </ProjectsContent>
      </ProjectsSection>

      <ProjectsSection id="visualization-projects">
        <ProjectsContent>
          <ProjectTitle>Visualization Projects</ProjectTitle>
          <ProjectGrid>
            {visualizationProjects.map((project, index) => (
              <ProjectCard key={index} onClick={() => toggleProject(index)}>
                <ProjectHeader>
                  <ProjectCardTitle href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </ProjectCardTitle>
                  <DropdownIcon isOpen={openProject === index}>⌄</DropdownIcon>
                </ProjectHeader>
                {openProject === index && (
                  <ProjectDescription
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.description}
                  </ProjectDescription>
                )}
              </ProjectCard>
            ))}
          </ProjectGrid>
        </ProjectsContent>
      </ProjectsSection>
    </>
  );
};

export default Projects;

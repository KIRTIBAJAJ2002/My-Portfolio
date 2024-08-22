// src/components/EducationAndCertifications.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: transparent;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Item = styled.div`
  margin-bottom: 1.5rem;
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ItemText = styled.p`
  font-size: 1rem;
  color: #666;
`;

const EducationAndCertifications = () => {
  return (
    <Section id="education-certifications">
      <Content>
        <Title>Education</Title>
        <Item>
          <ItemTitle>Bachelor of Commerce</ItemTitle>
          <ItemText>8.81 CGPA (2019-2022)</ItemText>
        </Item>
        <Title>Certifications</Title>
        <Item>
          <ItemTitle>Full Stack Data Science - INeuron</ItemTitle>
        </Item>
      </Content>
    </Section>
  );
};

export default EducationAndCertifications;

// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #333;
  color: #fff;
  text-align: center;
`;

const ContactContent = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ContactText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const ContactLink = styled.a`
  color: #ff7e67;
  font-size: 1.25rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContent
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ContactTitle>Contact Me</ContactTitle>
        <ContactText>
          email: {' '}
          <ContactLink href="mailto:your.email@example.com">kirtibajaj333@gmail.com</ContactLink>
        </ContactText>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;

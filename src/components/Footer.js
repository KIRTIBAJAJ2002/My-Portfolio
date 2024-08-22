// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 2rem;
  background: #222;
  color: #fff;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>© 2024 Your Name. All rights reserved.</p>
    </FooterSection>
  );
};

export default Footer;

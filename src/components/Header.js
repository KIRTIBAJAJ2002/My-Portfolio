// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #222;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const Brand = styled.h1`
  margin: 0;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavLink = styled(motion.a)`
  color: #fff;
  margin-left: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #ff7e67;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1rem;
    width: 100%;
    text-align: left;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Brand>Kirti Bajaj</Brand>
      <NavLinks>
        <NavLink whileHover={{ scale: 1.1 }} href="#about">About</NavLink>
        <NavLink whileHover={{ scale: 1.1 }} href="#experience">Experience</NavLink>
        <NavLink whileHover={{ scale: 1.1 }} href="#certificates">Certifications</NavLink>
        <NavLink whileHover={{ scale: 1.1 }} href="#skills">Skills</NavLink>
        <NavLink whileHover={{ scale: 1.1 }} href="#projects">Projects</NavLink>
        <NavLink whileHover={{ scale: 1.1 }} href="#contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Header;

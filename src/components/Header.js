// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #222;
  color: #fff;
`;

const NavLink = styled(motion.a)`
  color: #fff;
  margin-left: 1.5rem;
  text-decoration: none;
  &:hover {
    color: #ff7e67;
  }
`;

const Header = () => {
  return (
    <Nav>
      <h1>Your Name</h1>
      <div>
        <NavLink whileHover={{ scale: 1.1 }} href="#about">About</NavLink>
        <NavLink whileHover={{ scale: 1.1 }} href="#experience">Experience</NavLink>
        <NavLink whileHover={{ scale: 1.1 }} href="#certificates">Certificates</NavLink>
        <NavLink whileHover={{ scale: 1.1 }} href="#skills">Skills</NavLink>
        <NavLink whileHover={{ scale: 1.1 }} href="#projects">Projects</NavLink>
        <NavLink whileHover={{ scale: 1.1 }} href="#contact">Contact</NavLink>
      </div>
    </Nav>
  );
};

export default Header;

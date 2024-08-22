// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience'; // New
import Certificates from './components/Certificates'; // New
import Skills from './components/Skills'; // New
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />  {/* New */}
      <Skills /> {/* New */}
      <Projects />
      <Certificates /> {/* New */}

      <Contact />
      <Footer />
    </>
  );
};

export default App;

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Github from './components/Github';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Initialize IntersectionObserver scroll reveal animations
  useScrollReveal();

  return (
    <ThemeProvider>
      <div className="portfolio-app">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Github />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

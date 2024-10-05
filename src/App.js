import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar title={'My Portfolio'} />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

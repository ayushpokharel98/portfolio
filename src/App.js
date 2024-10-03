import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {
  return (
    <>
      <Navbar title={'My Portfolio'} />
      <Landing />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;

import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="text-gray-400 bg-gray-900 body-font">
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </header>
    </div>
  );
}

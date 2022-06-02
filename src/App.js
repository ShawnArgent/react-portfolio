import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="text-gray-400 bg-gray-900 body-font">
          <Navbar />
          <About />
          <Projects />
          <Footer />
        </main>
      </header>
    </div>
  );
}

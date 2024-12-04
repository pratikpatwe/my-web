import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Launches } from './components/Launches';
import { CurrentWork } from './components/CurrentWork';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] circuit-pattern">
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Launches />
        <CurrentWork />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800 relative z-10">
        <p>© {new Date().getFullYear()} Pratik. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
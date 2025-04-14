import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './sections/Home';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Footer from './components/Footer';
import About from './sections/About';
import ThemeToggle from './components/ThemeToggle';
import './App.css';   
import React from 'react';
import videobg from './assets/videobg.mp4';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    
    <div className="App">
      <div className="videog">
      <video src="/videobg.mp4" autoPlay muted loop />

    </div>
      {/* Main Content */}
      <Header />
      <main>        
        <ThemeToggle />
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}


export default App;
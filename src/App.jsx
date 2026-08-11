import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import ProjectsPortfolio from './components/ProjectsPortfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <ProjectsPortfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

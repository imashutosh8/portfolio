import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import ProjectsPortfolio from './components/ProjectsPortfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className={(activeTab === 'about' || activeTab === 'contact') ? 'no-scroll-main' : ''}>
        {activeTab === 'about' && <About setActiveTab={setActiveTab} />}
        {activeTab === 'resume' && <Resume />}
        {activeTab === 'projects' && <ProjectsPortfolio />}
        {activeTab === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

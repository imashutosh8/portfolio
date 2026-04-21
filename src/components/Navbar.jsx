import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About Me', id: 'about' },
    { name: 'Resume', id: 'resume' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="navbar">
      <div className="container nav-content">
        <div className="nav-logo">
          Ashutosh Verma <span className="role">[Computer Science Student]</span>
        </div>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={activeTab === link.id ? 'active' : ''}
              onClick={() => handleNavClick(link.id)}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-copy">© {new Date().getFullYear()} Ashutosh Verma</span>
        <span className="footer-built">Built with React & Vite</span>
      </div>
    </footer>
  );
};

export default Footer;

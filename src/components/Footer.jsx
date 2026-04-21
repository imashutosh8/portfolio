import React from 'react';
import { CONTACT } from '../data/portfolio';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Accessibility Statement</a>
        </div>

        <div className="footer-contact">
          <span>{CONTACT.email}</span>
          <span>{CONTACT.phone}</span>
        </div>

        <div className="footer-copyright">
          <span>&copy; {new Date().getFullYear()} by Ashutosh Verma.</span>
          <span>Built with React & Vite.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

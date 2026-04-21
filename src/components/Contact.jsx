import React from 'react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, XIcon, HackerRankIcon, HackerEarthIcon, InstagramIcon } from './BrandIcons';
import { CONTACT, SOCIAL_LINKS } from '../data/portfolio';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-page">
        <h1 className="contact-title">Contact</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-heading">Get in touch</h2>
            <div className="contact-list">
              <p>Email: <a href={`mailto:${CONTACT.email}`} className="contact-link">{CONTACT.email}</a></p>
              <p>Phone: <a href={`tel:${CONTACT.phone}`} className="contact-link">{CONTACT.phone}</a></p>
              <p>Location: {CONTACT.location}</p>
            </div>
          </div>

          <div className="contact-socials">
            <h2 className="contact-heading">Profiles</h2>
            <div className="socials-grid">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-card">
                <GithubIcon size={24} />
                <span>GitHub</span>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-card">
                <LinkedinIcon size={24} />
                <span>LinkedIn</span>
              </a>
              <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noopener noreferrer" className="social-card">
                <LeetcodeIcon size={24} />
                <span>LeetCode</span>
              </a>
              <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="social-card">
                <XIcon size={24} />
                <span>X / Twitter</span>
              </a>
              <a href={SOCIAL_LINKS.hackerrank} target="_blank" rel="noopener noreferrer" className="social-card">
                <HackerRankIcon size={24} />
                <span>HackerRank</span>
              </a>
              <a href={SOCIAL_LINKS.hackerearth} target="_blank" rel="noopener noreferrer" className="social-card">
                <HackerEarthIcon size={24} />
                <span>HackerEarth</span>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="social-card">
                <InstagramIcon size={24} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

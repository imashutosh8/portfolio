import React from 'react';
import { GithubIcon, LinkedinIcon, InstagramIcon, XIcon } from './BrandIcons';
import { SOCIAL_LINKS } from '../data/portfolio';
import ProfileImg from '../assets/Profile.png';
import './About.css';

const About = ({ setActiveTab }) => {
  return (
    <div className="container">
      <section className="about-page">
        <div className="about-left">
          <div className="about-hello-wrapper">
            <h1 className="about-hello">Hello</h1>
          </div>

          <div className="about-left-bottom">
            <div className="about-profile-card">
              <img src={ProfileImg} alt="Ashutosh Verma" />
              <div className="about-social-widget">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                  <GithubIcon size={18} />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <LinkedinIcon size={18} />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
                  <InstagramIcon size={18} />
                </a>
                <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                  <XIcon size={18} />
                </a>
              </div>
            </div>

            <div className="about-author">
              <h2 className="about-name">Ashutosh Verma</h2>
              <p className="about-role">Computer Science Student</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <h2 className="about-intro-large">
            I am currently pursuing my Bachelor of Technology in Computer Science and Engineering at NIET.
          </h2>
          <p className="about-intro-small">
            I focus on solving problems with efficient code and aim to grow into a developer who builds impactful, real-world solutions.

          </p>

          <div className="about-actions">
            <button className="pill-btn yellow" onClick={() => { setActiveTab('resume'); window.scrollTo(0, 0); }}>
              Resume
            </button>
            <button className="pill-btn white" onClick={() => { setActiveTab('projects'); window.scrollTo(0, 0); }}>
              Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

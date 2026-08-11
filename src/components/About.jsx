import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, InstagramIcon, XIcon, LeetcodeIcon } from './BrandIcons';
import { SOCIAL_LINKS, CONTACT } from '../data/portfolio';

import './About.css';

const SKILLS = [
  'React', 'Node.js', 'MongoDB', 'Python', 'C++', 'JavaScript',
  'HTML/CSS', 'Git', 'GitHub', 'MySQL', 'Flask', 'REST APIs',
  'DSA', 'OOPs', 'DBMS'
];

const LiveClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      });
      setTime(formatted);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="live-clock">{time} IST</span>;
};

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">

        {/* Profile Row */}
        <div className="about-profile-row">

          <div className="about-identity">
            <h1 className="about-name">Ashutosh Verma</h1>
            <span className="about-handle">@vermaashutosh_</span>
          </div>
        </div>

        {/* Meta row */}
        <div className="about-meta">
          <span className="about-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Sultanpur, India
          </span>
          <span className="about-meta-sep">·</span>
          <span className="about-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <LiveClock />
          </span>
        </div>

        {/* Intro bullets */}
        <ul className="about-bullets">
          <li>
            <span className="bullet-dot" />
            Currently pursuing <strong>B.Tech in Computer Science</strong> at NIET.
          </li>
          <li>
            <span className="bullet-dot" />
            Passionate about building <strong>full-stack web applications</strong> that solve real problems.
          </li>
          <li>
            <span className="bullet-dot" />
            Always <strong>learning</strong>, shipping, and turning ideas into working products.
          </li>
        </ul>

        {/* CTA Row */}
        <div className="about-cta-row">
          <a href={`mailto:${CONTACT.email}`} className="btn-primary about-email-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Email Me
          </a>
          <div className="about-socials">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-icon-link" title="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-link" title="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="social-icon-link" title="X / Twitter">
              <XIcon size={18} />
            </a>
            <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noopener noreferrer" className="social-icon-link" title="LeetCode">
              <LeetcodeIcon size={18} />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-link" title="Instagram">
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="skills-marquee-wrap">
          <div className="skills-marquee-label">My Skills</div>
          <div className="skills-marquee">
            <div className="skills-marquee-track">
              {[...SKILLS, ...SKILLS].map((skill, i) => (
                <span key={i} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, XIcon, HackerRankIcon, HackerEarthIcon, InstagramIcon } from './BrandIcons';
import { CONTACT, SOCIAL_LINKS } from '../data/portfolio';
import './Contact.css';

const SOCIAL_ITEMS = [
  { icon: <GithubIcon size={20} />, label: 'GitHub', href: SOCIAL_LINKS.github },
  { icon: <LinkedinIcon size={20} />, label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
  { icon: <XIcon size={20} />, label: 'X / Twitter', href: SOCIAL_LINKS.x },
  { icon: <LeetcodeIcon size={20} />, label: 'LeetCode', href: SOCIAL_LINKS.leetcode },
  { icon: <HackerRankIcon size={20} />, label: 'HackerRank', href: SOCIAL_LINKS.hackerrank },
  { icon: <HackerEarthIcon size={20} />, label: 'HackerEarth', href: SOCIAL_LINKS.hackerearth },
  { icon: <InstagramIcon size={20} />, label: 'Instagram', href: SOCIAL_LINKS.instagram },
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-label">Contact</div>

        <h2 className="contact-heading">Let's work together.</h2>
        <p className="contact-subtext">
          I'm open to internship opportunities, freelance projects, and interesting conversations.
          Feel free to reach out.
        </p>

        <a href={`mailto:${CONTACT.email}`} className="contact-email-link">
          {CONTACT.email}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="contact-email-arrow">
            <path d="M7 7h10v10M7 17 17 7"/>
          </svg>
        </a>

        <div className="contact-divider" />

        <div className="contact-socials-row">
          {SOCIAL_ITEMS.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-item"
              title={label}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

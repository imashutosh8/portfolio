import React from 'react';
import { RESUME_URL, EDUCATION, EXPERIENCE, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolio';
import './Resume.css';

const Resume = () => {
  return (
    <div className="container">
      <div className="resume-page">
        <div className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="pill-btn white">
            Download CV
          </a>
        </div>

        <div className="resume-section">
          <div className="resume-col">
            <h2 className="resume-col-title">Experience</h2>
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="resume-item">
                <span className="resume-period">{exp.period}</span>
                <div className="resume-block">
                  <div className="resume-block-title">{exp.role}</div>
                  <div className="resume-block-subtitle">{exp.company}</div>
                  <div className="resume-block-info">{exp.location}</div>
                </div>
                <p className="resume-desc">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="resume-col">
            <h2 className="resume-col-title">Education</h2>
            {EDUCATION.map((edu, index) => (
              <div key={index} className="resume-item">
                <span className="resume-period">{edu.period}</span>
                <div className="resume-block">
                  <div className="resume-block-title">{edu.degree}</div>
                  <div className="resume-block-subtitle">{edu.institution}</div>
                  <div className="resume-block-info">{edu.location} | {edu.info}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <div className="resume-col">
            <h2 className="resume-col-title">Professional skillset</h2>
            <div className="resume-block" style={{ padding: '30px' }}>
              <div className="resume-skills-grid">
                {SKILL_CATEGORIES.map((category, idx) => (
                  <div key={idx} className="resume-skill-item" style={{ borderBottomColor: 'rgba(0,0,0,0.1)' }}>
                    <strong>{category.title}:</strong> {category.skills.join(', ')}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="resume-col">
            <h2 className="resume-col-title">Certifications</h2>
            <div className="resume-block" style={{ padding: '30px' }}>
              <div className="resume-skills-grid">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="resume-skill-item" style={{ borderBottomColor: 'rgba(0,0,0,0.1)' }}>
                    <strong>{cert.title}</strong> - {cert.issuer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

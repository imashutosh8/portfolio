import React from 'react';
import { RESUME_URL, EDUCATION, EXPERIENCE, SKILL_CATEGORIES, CERTIFICATIONS, ACHIEVEMENTS } from '../data/portfolio';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section section">
      <div className="container">

        {/* Section header */}
        <div className="resume-header">
          <div className="section-label">Resume</div>
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-outline resume-download-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>

        {/* Experience */}
        <div className="resume-block">
          <h2 className="resume-block-title">Experience</h2>
          <div className="timeline">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <div className="timeline-company">{exp.company} · {exp.location}</div>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="resume-block">
          <h2 className="resume-block-title">Education</h2>
          <div className="timeline">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-role">{edu.degree}</h3>
                    <span className="timeline-period">{edu.period}</span>
                  </div>
                  <div className="timeline-company">{edu.institution} · {edu.location}</div>
                  <div className="timeline-info">{edu.info}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="resume-block">
          <h2 className="resume-block-title">Skills</h2>
          <div className="skills-grid">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i} className="skill-category">
                <div className="skill-category-name">{cat.title}</div>
                <div className="skill-tags">
                  {cat.skills.map((s, j) => (
                    <span key={j} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="resume-block">
          <h2 className="resume-block-title">Certifications</h2>
          <div className="cert-list">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="cert-item">
                <div className="cert-title">{cert.title}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="resume-block">
          <h2 className="resume-block-title">Achievements</h2>
          <div className="timeline">
            {ACHIEVEMENTS.map((ach, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3 className="timeline-role">{ach.title}</h3>
                  <p className="timeline-desc" style={{ marginTop: '6px' }}>{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;

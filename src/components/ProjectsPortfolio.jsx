import React from 'react';
import { PROJECTS } from '../data/portfolio';
import './ProjectsPortfolio.css';

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="project-arrow"
  >
    <path d="M7 7h10v10M7 17 17 7" />
  </svg>
);

const ProjectsPortfolio = () => {
  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="section-label">Projects</div>

        <div className="projects-list">
          {PROJECTS.map((project, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            return (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-item"
              >
                <div className="project-item-inner">
                  <span className="project-num">{num}</span>

                  <div className="project-body">
                    <div className="project-title-row">
                      <h3 className="project-title">{project.title}</h3>
                      <ArrowIcon />
                    </div>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-tags">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPortfolio;

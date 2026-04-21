import React from 'react';
import { PROJECTS } from '../data/portfolio';
import './ProjectsPortfolio.css';

const ProjectsPortfolio = () => {
  return (
    <div className="container">
      <div className="projects-page">
        <h1 className="projects-title">Projects</h1>
        
        <div className="projects-list">
          {PROJECTS.map((project, idx) => {
            const num = (idx + 1).toString().padStart(2, '0');
            return (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                key={idx} 
                className="project-item"
              >
                <div className="project-title-area">
                  <span className="project-index">{num}</span>
                  <span className="project-name">{project.title}</span>
                </div>
                <div className="project-meta">
                  {project.description}
                  <br />
                  <span style={{ fontSize: '14px', marginTop: '4px', display: 'block' }}>
                    {project.tech.join(' • ')}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPortfolio;

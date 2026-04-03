import React from 'react';
import { projects } from '../data/portfolio';
import { useFadeIn } from '../hooks/useFadeIn';
import './Projects.css';

export default function Projects() {
  const ref = useFadeIn();

  return (
    <>
      <hr className="divider" />
      <section id="projects" className="projects fade-in" ref={ref}>

        <div className="projects-top">
          <div>
            <div className="projects-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Projetos</span>
            </div>
            <h2 className="section-title-solid">O que</h2>
            <div className="section-title-outline">construí.</div>
          </div>
          <span className="projects-count">
            {String(projects.length).padStart(2, '0')} projetos
          </span>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-row" key={project.number}>
              <span className="proj-num">{project.number}</span>

              <div className="proj-body">
                <span className="proj-name">{project.name}</span>
                <span className="proj-desc">{project.description}</span>
                <div className="proj-tags">
                  {project.tags.map((tag) => (
                    <span className="proj-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="proj-links">
                <a href={project.liveUrl} className="proj-link">Live ↗</a>
                <a href={project.codeUrl} className="proj-link">Code ↗</a>
                <span className="proj-arrow">→</span>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import './About.css';
import { about } from '../data/portfolio';
import utfpr from "../assets/utfpr.jpeg"

const skillGroups = [
  { label: 'Linguagens', skills: ['TypeScript', 'JavaScript', 'Java', 'C/C++'] },
  { label: 'Backend', skills: ['Node.js', 'Fastify', 'Express', 'Spring Boot'] },
  { label: 'Arquitetura', skills: ['Clean Architecture', 'DDD', 'REST APIs', 'Design Patterns'] },
  { label: 'Mensageria', skills: ['RabbitMQ', 'Kafka'] },
  { label: 'Banco de dados', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'JPA', 'Hibernate'] },
  { label: 'Cloud', skills: ['Google Cloud Platform', 'Azure'] },
  { label: 'Infra / DevOps', skills: ['Docker', 'Kubernetes', 'Nginx'] },
  { label: 'Observabilidade', skills: ['Grafana', 'Jaeger', 'OpenTelemetry'] },
  { label: 'Ferramentas', skills: ['Drizzle ORM', 'TypeORM', 'Jest', 'Swagger', 'JWT', 'Git'] },
];

export default function About() {
  const ref = useFadeIn();

  return (
    <>
      <hr className="divider" />
      <section id="about" className="about fade-in" ref={ref}>

        <div className="about-top">
          <div className="about-top-left">
            <div className="about-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Sobre mim</span>
            </div>
            <h2 className="section-title-solid">Código com</h2>
            <div className="section-title-outline">propósito.</div>
          </div>
          <p className="about-top-desc">
            Engenheiro em formação, movido por curiosidade e pela vontade de construir coisas que funcionam de verdade.
          </p>
        </div>

        <hr className="about-divider" />

        <div className="about-grid">

          <div className="edu-block">
            <div className="edu-photo-wrap">
              <img
                src={utfpr}
                alt="Campus UTFPR Cornélio Procópio"
                className="edu-photo"
              />
              <div className="edu-photo-overlay" />
              <div className="edu-photo-label">
                <span>UTFPR</span>
                <span>Cornélio Procópio, PR</span>
              </div>
            </div>

            <div className="edu-info">
              <div className="edu-badge">
                <span className="badge-dot" />
                <span className="badge-text">Em andamento · 5º semestre</span>
              </div>
              <h3 className="edu-degree">Bacharelado em Engenharia de Software</h3>
              <p className="edu-school">Universidade Tecnológica Federal do Paraná</p>
              <div className="edu-progress-wrap">
                <div className="edu-progress-track">
                  <div className="edu-progress-fill" style={{ width: '50%' }} />
                </div>
                <div className="edu-progress-labels">
                  <span>2024</span>
                  <span>2027</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-side">
            <div className="skills-header">
              <span className="skills-label">Stack</span>
              <span className="skills-count">{about.skills.length} tecnologias</span>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <span className="skill-group-label">{group.label}</span>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
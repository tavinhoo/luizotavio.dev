import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import './About.css';
import { about } from '../data/portfolio';

const skillGroups = [
  { label: 'Linguagens', skills: ['TypeScript', 'JavaScript', 'Java', 'C/C++'] },
  { label: 'Backend', skills: ['Node.js', 'Fastify', 'Express', 'Spring Boot'] },
  { label: 'Arquitetura', skills: ['Clean Architecture', 'DDD', 'REST APIs', 'Design Patterns'] },
  { label: 'Mensageria', skills: ['RabbitMQ', 'Kafka'], },
  { label: 'Banco de dados', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'JPA', 'Hibernate',] },
  { label: 'Cloud', skills: ['Google Cloud Platform', 'Azure'], },
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
            Backend engineer focado em arquitetura limpa, APIs escaláveis e integrações corporativas.
          </p>
        </div>

        <hr className="about-divider" />

        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
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
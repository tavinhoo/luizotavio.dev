import React from 'react';
import { timeline } from '../data/portfolio';
import { useFadeIn } from '../hooks/useFadeIn';
import './Timeline.css';

export default function Timeline() {
  const ref = useFadeIn();

  return (
    <>
      <hr className="divider" />
      <section id="timeline" className="timeline-section fade-in" ref={ref}>

        <div className="tl-top">
          <div>
            <div className="tl-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Carreira</span>
            </div>
            <h2 className="section-title-solid">Experiência</h2>
            <div className="section-title-outline">profissional.</div>
          </div>
          <span className="tl-count">
            {String(timeline.length).padStart(2, '0')} empresas
          </span>
        </div>

        <div className="tl-list">
          {timeline.map((item, i) => (
            <div className="tl-row" key={i}>
              <div className="tl-left">
                <span className="tl-period">{item.period}</span>
                <span className="tl-company">{item.company}</span>
                <span className="tl-location">{item.location}</span>
              </div>
              <div className="tl-right">
                <span className="tl-role">{item.role}</span>
                <span className="tl-desc">{item.description}</span>
                {item.tags && (
                  <div className="tl-tags">
                    {item.tags.map((tag) => (
                      <span className="tl-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
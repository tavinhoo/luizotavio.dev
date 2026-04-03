import React from 'react';
import { personal } from '../data/portfolio';
import './Hero.css';
import picture from "../assets/personal-pic.jpeg";

export default function Hero() {
  const firstName = personal.name.split(' ')[0];

  return (
    <section id="hero" className="hero">
      <div className="hero-noise" />
      <div className="hero-grid" />

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">{personal.role}</span>
          </div>

          <h1 className="hero-name">{firstName}</h1>
          <div className="hero-name-outline">Dev.</div>

          <p className="hero-desc">{personal.description}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">Ver projetos</a>
            <a href="#contact" className="btn-secondary">Entrar em contato</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="photo-wrap">
            <div className="photo-ring" />
            <div className="photo-ring-2" />
            <div className="photo-arc" />
            <img src={picture} alt={personal.name} className="hero-photo" />
            <span className="photo-label">Yeah, that's me.</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}
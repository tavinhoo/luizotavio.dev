import React from 'react';
import { personal } from '../data/portfolio';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">{personal.initials}</span>
      <div className="navbar-links">
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#timeline">Carreira</a>
        <a href="#contact">Contato</a>
      </div>
    </nav>
  );
}

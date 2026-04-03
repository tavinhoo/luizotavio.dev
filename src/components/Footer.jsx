import React from 'react';
import { personal } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer-copy">© {year} {personal.name}. Todos os direitos reservados.</span>
      <span className="footer-name">“Simplicity is prerequisite for reliability.”</span>
    </footer>
  );
}

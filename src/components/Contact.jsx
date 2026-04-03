import React, { useState } from 'react';
import { personal } from '../data/portfolio';
import { useFadeIn } from '../hooks/useFadeIn';
import './Contact.css';

export default function Contact() {
  const ref = useFadeIn();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Integre com seu serviço de email aqui (ex: EmailJS, Formspree)
    console.log('Form submitted:', form);
    setSent(true);
  }

  return (
    <>
      <hr className="divider" />
      <section id="contact" className="contact fade-in" ref={ref}>
        <span className="section-label">Contato</span>
        <h2 className="section-title">Vamos conversar.</h2>

        <div className="contact-grid">
          <div>
            <p className="contact-intro">
              Estou aberto a novas oportunidades, projetos freelance ou apenas uma boa conversa sobre tecnologia. Me manda uma mensagem.
            </p>
            <div className="social-links">
              <a href={personal.github} target="_blank" rel="noreferrer" className="social-link">
                <span className="social-name">GitHub</span>
                <span className="social-handle">{personal.githubHandle}</span>
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-link">
                <span className="social-name">LinkedIn</span>
                <span className="social-handle">{personal.linkedinHandle}</span>
              </a>
              <a href={`mailto:${personal.email}`} className="social-link">
                <span className="social-name">Email</span>
                <span className="social-handle">{personal.email}</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {sent ? (
              <div className="form-success">
                Mensagem enviada! Entrarei em contato em breve.
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label className="form-label">Nome</label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Mensagem</label>
                  <textarea
                    className="form-input"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Olá, gostaria de..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Enviar mensagem
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

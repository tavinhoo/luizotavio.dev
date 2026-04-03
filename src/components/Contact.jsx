import React, { useState } from 'react';
import { personal } from '../data/portfolio';
import { useFadeIn } from '../hooks/useFadeIn';
import './Contact.css';

export default function Contact() {
  const ref = useFadeIn();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/luizotaviomtbs@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: 'Novo contato pelo portfolio',
        }),
      });

      if (!response.ok) {
        throw new Error('Falha no envio');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
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
              Valorizo boas discussões sobre tecnologia e engenharia de software. Se quiser trocar ideias, estou disponível.
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
              <a href={personal.resume} target="_blank" rel="noreferrer" className="social-link">
                <span className="social-name">Curriculo</span>
                <span className="social-handle">{personal.resumeHandle}</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {status === 'success' ? (
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
                    placeholder="Seu email"
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
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
                </button>
                {status === 'error' ? (
                  <div className="form-success">
                    Nao foi possivel enviar agora. Tente novamente em instantes.
                  </div>
                ) : null}
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

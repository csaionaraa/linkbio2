import { useState, useEffect } from 'react';
import './Gratuito.css';

function Gratuito() {
  const [slide, setSlide] = useState(0);
  const total = 5;

  const prints = [
    '/provasocial/provasocial1.jpeg',
    '/provasocial/provasocial2.jpeg',
    '/provasocial/provasocial3.jpeg',
    '/provasocial/provasocial4.jpeg',
    '/provasocial/provasocial5.jpeg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(s => (s + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="gratuito-page">

      {/* ── HERO ── */}
    <section className="hero">
        <div className="hero-content">
        <span className="badge">✦ Acesso 100% Gratuito</span>
        <h1 className="hero-titulo">
      ACESSO GRATUITO<br />
      LIBERADO À MINHA<br />
      <span>COMUNIDADE</span><br />
      GRATUITA!
    </h1>
    <p className="hero-sub">
      A galera já tá lucrando pesado dentro da comunidade, são mais de{' '}
      <strong>70 mil pessoas</strong> ganhando todos os dias, sem pagar nada!
      Agora chegou a sua vez!
    </p>
    <button className="btn-pulse">🚀 QUERO GARANTIR MEU ACESSO</button>
    </div>

  <div className="hero-imagem">
    <img src="/imgs/img-gratuito.png" alt="" />
  </div>
</section>

      {/* ── DEPOIMENTOS ── */}
      <section className="depoimentos">
        <h2 className="dep-titulo">
          OLHA O QUE A GALERA ESTÁ FALANDO SOBRE<br />
          <span>MINHA COMUNIDADE 100% GRATUITA</span>
        </h2>

        <div className="carrossel">
          <div
            className="carrossel-track"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            {prints.map((src, i) => (
              <div className="slide" key={i}>
                <img src={src} alt={`Depoimento ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="carrossel-setas">
          <button onClick={() => setSlide(s => (s - 1 + total) % total)}>&#8592;</button>
          <button onClick={() => setSlide(s => (s + 1) % total)}>&#8594;</button>
        </div>

        <div className="carrossel-dots">
          {prints.map((_, i) => (
            <button
              key={i}
              className={i === slide ? 'ativo' : ''}
              onClick={() => setSlide(i)}
            />
          ))}
        </div>

        <button className="btn-pulse btn-acesso">⚡ QUERO ACESSAR A COMUNIDADE AGORA</button>
      </section>

    </div>
  );
}

export default Gratuito;
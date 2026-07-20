import React, { useEffect, useRef, useState } from "react";
import "./Premiacoes.css";

export default function Premiacoes() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    function onResize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", onResize);

    const colors = ["#7c3aed", "#a855f7", "#ffd65a", "#c084fc"];
    const particles = [];
    const count = 60;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * -h * 0.3,
        vx: (Math.random() - 0.5) * 2.2,
        vy: 1 + Math.random() * 2.6,
        size: 6 + Math.random() * 8,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.12,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let raf;
    const start = performance.now();
    function draw(t) {
      const elapsed = t - start;
      ctx.clearRect(0, 0, w, h);
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.rot += p.vr;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }

      if (elapsed < 6500) raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, w, h);
    };
  }, []);

  const TOTAL_MS = 5 * 60 * 1000;
  const STORAGE_KEY = "rp_premiacoes_end";
  const [now, setNow] = useState(Date.now());

  function makeTicket() {
    const num = Math.floor(10000 + Math.random() * 90000);
    return `#${num}`;
  }

  const [ticket, setTicket] = useState(makeTicket());

  useEffect(() => {
    const id = setInterval(() => setTicket(makeTicket()), 15000);
    return () => clearInterval(id);
  }, []);

  const endRef = useRef(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const n = parseInt(raw, 10);
        if (!Number.isNaN(n) && n > Date.now()) return n;
      }
    } catch (e) {}
    const finish = Date.now() + TOTAL_MS;
    try { localStorage.setItem(STORAGE_KEY, String(finish)); } catch (e) {}
    return finish;
  });

  const endAt = useRef(endRef.current());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const remaining = Math.max(0, endAt.current - now);
  const progress = Math.min(100, Math.round((1 - remaining / TOTAL_MS) * 100));
  const mins = String(Math.floor(remaining / 60000)).padStart(2, "0");
  const secs = String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0");

  return (
    <div className="premiacoes-page">
      <canvas ref={canvasRef} className="premiacoes-confetti-canvas" />
      <div className="premiacoes-container">

        <div className="premiacoes-timer-box">
          <div className="premiacoes-timer-card">
            <span>{mins}</span>
            <small>Minutos</small>
          </div>

          <div className="premiacoes-timer-card">
            <span>{secs}</span>
            <small>Segundos</small>
          </div>
        </div>

        <div className="premiacoes-progress-bar">
          <div className="premiacoes-progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <p className="premiacoes-urgencia">
          🔥 ÚLTIMOS MINUTOS! Resgate agora!
        </p>

        <section className="premiacoes-card">
          <div className="premiacoes-trofeu-circle">🏆</div>

          <h1>SEU PRÊMIO FOI DESBLOQUEADO</h1>

          <p className="premiacoes-subtitulo">
            Clique no botão abaixo para resgatar seu
            <span> acesso gratuito</span>
          </p>

          <div className="premiacoes-ganhou-box">
            <div className="premiacoes-topo">
              VOCÊ GANHOU ACESSO AO MEU GRUPO VIP POR 7 DIAS
            </div>

            <div className="premiacoes-conteudo">
              <div className="premiacoes-trofeu">🏆</div>

              <h2>+ ACESSO VITALÍCIO AO MEU GRUPO</h2>
            </div>
          </div>

          <div className="premiacoes-ticket-area">
            <span>Seu ticket da sorte:</span>

            <div className="premiacoes-ticket">
              {ticket}
            </div>
          </div>

          <div className="premiacoes-beneficios">
            <h3>🎁 O QUE VOCÊ GANHA NO GRUPO VIP</h3>

            <div className="premiacoes-beneficios-grid">
              <div className="premiacoes-beneficio">
                <span>📈</span>
                <p>Análises diárias pré-jogo e live</p>
              </div>

              <div className="premiacoes-beneficio">
                <span>⚡</span>
                <p>Tips ao vivo durante os jogos</p>
              </div>

              <div className="premiacoes-beneficio">
                <span>⭐</span>
                <p>Insights exclusivos de Luisa Mendes</p>
              </div>

              <div className="premiacoes-beneficio">
                <span>📊</span>
                <p>Estatísticas de performance</p>
              </div>
            </div>
          </div>

          <button
            className="premiacoes-btn-resgatar"
            onClick={() => {
              window.location.href = "https://mais.red/run/LuisaTrafegoRoleta";
            }}
          >
            RESGATAR MEU PRÊMIO AGORA →
          </button>

          <p className="premiacoes-rodape">
            * Ao clicar no botão, você será redirecionado para resgatar seu prêmio.
          </p>
        </section>

      </div>
    </div>
  );
}

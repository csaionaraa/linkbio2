import React, { useEffect, useRef, useState } from "react";
import "./Premio.css";

export default function Premio() {
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
        vx: (Math.random() - 0.5) * 2.2, // slower horizontal
        vy: 1 + Math.random() * 2.6, // slower fall
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
        p.vy += 0.04; // gentler gravity for slower feel
        p.rot += p.vr;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }

      // continue animation for ~6500ms for a slower effect
      if (elapsed < 6500) raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, w, h);
    };
  }, []);

  // Persistent 5-minute timer
  const TOTAL_MS = 5 * 60 * 1000;
  const STORAGE_KEY = "rp_premio_end";
  const [now, setNow] = useState(Date.now());

  // ticket state (changes every 15s)
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
    <div className="premio-page">
      <canvas ref={canvasRef} className="confetti-canvas" />
      <div className="premio-container">

        {/* TIMER */}
        <div className="timer-box">
          <div className="timer-card">
            <span>{mins}</span>
            <small>Minutos</small>
          </div>

          <div className="timer-card">
            <span>{secs}</span>
            <small>Segundos</small>
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <p className="urgencia">
          🔥 ÚLTIMOS MINUTOS! Resgate agora!
        </p>

        {/* PREMIO */}
        <section className="premio-card">
          <div className="trofeu-circle">🏆</div>

          <h1>SEU PRÊMIO FOI DESBLOQUEADO</h1>

          <p className="subtitulo">
            Clique no botão abaixo para resgatar seu
            <span> acesso gratuito</span>
          </p>

          <div className="ganhou-box">
            <div className="premio-topo">
              VOCÊ GANHOU ACESSO AO MEUS GRUPOS VIP E VIP ODDS ALTA POR 7 DIAS
            </div>

            <div className="premio-conteudo">
              <div className="trofeu">🏆</div>

              <h2>+ ACESSO VITALÍCIO AO MEU GRUPO</h2>

              <p>
                Acesso ao meuGrupo VIP + VIP Odds Altas por 7 dias
              </p>
            </div>
          </div>

          <div className="ticket-area">
            <span>Seu ticket da sorte:</span>

            <div className="ticket">
              #51865
            </div>
          </div>

          <div className="beneficios">
            <h3>🎁 O QUE VOCÊ GANHA NO GRUPO VIP</h3>

            <div className="beneficios-grid">
              <div className="beneficio">
                <span>📈</span>
                <p>Análises diárias pré-jogo e live</p>
              </div>

              <div className="beneficio">
                <span>⚡</span>
                <p>Tips ao vivo durante os jogos</p>
              </div>

              <div className="beneficio">
                <span>⭐</span>
                <p>Insights exclusivos de Luisa Mendes</p>
              </div>

              <div className="beneficio">
                <span>📊</span>
                <p>Estatísticas de performance</p>
              </div>
            </div>
          </div>

          <button
            className="btn-resgatar"
            onClick={() => {
              window.location.href = "https://mais.red/run/LuisaRoletaORG";
            }}
          >
            RESGATAR MEU PRÊMIO AGORA →
          </button>

          <p className="rodape">
            * Ao clicar no botão, você será redirecionado para resgatar seu prêmio.
          </p>
        </section>

      </div>
    </div>
  );
}
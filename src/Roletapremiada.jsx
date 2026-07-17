import { useEffect, useRef, useState } from "react";
import "./Roletapremiada.css";

// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const CONFIG = {
  REDIRECT_URL: "https://luisamendestips.com.br/premiacao",
  GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbzmWvdJg8v96JJhqWkLGcKtu9rS1TyceecwisUc66sI17jotp0duCx9c5Eo9uO0uUd_Ng/exec",

  HERO_BG_DESKTOP: "/imgs/roleta-desktop.png",
  HERO_BG_MOBILE: "/imgs/roleta-mobile.png",
};

// ─────────────────────────────────────────────
// ROLETA
// Ouro aparece visualmente, mas fica explícito
// que este giro só libera Prata/Bronze.
// ─────────────────────────────────────────────
const SEGMENTS = [
  { label: "OURO", icon: "/icons/coroa-ouroo.webp", color1: "#5b21b6", color2: "#a78bfa", prize: "Prêmio Ouro", emoji: "", selectable: false },
  { label: "PRATA", icon: "/icons/medalha-prata.webp", color1: "#6d28d9", color2: "#c4b5fd", prize: "Prêmio Prata", emoji: "", selectable: true },
  { label: "BRONZE", icon: "/icons/medalha-bronze.webp", color1: "#7c3aed", color2: "#c4b5fd", prize: "Prêmio Bronze", emoji: "", selectable: true },
  { label: "OURO", icon: "/icons/coroa-ouroo.webp", color1: "#5b21b6", color2: "#a78bfa", prize: "Prêmio Ouro", emoji: "", selectable: false },
  { label: "PRATA", icon: "/icons/medalha-prata.webp", color1: "#6d28d9", color2: "#c4b5fd", prize: "Prêmio Prata", emoji: "", selectable: true },
  { label: "BRONZE", icon: "/icons/medalha-bronze.webp", color1: "#7c3aed", color2: "#c4b5fd", prize: "Prêmio Bronze", emoji: "", selectable: true },
];

const NUM_SEG = SEGMENTS.length;
const SEG_ANGLE = (Math.PI * 2) / NUM_SEG;
const BASE_ANGLE = -Math.PI / 2;

const PRIZE_TIERS = [
  {
    key: "ouro",
    color: "#FFD700",
    icon: "/icons/coroa-ouroo.webp",
    title: "PRÊMIOS OURO",
    items: [
      { icon: "/icons/ticket-ouro.webp", text: "Banca de R$15.000,00" },
      { icon: "/icons/presente-ouro.webp", text: "Acesso VIP à TODOS os meus Grupos" },
      { icon: "/icons/coroa-ouro.webp", text: "Assistir um Jogo no Estádio" },
    ],
  },
  {
    key: "prata",
    color: "#C0C0C0",
    icon: "/icons/medalha-prata.webp",
    title: "PRÊMIOS PRATA",
    items: [
      { icon: "/icons/presente-prata.webp", text: "Acesso VITALÍCIO ao meu Principal Grupo + R$50 de Banca" },
      { icon: "/icons/coroa-prata.webp", text: "Banca de R$500" },
      { icon: "/icons/ticket-prata.webp", text: "Camisa Oficial do seu Clube do Coração" },
    ],
  },
  {
    key: "bronze",
    color: "#F28C28",
    icon: "/icons/medalha-bronze.webp",
    title: "PRÊMIOS BRONZE",
    items: [
      { icon: "/icons/presente-bronze2.webp", text: "30 Dias de Acesso Gratuito ao Grupo VIP" },
      { icon: "/icons/presente-bronze2.webp", text: "7 Dias de Acesso ao VIP + Banca de R$50" },
      { icon: "/icons/coroa-bronze2.webp", text: "Banca de R$35" },
    ],
  },
];

function getCanvasSize() {
  if (typeof window === "undefined") return 320;
  if (window.innerWidth < 480) return 300;
  if (window.innerWidth < 768) return 340;
  return 400;
}

// ─────────────────────────────────────────────
// MARQUEE
// ─────────────────────────────────────────────
function Marquee() {
  const text = Array(12).fill("GIRO PREMIADO • ").join("");
  return (
    <div className="rp-marquee">
      <span className="rp-marquee__track">
        {text}
        {text}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function Hero({ onCtaClick }) {
  return (
    <section
      className="rp-hero"
      style={{
        "--hero-bg-desktop": `url('${CONFIG.HERO_BG_DESKTOP}')`,
        "--hero-bg-mobile": `url('${CONFIG.HERO_BG_MOBILE}')`,
      }}
    >
      <div className="rp-hero__glow" />
      <div className="rp-hero__content">
        <h1 className="rp-hero__title">
          ROLETA
          <br />
          PREMIADA
        </h1>

        <h2 className="rp-hero__subtitle">GIRE E GANHE!</h2>

        <p className="rp-hero__desc">
          Gire a <strong>roleta exclusiva do Luisa Mendes</strong> e descubra seu prêmio.
        </p>

        <button className="rp-btn" onClick={onCtaClick}>
          CLIQUE E RODE AGORA →
          <span className="rp-btn__sub">100% GRATUITO</span>
        </button>
        <img src="/termo/imagemtermo0.png" alt="Termo" className="rp-termo-image" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PRÊMIOS
// ─────────────────────────────────────────────
function PrizesSection() {
  return (
    <section className="rp-prizes">
      <div className="rp-prizes__inner">
        <h2 className="rp-prizes__heading">
          PRÊMIOS <span>EXCLUSIVOS</span>
        </h2>
        <p className="rp-prizes__sub">
          Confira os prêmios disponíveis na campanha
        </p>
        <div className="rp-prizes__grid">
          {PRIZE_TIERS.map((tier) => (
            <div
              key={tier.key}
              className={`rp-prize-card prize-card rp-prize-card--${tier.key}`}
              style={{
                borderColor: `${tier.color}40`,
                boxShadow: `0 0 30px ${tier.color}15`,
                background: "radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0) 70%)",
              }}
            >
              <div className="rp-prize-card__header" style={{ marginBottom: 12, textAlign: 'center' }}>
                <img className="rp-prize-card__main-img" src={tier.icon} alt="" />
                <h3 className="rp-prize-card__title" style={{ color: tier.color, marginTop: 10 }}>{tier.title}</h3>
              </div>

              <div className="rp-prize-card__list">
                {tier.items.map((item, index) => (
                  <div key={index} className="rp-prize-card__item">
                      <img className="rp-prize-card__item-img" src={item.icon} alt="" />

                      <span className="rp-prize-card__item-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Divider component (glowing purple bar)
function SectionDivider() {
  return (
    <div className="rp-section-divider" aria-hidden>
      <div className="rp-section-divider__bar" />
    </div>
  );
}

// ─────────────────────────────────────────────
// FORMULÁRIO
// ─────────────────────────────────────────────
function Field({ label, id, value, error, onChange, placeholder, type = "text" }) {
  return (
    <div className="rp-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        className={error ? "error" : ""}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span className="rp-field__error">{error}</span>}
    </div>
  );
}

function FormModal({ onClose, onSubmit, sending }) {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
  });

  const [errors, setErrors] = useState({});

  function handle(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handlePhone(value) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    let masked = digits;

    if (digits.length > 2) {
      masked = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }

    if (digits.length > 7) {
      masked = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }

    handle("telefone", masked);
  }

  function validate() {
    const nextErrors = {};

    if (!form.nome.trim()) nextErrors.nome = "Campo obrigatório";
    if (!form.sobrenome.trim()) nextErrors.sobrenome = "Campo obrigatório";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = "E-mail inválido";
    if (!form.telefone.trim() || form.telefone.replace(/\D/g, "").length < 10) nextErrors.telefone = "Telefone inválido";

    // duplicate checks against localStorage
    try {
      const subs = _loadLocalSubmissions();
      const emailNorm = _normalizeEmail(form.email);
      const phoneNorm = _normalizePhone(form.telefone);
      const nameKey = `${form.nome.trim().toLowerCase()} ${form.sobrenome.trim().toLowerCase()}`;

      const foundName = subs.find((s) => (((s.nome || "") + " " + (s.sobrenome || "")).trim().toLowerCase() === nameKey));
      const foundEmail = subs.find((s) => ( (s.email || "") === emailNorm ));
      const foundPhone = subs.find((s) => ( (s.telefone || "") === phoneNorm ));

      if (foundName) nextErrors.nome = "Usuário já cadastrado";
      if (foundEmail) nextErrors.email = "E-mail já cadastrado";
      if (foundPhone) nextErrors.telefone = "Telefone já cadastrado";
    } catch (e) {
      // ignore storage errors
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!sending && validate()) {
      onSubmit(form);
    }
  }

  return (
    <div className="rp-overlay" onClick={(e) => e.target === e.currentTarget && !sending && onClose()}>
      <div className="rp-modal">
        <h2 className="rp-modal__title">
          Liberar <span>Roleta</span>
        </h2>

        <p className="rp-modal__sub">
          Preencha seus dados para liberar o giro
        </p>

        <form className="rp-modal__form" onSubmit={handleSubmit}>
          <div className="rp-modal__row">
            <Field
              label="Nome"
              id="nome"
              value={form.nome}
              error={errors.nome}
              onChange={(v) => handle("nome", v)}
              placeholder="Seu nome"
            />

            <Field
              label="Sobrenome"
              id="sobrenome"
              value={form.sobrenome}
              error={errors.sobrenome}
              onChange={(v) => handle("sobrenome", v)}
              placeholder="Seu sobrenome"
            />
          </div>

          <Field
            label="E-mail"
            id="email"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={(v) => handle("email", v)}
            placeholder="seu@email.com"
          />

          <Field
            label="Telefone"
            id="telefone"
            type="tel"
            value={form.telefone}
            error={errors.telefone}
            onChange={handlePhone}
            placeholder="(99) 99999-9999"
          />

          <button className="rp-btn rp-modal__submit" type="submit" disabled={sending}>
            {sending ? "LIBERANDO..." : "LIBERAR A ROLETA 🎰"}
            <span className="rp-btn__sub">100% gratuito</span>
          </button>

          <button
            className="rp-modal__close"
            type="button"
            onClick={onClose}
            disabled={sending}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// HOOK DA ROLETA
// ─────────────────────────────────────────────
function useSpinWheel(canvasSize) {
  const canvasRef = useRef(null);
  const rotationRef = useRef(0);
  const animationRef = useRef(null);
  const [spinning, setSpinning] = useState(false);
  const imagesRef = useRef({});

  useEffect(() => {
    // preload segment icons
    SEGMENTS.forEach((seg) => {
      if (!seg.icon) return;
      const img = new Image();
      img.src = seg.icon;
      img.onload = () => {
        imagesRef.current[seg.label] = img;
        try {
          drawWheel(rotationRef.current);
        } catch (e) {
          // ignore
        }
      };
      img.onerror = () => {
        // ignore load errors; fallback to text will be used
      };
    });
  }, []);

  function drawWheel(rotation = rotationRef.current) {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const size = canvas.width;
    const cx = size / 2;
    const cy = size / 2;
    const r = cx - 16;

    ctx.clearRect(0, 0, size, size);

    // brilho externo
    ctx.save();
    ctx.shadowColor = "#a855f7";
    ctx.shadowBlur = 28;
    ctx.beginPath();
    ctx.arc(cx, cy, r + 8, 0, Math.PI * 2);
    ctx.strokeStyle = "#7c3aed";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.restore();

    for (let i = 0; i < NUM_SEG; i++) {
      const seg = SEGMENTS[i];
      const start = BASE_ANGLE + rotation + i * SEG_ANGLE;
      const end = start + SEG_ANGLE;

      const grad = ctx.createLinearGradient(0, 0, size, size);
      grad.addColorStop(0, seg.color1);
      grad.addColorStop(1, seg.color2);

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, start, end);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      if (!seg.selectable) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, start, end);
        ctx.closePath();
        ctx.fillStyle = "rgba(15, 23, 42, 0.30)";
        ctx.fill();
        ctx.restore();
      }

      ctx.strokeStyle = "rgba(255,255,255,0.18)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // ícone (fallback para texto se imagem não carregada)
      const midAngle = start + SEG_ANGLE / 2;
      const img = imagesRef.current[seg.label];
      const imgSize = size < 340 ? 18 : 24;
      const imgX = cx + Math.cos(midAngle) * (r - 30);
      const imgY = cy + Math.sin(midAngle) * (r - 30);

      if (img && img.complete) {
        ctx.save();
        ctx.drawImage(img, imgX - imgSize / 2, imgY - imgSize / 2, imgSize, imgSize);
        ctx.restore();
      } else {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(midAngle);
        ctx.textAlign = "right";
        ctx.fillStyle = "#ffffff";
        ctx.font = `700 ${size < 340 ? 12 : 14}px Arial`;
        ctx.shadowColor = "rgba(0,0,0,0.45)";
        ctx.shadowBlur = 4;
        ctx.fillText(seg.label, r - 18, -2);
        ctx.restore();
      }
    }

    // centro
    const centerGrad = ctx.createRadialGradient(cx, cy, 4, cx, cy, 46);
    centerGrad.addColorStop(0, "#e9d5ff");
    centerGrad.addColorStop(1, "#7c3aed");

    ctx.beginPath();
    ctx.arc(cx, cy, 46, 0, Math.PI * 2);
    ctx.fillStyle = centerGrad;
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "700 16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("GIRE", cx, cy);
  }

  useEffect(() => {
    drawWheel(rotationRef.current);
  }, [canvasSize]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  function pickWinner() {
    const targetLabel = Math.random() < 0.5 ? "PRATA" : "BRONZE";

    const pool = SEGMENTS.map((segment, index) => ({ segment, index })).filter(
      ({ segment }) => segment.selectable && segment.label === targetLabel
    );

    return pool[Math.floor(Math.random() * pool.length)];
  }

  function spin(winnerIndex, onDone) {
    if (spinning) return;

    setSpinning(true);

    const currentRotation = rotationRef.current;
    const targetCenter = winnerIndex * SEG_ANGLE + SEG_ANGLE / 2;
    let delta = (-targetCenter - (currentRotation % (Math.PI * 2)));

    while (delta <= 0) {
      delta += Math.PI * 2;
    }

    delta += Math.PI * 2 * 8;

    const duration = 5000;
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      const nextRotation = currentRotation + delta * eased;

      rotationRef.current = nextRotation;
      drawWheel(nextRotation);

      if (t < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        rotationRef.current = (currentRotation + delta) % (Math.PI * 2);
        drawWheel(rotationRef.current);
        setSpinning(false);
        onDone?.();
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }

  return {
    canvasRef,
    spinning,
    pickWinner,
    spin,
  };
}

// ─────────────────────────────────────────────
// GOOGLE SHEETS
// ─────────────────────────────────────────────
async function sendToGoogleSheets(userData, prize) {
  try {
    if (!CONFIG.GOOGLE_SCRIPT_URL || CONFIG.GOOGLE_SCRIPT_URL.includes("SEU-ID-AQUI")) {
      console.warn("GOOGLE_SCRIPT_URL não configurada.");
      return;
    }

    // Build params (normalize email/phone)
    const params = {
      nome: (userData.nome || "").trim(),
      sobrenome: (userData.sobrenome || "").trim(),
      email: _normalizeEmail(userData.email),
      telefone: _normalizePhone(userData.telefone),
      premio: (prize && prize.prize) ? prize.prize : (prize || ""),
      dataHora: new Date().toLocaleString("pt-BR"),
      origem: "roletapremiada",
      sheetName: "ROLETAPREMIADA",
    };

    // Prevent quick duplicate sends: check last-sent key
    try {
      const key = `${params.email}|${params.telefone}|${params.premio}`;
      const raw = localStorage.getItem("rp_last_sent");
      if (raw) {
        const prev = JSON.parse(raw);
        if (prev && prev.key === key && Date.now() - prev.ts < 15000) {
          console.log("sendToGoogleSheets: skipped duplicate (recent)");
          return;
        }
      }
    } catch (e) {
      // ignore storage errors
    }

    // Also avoid sending if already in local submissions history
    try {
      const subs = _loadLocalSubmissions();
      const exists = subs.find(s => ( (s.email || "") === params.email && (s.telefone || "") === params.telefone && (s.premio || "") === params.premio ));
      if (exists) {
        console.log("sendToGoogleSheets: skipped duplicate (already saved locally)");
        return;
      }
    } catch (e) {
      // ignore
    }

    // Submit via hidden iframe form to avoid CORS/preflight and ensure application/x-www-form-urlencoded
    const iframeName = `rp_post_target_${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = CONFIG.GOOGLE_SCRIPT_URL;
    form.target = iframeName;

    Object.keys(params).forEach((k) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = k;
      input.value = params[k];
      form.appendChild(input);
    });

    form.style.display = "none";
    document.body.appendChild(form);
    form.submit();

    // Mark as recently sent and save locally to avoid duplicates
    try {
      const key = `${params.email}|${params.telefone}|${params.premio}`;
      localStorage.setItem("rp_last_sent", JSON.stringify({ key, ts: Date.now() }));
      _saveLocalSubmission({
        nome: params.nome,
        sobrenome: params.sobrenome,
        email: params.email,
        telefone: params.telefone,
        premio: params.premio,
        dataHora: new Date().toISOString(),
      });
    } catch (e) {
      // ignore storage errors
    }

    // cleanup after a short delay
    setTimeout(() => {
      try { document.body.removeChild(form); } catch (e) {}
      try { document.body.removeChild(iframe); } catch (e) {}
    }, 4000);
  } catch (error) {
    console.error("Erro ao enviar para Google Sheets:", error);
  }
}

// ─────────────────────────────────────────────
// LOCAL STORAGE HELPERS (prevent duplicate registrations)
// ─────────────────────────────────────────────
function _loadLocalSubmissions() {
  try {
    const raw = localStorage.getItem("rp_submissions");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function _saveLocalSubmission(entry) {
  try {
    const arr = _loadLocalSubmissions();
    arr.push(entry);
    localStorage.setItem("rp_submissions", JSON.stringify(arr));
  } catch (e) {
    // ignore
  }
}

function _normalizeEmail(email) {
  return (email || "").trim().toLowerCase();
}

function _normalizePhone(phone) {
  return (phone || "").replace(/\D/g, "");
}


// ─────────────────────────────────────────────
// BLOCO DA ROLETA
// ─────────────────────────────────────────────
function WheelSection({ sectionRef }) {
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [canvasSize, setCanvasSize] = useState(getCanvasSize());

  const intervalRef = useRef(null);

  const { canvasRef, spinning, pickWinner, spin } = useSpinWheel(canvasSize);

  useEffect(() => {
    function onResize() {
      setCanvasSize(getCanvasSize());
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function startRedirectCountdown() {
    let secs = 3;
    setCountdown(secs);

    intervalRef.current = setInterval(() => {
      secs -= 1;

      if (secs <= 0) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;

        if (CONFIG.REDIRECT_URL && !CONFIG.REDIRECT_URL.includes("SEU-LINK-AQUI")) {
          window.location.href = CONFIG.REDIRECT_URL;
        }
      } else {
        setCountdown(secs);
      }
    }, 1000);
  }

  async function handleFormSubmit(formData) {
    if (spinning) return;

    // extra duplicate check server-side (localStorage) before proceeding
    try {
      const subs = _loadLocalSubmissions();
      const emailNorm = _normalizeEmail(formData.email);
      const phoneNorm = _normalizePhone(formData.telefone);
      const nameKey = `${formData.nome.trim().toLowerCase()} ${formData.sobrenome.trim().toLowerCase()}`;

      const foundName = subs.find((s) => (((s.nome || "") + " " + (s.sobrenome || "")).trim().toLowerCase() === nameKey));
      const foundEmail = subs.find((s) => ( (s.email || "") === emailNorm ));
      const foundPhone = subs.find((s) => ( (s.telefone || "") === phoneNorm ));

      if (foundName || foundEmail || foundPhone) {
        // keep modal open and notify user
        setSending(false);
        setShowModal(true);
        const msgs = [];
        if (foundName) msgs.push("Usuário já cadastrado");
        if (foundEmail) msgs.push("E-mail já cadastrado");
        if (foundPhone) msgs.push("Telefone já cadastrado");
        window.alert(msgs.join(" - "));
        return;
      }
    } catch (e) {
      // ignore storage errors and proceed
    }

    setSending(true);

    const winner = pickWinner();

    await new Promise((resolve) => setTimeout(resolve, 500));

    setSending(false);
    setShowModal(false);
    setResult(null);
    setCountdown(null);

    sendToGoogleSheets(formData, winner.segment);

    // save locally to prevent future duplicate registrations
    try {
      _saveLocalSubmission({
        nome: formData.nome.trim(),
        sobrenome: formData.sobrenome.trim(),
        email: _normalizeEmail(formData.email),
        telefone: _normalizePhone(formData.telefone),
        premio: winner.segment.prize,
        dataHora: new Date().toISOString(),
      });
    } catch (e) {
      // ignore
    }

    spin(winner.index, () => {
      setResult(winner.segment);
      startRedirectCountdown();
    });
  }

    return (
      <section className="rp-wheel-section" ref={sectionRef}>
        <h2 className="rp-wheel-section__heading">GIRE A ROLETA</h2>
        <p className="rp-wheel-section__sub">Preencha o formulário e descubra seu prêmio</p>

      

        <div className="rp-wheel-wrap">
          <div className="rp-wheel-pointer" />
          <canvas
            ref={canvasRef}
            width={canvasSize}
            height={canvasSize}
            className="rp-wheel-canvas"
          />
        </div>

        {result && (
          <div className="rp-result">
            <div className="rp-result__emoji">{result.emoji}</div>
            <p className="rp-result__congrats">PARABÉNS! 🎉</p>
            <p className="rp-result__prize">
              Você ganhou: <span>{result.prize}</span>
            </p>

            {countdown !== null && (
              <p className="rp-result__redirect">
                Redirecionando em <strong>{countdown}s</strong>...
              </p>
            )}
          </div>
        )}

        <button
          className="rp-btn"
          onClick={() => !spinning && !result && setShowModal(true)}
          disabled={spinning || !!result}
        >
          {spinning ? "GIRANDO..." : result ? "GIRO FINALIZADO" : "CLIQUE E RODE AGORA →"}
          <span className="rp-btn__sub">100% GRATUITO</span>
        </button>

        {showModal && (
          <FormModal
            onClose={() => !sending && setShowModal(false)}
            onSubmit={handleFormSubmit}
            sending={sending}
          />
        )}
      
        {/* Legal section inserted below the wheel */}
        <div className="rp-legal-root">
          <div className="rp-legal-divider" aria-hidden />

          <div className="rp-legal-container">
            <h4 className="rp-legal__title">AVISO LEGAL IMPORTANTE:</h4>
            <ul className="rp-legal__list">
              <li>- Apostas esportivas envolvem riscos financeiros. Nunca aposte mais do que pode perder.</li>
              <li>- Resultados passados não garantem lucros futuros. Aposte com responsabilidade.</li>
              <li>- Este site é destinado apenas para maiores de 18 anos.</li>
              <li>- Jogue com responsabilidade. Se você tem problemas com jogos, procure ajuda.</li>
              <li>- Ministério da Fazenda adverte: Aposta não é investimento</li>
            </ul>
          </div>

          <div className="rp-legal-copyright">© 2026 Luisa Mendes. Todos os direitos reservados.</div>
        </div>
      </section>
    );
  }

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function RoletapremiadaPage() {
  const wheelSectionRef = useRef(null);

  function scrollToWheel() {
    wheelSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="rp-root">
      <Marquee />
      <Hero onCtaClick={scrollToWheel} />
      <SectionDivider />
      <PrizesSection />
      <WheelSection sectionRef={wheelSectionRef} />
    </div>
  );
}


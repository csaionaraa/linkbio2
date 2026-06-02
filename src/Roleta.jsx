import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Roleta.css';

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercopy'; // Substitua com seu ID
const PRIZES = [
  { name: 'Ouro', color: '#FFD700', percentage: 0 },
  { name: 'Prata', color: '#C0C0C0', percentage: 50 },
  { name: 'Bronze', color: '#CD7F32', percentage: 50 }
];

export default function Roleta() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ nome: '', sobrenome: '', email: '', telefone: '' });
  const [isSpinning, setIsSpinning] = useState(false);
  const [prizeWon, setPrizeWon] = useState(null);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const wheelRef = useRef(null);
  const navigate = useNavigate();

  // Verificar se o email já foi cadastrado (localStorage simulando verificação)
  const isEmailRegistered = (email) => {
    const registeredEmails = JSON.parse(localStorage.getItem('registeredEmails') || '[]');
    return registeredEmails.includes(email);
  };

  // Salvar email como registrado
  const registerEmail = (email) => {
    const registeredEmails = JSON.parse(localStorage.getItem('registeredEmails') || '[]');
    if (!registeredEmails.includes(email)) {
      registeredEmails.push(email);
      localStorage.setItem('registeredEmails', JSON.stringify(registeredEmails));
    }
  };

  // Enviar dados para Google Sheets
  const sendToGoogleSheets = async (formDataToSend, prize) => {
    try {
      const data = {
        nome: formDataToSend.nome,
        sobrenome: formDataToSend.sobrenome,
        email: formDataToSend.email,
        telefone: formDataToSend.telefone,
        premio: prize,
        data: new Date().toLocaleString('pt-BR')
      };

      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'no-cors'
      });
    } catch (error) {
      console.error('Erro ao enviar para Google Sheets:', error);
    }
  };

  // Selecionar prêmio com probabilidade
  const selectPrize = () => {
    const random = Math.random() * 100;
    if (random < 50) {
      return PRIZES[1]; // Prata
    } else {
      return PRIZES[2]; // Bronze
    }
  };

  // Girar a roleta
  const spinWheel = () => {
    if (isSpinning) return;

    const prize = selectPrize();
    const prizeIndex = PRIZES.indexOf(prize);
    const segmentAngle = 360 / PRIZES.length;
    const randomSpin = Math.random() * 360;
    const totalRotation = 360 * 5 + (prizeIndex * segmentAngle) + randomSpin;

    setIsSpinning(true);
    setWheelRotation(totalRotation);

    // Esperar a animação terminar
    setTimeout(() => {
      setPrizeWon(prize);
      setSubmitted(true);

      // Enviar dados para Google Sheets
      sendToGoogleSheets(formData, prize.name);

      // Esperar 3 segundos e redirecionar
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 4000);
  };

  // Manipular envio do formulário
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.sobrenome || !formData.email || !formData.telefone) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    if (isEmailRegistered(formData.email)) {
      alert('Este email já foi registrado! Cada pessoa pode cadastrar apenas uma vez.');
      return;
    }

    // Registrar email
    registerEmail(formData.email);

    // Fechar modal e girar
    setShowModal(false);
    setTimeout(() => {
      spinWheel();
    }, 300);
  };

  // Manipular mudança no formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Abrir modal
  const openModal = () => {
    setShowModal(true);
  };

  // Fechar modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="roleta-container">
      {/* SEÇÃO HERO */}
      <section className="roleta-hero">
        <div className="hero-content">
          <h1 className="hero-title">ROLETA PREMIADA GIRE E GANHE!</h1>
          <p className="hero-subtitle">
            Gire a roleta exclusiva do Japa e tenha a oportunidade de ganhar prêmios incríveis em uma única tentativa!
          </p>
          <button className="hero-btn" onClick={openModal}>
            <span className="btn-text">CLIQUE E RODE AGORA →</span>
            <span className="btn-subtitle">100% GRATUITO</span>
          </button>
        </div>
      </section>

      {/* CONTAINER COM TEXTO EM LOOP */}
      <section className="scrolling-container">
        <div className="scrolling-text">
          <span>GIRO PREMIADO • </span>
          <span>GIRO PREMIADO • </span>
          <span>GIRO PREMIADO • </span>
          <span>GIRO PREMIADO • </span>
          <span>GIRO PREMIADO • </span>
        </div>
      </section>

      {/* SEÇÃO PRÊMIOS EXCLUSIVOS */}
      <section className="premios-section">
        <h2 className="section-title">PRÊMIOS EXCLUSIVOS</h2>
        <p className="section-subtitle">
          Confira os incríveis prêmios que você pode ganhar girando a roleta
        </p>
        <div className="premios-grid">
          <div className="premio-card">
            <div className="premio-icon">🏅</div>
            <h3>Prêmios Variados</h3>
            <p>Ganhe prêmios exclusivos</p>
          </div>
          <div className="premio-card">
            <div className="premio-icon">💎</div>
            <h3>Créditos Bônus</h3>
            <p>Créditos para usar na plataforma</p>
          </div>
          <div className="premio-card">
            <div className="premio-icon">🎁</div>
            <h3>Surpresas Especiais</h3>
            <p>Surpresas incríveis aguardam você</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO ROLETA */}
      <section className="wheel-section">
        <h2 className="section-title">GIRE A ROLETA</h2>
        <p className="section-subtitle">Clique no botão e descubra seu prêmio!</p>

        <div className="wheel-container">
          <div className="wheel" ref={wheelRef} style={{ transform: `rotate(${wheelRotation}deg)` }}>
            {PRIZES.map((prize, index) => {
              const angle = (360 / PRIZES.length) * index;
              return (
                <div
                  key={prize.name}
                  className="wheel-segment"
                  style={{
                    background: prize.color,
                    transform: `rotate(${angle}deg)`,
                  }}
                >
                  <span className="wheel-text">{prize.name}</span>
                </div>
              );
            })}
          </div>
          <div className="wheel-pointer"></div>
        </div>

        {!submitted && (
          <button className="spin-btn" onClick={openModal} disabled={isSpinning}>
            {isSpinning ? 'GIRANDO...' : 'CLIQUE E RODE AGORA'}
          </button>
        )}

        {submitted && prizeWon && (
          <div className="prize-result">
            <h3>Parabéns! 🎉</h3>
            <p>Você ganhou: <strong>{prizeWon.name}</strong></p>
            <p className="redirect-msg">Redirecionando em breve...</p>
          </div>
        )}
      </section>

      {/* MODAL DO FORMULÁRIO */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <h2>Libere sua Roleta</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="sobrenome"
                  placeholder="Sobrenome"
                  value={formData.sobrenome}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="form-btn" disabled={isSpinning}>
                LIBERAR ROLETA
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

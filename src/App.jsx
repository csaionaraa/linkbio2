import { useState, useEffect } from 'react'
import './App.css'

function AgeGate() {
  // Sempre mostra o pop-up ao carregar/recarregar (sem localStorage)
  // 'ask' | 'blocked' | 'done'
  const [status, setStatus] = useState('ask')

  useEffect(() => {
    const lock = status === 'ask' || status === 'blocked'
    document.documentElement.classList.toggle('mg-age-lock', lock)
    document.body.classList.toggle('mg-age-lock', lock)
    return () => {
      document.documentElement.classList.remove('mg-age-lock')
      document.body.classList.remove('mg-age-lock')
    }
  }, [status])

  // Fecha e libera o acesso, sem gravar nada
  const confirmar = () => setStatus('done')
  // Mostra a mensagem de bloqueio, sem gravar nada
  const negar = () => setStatus('blocked')

  if (status === 'done') return null

  if (status === 'blocked') {
    return (
      <div id="mg-age-gate" className="mg-blocked">
        <div className="mg-age-box">
          <h2 className="mg-age-title">Acesso não permitido</h2>
          <p className="mg-age-text">Este conteúdo é destinado apenas a maiores de 18 anos.</p>
        </div>
      </div>
    )
  }

  return (
    <div id="mg-age-gate">
      <div className="mg-age-box">
        <h2 className="mg-age-title">Verificação de Idade</h2>
        <p className="mg-age-text">Você tem 18 anos ou mais?</p>
        <div className="mg-age-actions">
          <button type="button" className="mg-age-btn mg-age-btn--yes" onClick={confirmar}>
            Sim, tenho 18+
          </button>
          <button type="button" className="mg-age-btn mg-age-btn--no" onClick={negar}>
            Não
          </button>
        </div>
        <span className="mg-age-note">
          Ao entrar, você confirma ter idade legal para acessar este conteúdo.
        </span>
      </div>
    </div>
  )
}

function App() {

  const buttons = [
    {
      id: 1,
      image: "/buttons/free.png",
      link: "https://t.me/+HAjvcswtZ4E3YWNh"
    },
    {
      id: 2,
      image: "/buttons/vip.png",
      link: "https://mais.red/run/LuisaComboVIPIG",
      className: "vip-button"
    },
    {
      id: 3,
      image: "/buttons/combo.png",
      link: "https://mais.red/run/LuisaComboEspeciaisIG"
    },
    {
      id: 4,
      image: "/buttons/WPP.png",
      link: "https://chat.whatsapp.com/HoOsROpZt58FbTPnERP5tR"
    },
  ]

  return (
    <div className="container">

      <AgeGate />

      <main className="content">

        {/* FOTO TOPO */}
        <img
          src="/buttons/topo_.png"
          alt="Luisa"
          className="top-image"
        />

        {/* BOTÕES */}
        <div className="buttons">

          {buttons.map((button) => (
            <a
              key={button.id}
              href={button.link}
              target="_blank"
              rel="noreferrer"
              className={`button-link ${button.className || ''}`}
            >
              <img
                src={button.image}
                alt=""
                className="button-image"
              />
            </a>
          ))}

        </div>
        {/* COPYRIGHT */}
        <p className="copyright">
          © Luisa Mendes | Todos os direitos reservados.
        </p>

        {/* RESPONSABILIDADE */}
        <img
          src="/botao/termogenerico.png"
          alt="Jogue com responsabilidade"
          className="responsible-image"
        />

      </main>

    </div>
  )
}

export default App
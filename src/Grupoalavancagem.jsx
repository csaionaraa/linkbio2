import { useState } from "react";
import "./Grupobingo.css";

const TELEGRAM_LINK = "https://telegram.me/+pMilA7WpirVjYmYx";
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwUzakv-U_ZiM5kpHyhSkzHutChgkzf0gDCfbai_yiZavQcuGThAiKsK1yNYPhCq_rY/exec";

export default function Grupoalavancagem() {
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState("form");
  const [formData, setFormData] = useState({ nome: "", whatsapp: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const resetPopup = () => {
    setShowPopup(false);
    setStep("form");
    setFormData({ nome: "", whatsapp: "" });
    setFeedback("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nome = formData.nome.trim();
    const whatsapp = formData.whatsapp.trim();

    if (!nome || !whatsapp) {
      setFeedback("Preencha seu nome e WhatsApp para liberar o acesso.");
      return;
    }

    setIsSubmitting(true);
    setFeedback("");

    try {
      const payload = new URLSearchParams();
      payload.append("nome", nome);
      payload.append("whatsapp", whatsapp);
      payload.append("origem", "grupo_alavancagem");
      payload.append("timestamp", new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      setStep("success");
      setFeedback("Seu acesso foi liberado.");
    } catch (error) {
      setFeedback("Não foi possível enviar os dados. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="lp-root"
      style={{
        "--bg-desktop": `url('/botao/BG_2.png')`,
        "--bg-mobile": `url('/botao/BG_1.png')`,
      }}
    >
      <div className="lp-content">
        <div className="lp-header">
          <img src="/logo/logo.png" alt="Logo" className="lp-top-logo" />
          <h3 className="lp-title">Parabéns ganhou acesso ao grupo de Alavancagem</h3>
        </div>

        <div className="lp-buttons">
          <div className="lp-btn" aria-label="Botão 1">
            <img src="/botao/Comp_5.png" alt="Grupo de Alavancagem" />
          </div>

          <button type="button" className="lp-resgate-btn" onClick={() => setShowPopup(true)}>
            CLIQUE AQUI PARA RESGATAR
          </button>
        </div>

        <div className="lp-term">
          <img src="/botao/termoverde.png" alt="Termos e Condições" />
        </div>
      </div>

      {showPopup && (
        <div className="lp-popup-overlay" role="dialog" aria-modal="true" onClick={resetPopup}>
          <div className="lp-popup" onClick={(event) => event.stopPropagation()}>
            {step === "form" ? (
              <>
                <p className="lp-popup-title">Preencha seus dados para liberar o acesso</p>
                <p className="lp-popup-subtitle">
                  Seu nome e WhatsApp serão enviados diretamente para a planilha de controle.
                </p>

                <form className="lp-form" onSubmit={handleSubmit}>
                  <label className="lp-field">
                    <span>Nome</span>
                    <input
                      className="lp-input"
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      autoComplete="name"
                    />
                  </label>

                  <label className="lp-field">
                    <span>WhatsApp</span>
                    <input
                      className="lp-input"
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      inputMode="tel"
                      autoComplete="tel"
                    />
                  </label>

                  <button type="submit" className="lp-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? "ENVIANDO..." : "LIBERAR ACESSO"}
                  </button>
                </form>

                {feedback ? <p className="lp-feedback">{feedback}</p> : null}

                <button type="button" className="lp-popup-close" onClick={resetPopup}>
                  Fechar
                </button>
              </>
            ) : (
              <>
                <p className="lp-popup-title">Seu acesso foi liberado!</p>
                <p className="lp-popup-subtitle">
                  Clique abaixo para entrar no grupo do Telegram.
                </p>
                <a className="lp-popup-action" href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                  Entrar no grupo
                </a>
                <button type="button" className="lp-popup-close" onClick={resetPopup}>
                  Fechar
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

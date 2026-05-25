import './Acesso.css';

function Acesso() {
    return (
        <div className="acesso-page">

      <div className="faixa-header">
        <h1 className="faixa-titulo">90% DAS VAGAS ESGOTADAS!</h1>
      </div>

      <div className="acesso-container">
        <img
        src= "/imgs/acesso-.png"
        className="acesso-background"
         />
        <div className="acesso-content">
          {/* LADO ESQUERDO - LOGO E INFORMAÇÕES */}
          <div className="acesso-left">
            <img 
            src="/logo/logo.png" 
              alt="Logo" 
              className="acesso-logo"
            />

            <div className="acesso-info">
              <h2 className="acesso-main-titulo">
                Se você quer consistência, aqui está o <span className="acesso-highlight">primeiro passo.</span>
              </h2>

              <button className="acesso-botao">ACESSO LIBERADO</button>

              <p className="acesso-subtitulo">
                O grupo gratuito da Luisa Mendes mostra na prática como funciona uma mente profissional no mercado.
              </p>
            </div>
          </div>

          {/* LADO DIREITO - ESPAÇO PARA IMAGEM */}
          <div className="acesso-right">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acesso
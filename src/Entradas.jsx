
import './Entradas.css'

function Entradas() {


  return (
    <div className="container">
      <div className="overlay"></div>

      <main className="content">
        <div className="grupo-container">
          <h1 className="grupo-titulo">Parabéns!</h1>

          <p className="grupo-subtitulo">
            Você acabou de ganhar acesso gratuito!
          </p>

          <button
            class= "trackfather"
            className="grupo-botao"
            data-tf-track="click"
            onClick={() => {
              window.location.href =
                'https://trackfather.com/trackfather.min.js?workspace_id=4bc8119a-4fd3-498e-b4c1-c652ba25d231'
          }}
          >CLIQUE AQUI PARA GARANTIR SEU ACESSO
          </button>

          <img
            src="/buttons/termos.png"
            alt="Jogue com responsabilidade"
            className="grupo-termo"
          />
        </div>       
      </main>
    </div>
  )
}

export default Entradas
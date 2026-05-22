import './Grupo.css'

function Grupo() {
  return (
    <div className="container">
      <div className="overlay"></div>

      <main className="content">
        <div className="grupo-container">
          <h1 className="grupo-titulo">Parabéns!</h1>
          <p className="grupo-subtitulo">Você acabou de ganhar acesso gratuito!</p>
          
          <button className="grupo-botao" href="#" >CLIQUE AQUI PARA GARANTIR SEU ACESSO</button>
        <img
          src="/buttons/termo.png"
          alt="Jogue com responsabilidade"
          className="grupo-termo"
        />
        </div>
      </main>
    </div>
  )
}

export default Grupo
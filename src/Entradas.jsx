import { useEffect } from 'react';
import './Entradas.css'

function Entradas() {
  useEffect(() => {
    window.TrackFatherConfig = {
      workspace_id: '4bc8119a-4fd3-498e-b4c1-c652ba25d231',
      lead_type: 'channel'
    };

    const script = document.createElement('script');
    script.src = 'https://trackfather.com/trackfather.min.js?workspace_id=4bc8119a-4fd3-498e-b4c1-c652ba25d231';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <div className="overlay"></div>

      <main className="content">
        <div className="grupo-container">
          <h1 className="grupo-titulo">Parabéns!</h1>
          <p className="grupo-subtitulo">Você acabou de ganhar acesso gratuito!</p>
          
          <button className="grupo-botao" href="#" >CLIQUE AQUI PARA GARANTIR SEU ACESSO</button>
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
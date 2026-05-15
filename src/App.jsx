import './App.css'

function App() {

  const buttons = [
    {
      id: 1,
      image: "/buttons/grupofree.png",
      link: "https://t.me/+LznpxBiUUGhkYWRh"
    },
    {
      id: 2,
      image: "/buttons/grupovip.png",
      link: "https://mais.red/run/LuisaVipLP",
      className: "vip-button"
    },
    {
      id: 3,
      image: "/buttons/superodds.png",
      link: "https://t.me/+iLeaWkINLhxjZjAx"
    },
    {
      id: 4,
      image: "/buttons/nbafree.png",
      link: "https://t.me/+kcU-0wV41cNlYzJh"
    },
    {
      id: 5,
      image: "/buttons/alavancagem.png",
      link: "https://mais.red/run/LuisaInstaAlavancagem"
    },
    {
      id: 6,
      image: "/buttons/placares.png",
      link: "https://mais.red/run/LuisaBioInstaPlacares"
    },
    {
      id: 7,
      image: "/buttons/superodds-bingo.png",
      link: "https://mais.red/run/LuisaBioSuper100"
    },
    {
      id: 8,
      image: "/buttons/news.png",
      link: "https://chat.whatsapp.com/HoOsROpZt58FbTPnERP5tR"
    },
  ]

  return (
    <div className="container">

      <div className="overlay"></div>

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
          src="/buttons/termo.png"
          alt="Jogue com responsabilidade"
          className="responsible-image"
        />

      </main>

    </div>
  )
}

export default App
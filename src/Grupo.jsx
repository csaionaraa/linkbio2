import "./Grupo.css";

export default function Grupo() {
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
					<h3 className="lp-title">Faça parte da minha lista de espera abaixo:</h3>
				</div>

				<div className="lp-buttons">
					<a className="lp-btn" href=" https://t.me/+HZ6p2AuuIoxjOGUx" aria-label="Botão 1">
						<img src="/botao/Comp_3.png" alt="Comp 2" />
					</a>
				</div>

				<div className="lp-term">
					<img src="/botao/termoverde.png" alt="Termos e Condições" />
				</div>
			</div>
		</div>
	);
}

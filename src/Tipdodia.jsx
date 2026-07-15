import "./Tipdodia.css";

export default function Tipdodia() {
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
					<h3 className="lp-title">Pegue a oportunidade do dia no link abaixo:</h3>
				</div>

				<div className="lp-buttons">
					<a className="lp-btn" href="https://hi.switchy.io/TIPINSTALM01" aria-label="Botão 1">
						<img src="/botao/Comp_2.png" alt="Comp 2" />
					</a>

					<a className="lp-btn" href="https://t.me/+HZ6p2AuuIoxjOGUx" aria-label="Botão 2">
						<img src="/botao/Comp_1.png" alt="Comp 1" />
					</a>
				</div>

				<div className="lp-term">
					<img src="/botao/termogenerico.png" alt="Termos e Condições" />
				</div>
			</div>
		</div>
	);
}

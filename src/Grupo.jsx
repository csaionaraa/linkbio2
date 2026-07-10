import { useState } from "react";
import "./Grupo.css";

export default function Grupo() {
	const [showPopup, setShowPopup] = useState(false);

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
					<h3 className="lp-title">Faça parte do meu grupo gratuito no link abaixo:</h3>
				</div>

				<div className="lp-buttons">
					<div className="lp-btn" aria-label="Botão 1">
						<img src="/botao/Comp_3.png" alt="Comp 2" />
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
				<div className="lp-popup-overlay" role="dialog" aria-modal="true" onClick={() => setShowPopup(false)}>
					<div className="lp-popup" onClick={(event) => event.stopPropagation()}>
						<p className="lp-popup-title">Seu resgate está pronto!</p>
						<a
							className="lp-popup-action"
							href="https://t.me/+HZ6p2AuuIoxjOGUx"
							target="_blank"
							rel="noreferrer"
						>
							Resgate aqui
						</a>
						<button type="button" className="lp-popup-close" onClick={() => setShowPopup(false)}>
							Fechar
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

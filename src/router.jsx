import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Entradas from "./Entradas";
import Acesso from "./Acesso";
import Gratuito from "./Gratuito";
import Roleta from "./Roleta";
import Roletapremiada from "./Roletapremiada";
import Premio from "./Premio";
import Premiacao from "./Premiacao";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/acesso" element={<Acesso />} />
        <Route path="/gratuito" element={<Gratuito />} />
        <Route path="/roleta" element={<Roleta />} />
        <Route path="/roletapremiada" element={<Roletapremiada />} />
        <Route path="/premiacao" element={<Premiacao />} />
        <Route path="/premio" element={<Premio />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
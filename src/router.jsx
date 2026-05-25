import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Entradas from "./Entradas";
import Acessoliberado from "./acessoliberado";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/acessoliberado" element={<Acessoliberado />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
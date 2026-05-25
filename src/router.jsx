import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Entradas from "./Entradas";
import Acesso from "./Acesso";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/acesso" element={<Acesso />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App"; // home carregada de imediato (sem "piscar")

// Demais páginas carregam só quando acessadas (code-splitting)
const Entradas = lazy(() => import("./Entradas"));
const Acesso = lazy(() => import("./Acesso"));
const Gratuito = lazy(() => import("./Gratuito"));
const Roleta = lazy(() => import("./Roleta"));
const Roletapremiada = lazy(() => import("./Roletapremiada"));
const Premiacao = lazy(() => import("./Premiacao"));
const Premios = lazy(() => import("./Premios"));
const Tipdodia = lazy(() => import("./Tipdodia"));
const Grupo = lazy(() => import("./Grupo"));
const Grupobingo = lazy(() => import("./Grupobingo"));
const Grupoalavancagem = lazy(() => import("./Grupoalavancagem"));

export function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/entradas" element={<Entradas />} />
          <Route path="/acesso" element={<Acesso />} />
          <Route path="/gratuito" element={<Gratuito />} />
          <Route path="/roleta" element={<Roleta />} />
          <Route path="/roletapremiada" element={<Roletapremiada />} />
          <Route path="/premiacao" element={<Premiacao />} />
          <Route path="/premios" element={<Premios />} />
          <Route path="/tipdodia" element={<Tipdodia />} />
          <Route path="/grupo" element={<Grupo />} />
          <Route path="/grupobingo" element={<Grupobingo />} />
          <Route path="/grupoalavancagem" element={<Grupoalavancagem />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

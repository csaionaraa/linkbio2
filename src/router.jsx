import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Entradas from "./Entradas";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/entradas" element={<Entradas/>} />
      </Routes>
    </BrowserRouter>
  );
}
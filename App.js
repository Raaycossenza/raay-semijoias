import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PainelAdmin from "./pages/PainelAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial só com um texto ou redirecionamento futuro */}
        <Route path="/" element={<div className="text-white p-6">Bem-vinda! Acesse <a href="/admin" className="underline text-blue-400">/admin</a> para entrar no painel.</div>} />
        
        {/* Painel de administração */}
        <Route path="/admin" element={<PainelAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

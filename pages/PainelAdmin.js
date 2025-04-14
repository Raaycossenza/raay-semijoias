import { useState } from "react";

export default function PainelAdmin() {
  const [catalogos, setCatalogos] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    taxaAdicional: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoCatalogo = {
      id: Date.now().toString(),
      nome: form.nome,
      descricao: form.descricao,
      taxaAdicional: parseFloat(form.taxaAdicional),
      produtos: []
    };
    setCatalogos([...catalogos, novoCatalogo]);
    setForm({ nome: "", descricao: "", taxaAdicional: "" });
    alert("Catálogo criado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl text-pink-400 font-bold mb-4">
          Criar novo catálogo
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-zinc-800 p-4 rounded shadow"
        >
          <input
            type="text"
            name="nome"
            placeholder="Nome do catálogo"
            value={form.nome}
            onChange={handleChange}
            className="input"
          />
          <textarea
            name="descricao"
            placeholder="Descrição do catálogo"
            value={form.descricao}
            onChange={handleChange}
            className="input"
          />
          <input
            type="number"
            name="taxaAdicional"
            placeholder="Taxa adicional (R$)"
            value={form.taxaAdicional}
            onChange={handleChange}
            className="input"
            step="0.01"
          />
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-500 transition py-2 px-4 rounded"
          >
            Criar catálogo
          </button>
        </form>

        {catalogos.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg text-green-400 font-semibold mb-2">
              Catálogos criados:
            </h2>
            <ul className="space-y-2 text-sm">
              {catalogos.map((cat) => (
                <li
                  key={cat.id}
                  className="border border-pink-500 p-3 rounded bg-zinc-800"
                >
                  <strong>{cat.nome}</strong> — {cat.descricao}  
                  <br />
                  Taxa: R$ {cat.taxaAdicional.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({ nome: "", quantidade: "", preco: "", peso: "" });

  function adicionarProduto() {
    if (form.nome && form.quantidade && form.preco && form.peso) {
      setProdutos([...produtos, form]);
      setForm({ nome: "", quantidade: "", preco: "", peso: "" });
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <img src="/logo.png" alt="Logo" className="w-40 mb-4" />
      <h1 className="text-2xl text-roseGold mb-4">Cadastrar Mercadoria</h1>

      <div className="w-full max-w-md space-y-3">
        <input type="text" placeholder="Nome" value={form.nome}
          onChange={e => setForm({ ...form, nome: e.target.value })}
          className="w-full p-2 rounded bg-dark border border-roseGold text-white" />

        <input type="number" placeholder="Quantidade" value={form.quantidade}
          onChange={e => setForm({ ...form, quantidade: e.target.value })}
          className="w-full p-2 rounded bg-dark border border-roseGold text-white" />

        <input type="text" placeholder="Preço" value={form.preco}
          onChange={e => setForm({ ...form, preco: e.target.value })}
          className="w-full p-2 rounded bg-dark border border-roseGold text-white" />

        <input type="text" placeholder="Peso" value={form.peso}
          onChange={e => setForm({ ...form, peso: e.target.value })}
          className="w-full p-2 rounded bg-dark border border-roseGold text-white" />

        <button onClick={adicionarProduto}
          className="w-full bg-roseGold text-white py-2 rounded">
          Adicionar
        </button>
      </div>

      <table className="w-full max-w-3xl mt-6 text-left text-sm">
        <thead>
          <tr className="text-roseGold border-b border-roseGold">
            <th className="p-2">Produto</th>
            <th className="p-2">Quantidade</th>
            <th className="p-2">Preço</th>
            <th className="p-2">Peso</th>
          </tr>
        </thead>
        <tbody>
          {produtos.length === 0 ? (
            <tr><td className="p-4 text-center text-gray-400" colSpan="4">Nenhum produto cadastrado</td></tr>
          ) : (
            produtos.map((p, i) => (
              <tr key={i}>
                <td className="p-2">{p.nome}</td>
                <td className="p-2">{p.quantidade}</td>
                <td className="p-2">{p.preco}</td>
                <td className="p-2">{p.peso}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
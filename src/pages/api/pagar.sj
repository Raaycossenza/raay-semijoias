// pages/api/pagar.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const mercadopago = require("mercadopago");

  mercadopago.configure({
    access_token: "APP_USR-4042258863467476-041411-a32228e15bc0e6d20d8136216f3d5865-492464615"
  });

  const { items, total } = req.body;

  try {
    const preference = await mercadopago.preferences.create({
      items: items.map((item) => ({
        title: item.nome,
        quantity: item.quantidade,
        unit_price: Number(item.precoVenda),
        currency_id: "BRL"
      })),
      back_urls: {
        success: "https://raaysemijoias.vercel.app/sucesso",
        failure: "https://raaysemijoias.vercel.app/falha",
        pending: "https://raaysemijoias.vercel.app/pendente"
      },
      auto_return: "approved"
    });

    return res.status(200).json({
      status: "success",
      init_point: preference.body.init_point
    });
  } catch (err) {
    console.error("Erro ao criar preferência:", err);
    return res.status(500).json({ status: "error", message: "Erro ao criar pagamento" });
  }
}

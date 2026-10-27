const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/salarios', (req, res) => {
  const valores = [].concat(req.query.salario || [])
    .map(v => Number(String(v).replace(',', '.')))
    .filter(v => Number.isFinite(v) && v >= 0);
  if (!valores.length) return res.status(400).send('Informe pelo menos um salário válido. <a href="/">Voltar</a>');
  const dinheiro = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const lista = valores.map(v => `<li>${dinheiro(v)}</li>`).join('');
  res.send(`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Resultado dos salários</title><link rel="stylesheet" href="/style.css"></head><body><main class="container"><h1>Resultado</h1><section class="resultado"><p>Maior salário:</p><strong>${dinheiro(Math.max(...valores))}</strong></section><h2>Lista de salários</h2><ol>${lista}</ol><a class="botao" href="/">Voltar</a></main></body></html>`);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

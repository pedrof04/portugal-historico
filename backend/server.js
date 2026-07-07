const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

// Anos-chave disponíveis (dados ilustrativos/simplificados, ver README)
const YEARS = [1096, 1139, 1147, 1189, 1249, 2026];

app.get('/api/years', (req, res) => {
  res.json(YEARS);
});

app.get('/api/borders/:year', (req, res) => {
  const year = req.params.year;
  const filePath = path.join(__dirname, 'data', `${year}.geojson`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: `Sem dados para o ano ${year}` });
  }

  res.sendFile(filePath);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API a correr em http://localhost:${PORT}`);
});

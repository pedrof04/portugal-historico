# Portugal Histórico — Mapa Interativo

Projeto React + Node/Express + Leaflet que mostra a evolução territorial de
Portugal (do Condado Portucalense até hoje) através de um slider de anos.

## ⚠️ Aviso importante sobre os dados

As fronteiras de **1096, 1139, 1147 e 1189** neste projeto são **ilustrativas
e simplificadas**, desenhadas à mão com base em marcos históricos conhecidos
(fundação do condado, proclamação do reino, conquista de Lisboa, avanço para
sul). Não são geometrias historicamente rigorosas — servem para teres uma
demo funcional. As fronteiras de **1249** (fim da Reconquista) e **2026**
usam o contorno real e atual de Portugal (fonte livre: johan/world.geo.json),
já que o território de 1249 é muito próximo do atual.

Para uma versão mais precisa, as melhores fontes pagas/robustas são:
- **Euratlas Georeferenced Historical Vector Data** — shapefiles por século, com licença.
- Desenhar tu mesmo em **QGIS** ou **geojson.io** com base em atlas históricos (ex: mapas do Instituto Camões, Wikipedia Reconquista).

## Estrutura

```
portugal-historico/
├── backend/          # Node + Express — serve os ficheiros GeoJSON
│   ├── server.js
│   ├── package.json
│   └── data/
│       ├── 1096.geojson
│       ├── 1139.geojson
│       ├── 1147.geojson
│       ├── 1189.geojson
│       ├── 1249.geojson
│       └── 2026.geojson
└── frontend/         # React + Vite + Leaflet
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        └── components/
            └── MapView.jsx
```

## Como correr

### 1. Backend

```bash
cd backend
npm install
npm run start
# API disponível em http://localhost:3001
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
# Abre em http://localhost:5173
```

## Como funciona

- O `server.js` expõe `GET /api/borders/:year`, devolvendo o GeoJSON
  correspondente guardado em `backend/data/`.
- O `MapView.jsx` no frontend tem um array `YEARS` com os anos-chave
  disponíveis; ao mover o slider, faz fetch ao backend para o ano
  selecionado e re-renderiza a camada `<GeoJSON>` no Leaflet.
- Cada ano tem uma etiqueta (`LABELS`) e uma nota histórica curta.

## Próximos passos sugeridos

1. Adicionar mais anos-chave (ex: 1385 Aljubarrota, 1580 União Ibérica,
   1640 Restauração, 1822 independência do Brasil, 1910 República, 1974
   Revolução dos Cravos).
2. Substituir os polígonos ilustrativos por dados mais precisos (Euratlas
   ou desenhados por ti em QGIS/geojson.io).
3. Adicionar popups com factos históricos ao clicar no polígono.
4. Adicionar um botão de "play" para animação automática, se mudares de
   ideias.

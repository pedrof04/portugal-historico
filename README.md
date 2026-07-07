# 🇵🇹 Portugal Through Time

![Portugal Through Time Icon](public/favicon.svg)

An interactive web map that shows the territorial evolution of Portugal — from the **Condado Portucalense** (1096) to the present day — through a draggable year slider.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?logo=leaflet&logoColor=white&style=for-the-badge)
![GeoJSON](https://img.shields.io/badge/GeoJSON-Static%20Data-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-Educational-lightgrey?style=for-the-badge)

## 🗺️ What it does

Drag the slider and watch the map update to reflect Portugal's borders at different key moments in history, from the birth of the County of Portugal to the modern nation.

Each snapshot includes a short label describing the historical milestone (e.g. the conquest of Lisbon, the end of the Reconquista, etc.).

## ✨ Features

- Interactive Leaflet map with OpenStreetMap tiles
- Year slider covering key historical milestones (1096 → 2026)
- GeoJSON borders loaded dynamically per selected year
- Clean, minimal UI built with plain CSS (no UI framework needed)
- Fully static — no backend required

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Map | Leaflet (via react-leaflet) |
| Data | Static GeoJSON files |
| Styling | Plain CSS |

## 📂 Project Structure

```
portugal-historico/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── favicon.svg
│   ├── favicon.png
│   └── data/              # Static GeoJSON files, one per historical year
│       ├── 1096.geojson
│       ├── 1139.geojson
│       ├── 1147.geojson
│       ├── 1189.geojson
│       ├── 1249.geojson
│       └── 2026.geojson
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        └── MapView.jsx     # Map, slider and fetch logic
```

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/portugal-historico.git
cd portugal-historico
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## ⚠️ A note on historical accuracy

The borders for **1096, 1139, 1147 and 1189** are **illustrative and simplified**, hand-drawn based on well-known Reconquista milestones (foundation of the county, proclamation of the kingdom, conquest of Lisbon, southward expansion). They are not historically precise geometries. The borders for **1249** (end of the Reconquista) and **2026** use Portugal's real, current outline, sourced from a free open dataset.

More accurate historical boundary data can be sourced from providers like [Euratlas](https://www.euratlas.com/), or hand-drawn in tools like QGIS / geojson.io.

## 🧭 Roadmap

- [ ] Add more key years (Aljubarrota 1385, Iberian Union 1580, Restoration 1640, Brazilian independence 1822, Republic 1910, Carnation Revolution 1974)
- [ ] Replace illustrative borders with more historically accurate data
- [ ] Add popups with historical facts when clicking a region
- [ ] Add smooth transition animation between years

## 📄 License

This project is for educational purposes. Map tiles © OpenStreetMap contributors.

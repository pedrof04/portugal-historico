import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const YEARS = [1096, 1139, 1147, 1189, 1249, 2026];

const LABELS = {
  1096: 'Condado Portucalense',
  1139: 'Proclamação do Reino de Portugal',
  1147: 'Conquista de Lisboa',
  1189: 'Avanço sobre o Alentejo',
  1249: 'Fim da Reconquista (conquista do Algarve)',
  2026: 'Portugal atual',
};

const API_URL = 'http://localhost:3001';

export default function MapView() {
  const [yearIndex, setYearIndex] = useState(0);
  const [geoData, setGeoData] = useState(null);
  const year = YEARS[yearIndex];

  useEffect(() => {
    fetch(`${API_URL}/api/borders/${year}`)
      .then((res) => res.json())
      .then(setGeoData)
      .catch(() => setGeoData(null));
  }, [year]);

  return (
    <div>
      <div className="year-display">{year} — {LABELS[year]}</div>
      <div className="note">
        Fronteiras de {year < 2026 ? '1096–1249' : '2026'} são ilustrativas/simplificadas para fins educativos.
      </div>

      <MapContainer
        center={[39.7, -8]}
        zoom={6}
        style={{ height: '550px', width: '100%', borderRadius: '8px' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData && (
          <GeoJSON
            key={year}
            data={geoData}
            style={{ color: '#006600', weight: 2, fillColor: '#66bb66', fillOpacity: 0.35 }}
          />
        )}
      </MapContainer>

      <div className="slider-wrapper">
        <input
          type="range"
          min={0}
          max={YEARS.length - 1}
          step={1}
          value={yearIndex}
          onChange={(e) => setYearIndex(Number(e.target.value))}
        />
        <div className="slider-labels">
          {YEARS.map((y) => (
            <span key={y}>{y}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

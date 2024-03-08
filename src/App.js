import "./App.scss";
import L from "leaflet";

function App() {

const map = L.map('map', {
  center: L.latLng(49.2125578, 16.62662018),
  zoom: 14,
});

const key = 'd6CVGYcN8me6EBvnldz6';

L.tileLayer(`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,{ //style URL
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 1,
  attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
  crossOrigin: true
}).addTo(map);

  return (
    <div className="App">
      <div id="map"></div>
    </div>
  );
}

export default App;

// --- Buscador ---
function filtrarSalidas() {
  let input = document.getElementById("buscador").value.toLowerCase();
  let salidas = document.querySelectorAll("#salidas article");

  salidas.forEach(salida => {
    let nombre = salida.dataset.nombre.toLowerCase();
    let fecha = salida.dataset.fecha.toLowerCase();
    if (nombre.includes(input) || fecha.includes(input)) {
      salida.style.display = "";
    } else {
      salida.style.display = "none";
    }
  });
}

// --- Mapa ---
let map = L.map('map').setView([-32° 45' 34", -70° 7' 41.9"] , 8) ; // centro en región Valparaíso

// Capa base (mapa de OpenStreetMap, libre)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Agregar marcadores desde los artículos
let salidas = document.querySelectorAll("#salidas article");
salidas.forEach(salida => {
  let lat = salida.dataset.lat;
  let lng = salida.dataset.lng;
  let nombre = salida.dataset.nombre;
  let enlace = salida.querySelector("a").href;

  if (lat && lng) {
    L.marker([lat, lng]).addTo(map)
      .bindPopup(`<a href="${enlace}"><b>${nombre}</b></a>`);
  }
});

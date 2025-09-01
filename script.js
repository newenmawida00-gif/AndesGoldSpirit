// =============================
// Configuración inicial del mapa
// =============================
let map = L.map('map').setView([-33.0, -70.5], 8);

// Capa base con OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// =============================
// Marcadores desde los artículos
// =============================
let salidas = document.querySelectorAll("#salidas article");
salidas.forEach(salida => {
  let lat = salida.dataset.lat;
  let lng = salida.dataset.lng;
  let nombre = salida.dataset.nombre;
  let enlace = salida.querySelector("a").getAttribute("href");

  // Solo si hay coordenadas válidas
  if (lat && lng) {
    L.marker([lat, lng]).addTo(map)
      .bindPopup(`<a href="${enlace}"><b>${nombre}</b></a>`);
  }
});

// =============================
// Buscador de salidas
// =============================
let buscador = document.getElementById("buscador");
if (buscador) {
  buscador.addEventListener("input", function () {
    let filtro = this.value.toLowerCase();
    salidas.forEach(salida => {
      let nombre = salida.dataset.nombre.toLowerCase();
      salida.style.display = nombre.includes(filtro) ? "" : "none";
    });
  });
}

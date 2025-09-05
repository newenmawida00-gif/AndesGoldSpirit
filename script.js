// Configuración inicial del mapa
let map = L.map('map').setView([-33.0, -70.5], 8);

// Capa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marcadores desde los artículos
let salidas = document.querySelectorAll("#salidas article");
salidas.forEach(salida => {
  let lat = salida.dataset.lat;
  let lng = salida.dataset.lng;
  let nombre = salida.dataset.nombre;
  let enlace = salida.querySelector("a").getAttribute("href");

  if (lat && lng) {
    L.marker([lat, lng]).addTo(map)
      .bindPopup(`<a href="${enlace}"><b>${nombre}</b></a>`);
  }
});

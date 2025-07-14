import { peliculas } from 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';

const categoriasPermitidas = ['Terror', 'Horror'];
const contenedor = document.getElementById('contenido');

// Filtrar contenido relevante
const filtradas = peliculas.filter(p =>
  categoriasPermitidas.some(cat =>
    p.categoria.toLowerCase().includes(cat.toLowerCase())
  )
);

// Mostrar tarjetas
filtradas.forEach(p => {
  const tarjeta = document.createElement('div');
  tarjeta.className = 'card';
  tarjeta.onclick = () => window.open(p.link, '_blank');

  tarjeta.innerHTML = `
    <img src="${p.portada}" alt="${p.nombre}">
    <h3>${p.nombre}</h3>
  `;

  contenedor.appendChild(tarjeta);
});
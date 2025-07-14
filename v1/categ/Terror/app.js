async function cargarPeliculas() {
  const url = 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';

  try {
    const response = await fetch(url);
    const texto = await response.text();

    // Evalúa el contenido y extrae el array
    let peliculas = [];
    eval(texto); // Evalúa el JS que contiene 'export { peliculas }'

    const categoriasPermitidas = ['Terror', 'Horror'];

    // Filtra solo si contiene alguna de esas categorías
    const filtradas = peliculas.filter(p => {
      return categoriasPermitidas.some(cat => p.categoria.toLowerCase().includes(cat.toLowerCase()));
    });

    mostrarPeliculas(filtradas);
  } catch (error) {
    console.error('Error cargando películas:', error);
  }
}

function mostrarPeliculas(lista) {
  const contenedor = document.getElementById('contenido');
  contenedor.innerHTML = '';

  lista.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${p.portada}" alt="Portada de ${p.nombre}">
      <div class="card-info">
        <h3>${p.nombre}</h3>
        <p><strong>Año:</strong> ${p.año}</p>
        <p><strong>Tipo:</strong> ${p.tipo}</p>
        <a href="${p.link}" target="_blank">Ver ahora</a>
      </div>
    `;

    contenedor.appendChild(card);
  });
}

cargarPeliculas();
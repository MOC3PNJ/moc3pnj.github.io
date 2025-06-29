<script> 
 // Obtener referencias a los elementos del DOM
const moviesContainer = document.getElementById('movies-container');
const searchCount = document.getElementById('search-count');
const yearFilter = document.getElementById('year-filter');
const categoryFilter = document.getElementById('category-filter');
const typeFilter = document.getElementById('type-filter');

// Función para realizar la búsqueda y actualizar los resultados
function searchMovies() {
  const yearValue = yearFilter.value;
  const categoryValue = categoryFilter.value;
  const typeValue = typeFilter.value;

  let count = 0;

  // Iterar sobre cada película y verificar si cumple con los filtros
  const movies = moviesContainer.getElementsByClassName('movie');
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const year = movie.getAttribute('data-year');
    const categories = movie.getAttribute('data-category').split(' ');
    const type = movie.getElementsByClassName('category-tag')[0].textContent.toLowerCase();

    // Comprobar si la película cumple con los filtros seleccionados
    const yearMatch = yearValue === 'all' || year === yearValue;
    const categoryMatch = categoryValue === 'all' || categories.includes(categoryValue.toLowerCase());
    const typeMatch = typeValue === 'all' || typeValue.toLowerCase() === type;

    // Mostrar u ocultar la película según los resultados de la búsqueda
    if (yearMatch && categoryMatch && typeMatch) {
      movie.style.display = 'inline-block';
      count++;
    } else {
      movie.style.display = 'none';
    }
  }

  // Actualizar el recuento de resultados
  searchCount.textContent = count;
}

// Agregar event listeners a los filtros para realizar la búsqueda cuando cambian
yearFilter.addEventListener('change', searchMovies);
categoryFilter.addEventListener('change', searchMovies);
typeFilter.addEventListener('change', searchMovies);

// Realizar la búsqueda inicialmente para mostrar todos los resultados
searchMovies();
 </script>
  <script>
      función buscarTexto() {
    var entrada = document.getElementById("searchInput").value.toLowerCase();
    var contenido = document.body.innerHTML.toLowerCase();
    var índice = contenido.indexOf(entrada);

    si (índice !== -1) {
        var fragmento = contenido.substring(índice, índice + entrada.longitud);
        var elementos = document.getElementsByClassName("titulo-de-la-pelicula");

        para (var i = 0; i < elementos.length; i++) {
            var titulo = elementos[i].innerText.toLowerCase();

            if (titulo.includes(fragmento)) {
                elementos[i].style.backgroundColor = "amarillo";
                elementos[i].scrollIntoView({ comportamiento: "suave", bloque: "centro" });
            } demás {
                elementos[i].style.backgroundColor = "";
            }
        }
        document.getElementById("mensaje de error").style.display = "ninguno";
    } demás {
        var mensajeDeError = document.getElementById("MensajeDeError");
        errorMessage.style.display = "bloque";
        errorMessage.innerText = "Lo sentimos, pero el contenido que buscas no se encuentra en nuestro sistema. Por favor, verifica el título y/o el idioma y vuelve a intentarlo. ¡Gracias por tu comprensión!";
    }
}
  </script>

// ¡IMPORTACIÓN DIRECTA! Esto funcionará porque tu data.js ahora tiene 'export { peliculas };'
// Asegúrate de que la URL aquí sea la misma donde tienes tu data.js modificado.
import { peliculas } from 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    // Configuración del carrusel
    const moviesPerPage = 3; // Mostrar 3 películas a la vez
    let currentIndex = 0; // Índice de la primera película visible
    let filteredMovies = []; // Aquí se guardarán las películas de terror/horror

    // --- Inicialización y Filtrado ---
    function initializeCarousel() {
        // FILTRADO ESPECÍFICO PARA 'Terror' Y 'Horror'
        // ¡ATENCIÓN! Usamos 'pelicula.categoria' y verificamos si la CADENA incluye 'Terror' o 'Horror'
        filteredMovies = peliculas.filter(pelicula => {
            // Asegúrate de que 'categoria' existe y es una cadena
            if (pelicula.categoria && typeof pelicula.categoria === 'string') {
                // Convertimos a minúsculas para una búsqueda insensible a mayúsculas/minúsculas
                const categoriaLowerCase = pelicula.categoria.toLowerCase();
                return categoriaLowerCase.includes('terror') || categoriaLowerCase.includes('horror');
            }
            return false; // Si no tiene categoria o no es una cadena, no la incluimos
        });

        // Si no hay películas filtradas, muestra un mensaje y deshabilita botones
        if (filteredMovies.length === 0) {
            carousel.innerHTML = '<p style="text-align: center; width: 100%;">No se encontraron películas de Terror o Horror.</p>';
            prevButton.disabled = true;
            nextButton.disabled = true;
            return;
        }

        displayMovies(); // Muestra las películas en el carrusel
        updateCarousel(); // Asegura la posición inicial correcta
        updateCarouselButtons(); // Actualiza el estado de los botones
    }

    // --- Función para mostrar las películas en el DOM ---
    function displayMovies() {
        carousel.innerHTML = ''; // Limpiar el carrusel antes de añadir nuevas películas

        filteredMovies.forEach(pelicula => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            
            // Usamos 'pelicula.portada', 'pelicula.nombre', 'pelicula.año', 'pelicula.director', 'pelicula.categoria'
            // de acuerdo a tu nueva estructura de datos.
            const imageUrl = pelicula.portada || 'https://i.ibb.co/MkfkNDt/Sin-t-tulo-3.png'; // Fallback por si 'portada' no existe
            
            movieCard.innerHTML = `
                <img src="${imageUrl}" alt="${pelicula.nombre}" onerror="this.onerror=null;this.src='https://i.ibb.co/MkfkNDt/Sin-t-tulo-3.png';">
                <div class="movie-info">
                    <h2>${pelicula.nombre}</h2>
                    <p><strong>Director:</strong> ${pelicula.director || 'N/A'}</p>
                    <p><strong>Año:</strong> ${pelicula.año || 'N/A'}</p>
                    <p class="categories"><strong>Categoría:</strong> ${pelicula.categoria || 'N/A'}</p>
                    <p>${pelicula.description || ''}</p> </div>
            `;
            // Agregamos un evento para abrir el link si existe
            if (pelicula.link) {
                movieCard.style.cursor = 'pointer'; // Para indicar que es clickeable
                movieCard.addEventListener('click', () => {
                    window.open(pelicula.link, '_blank');
                });
            }
            carousel.appendChild(movieCard);
        });
    }

    // --- Función para actualizar la posición del carrusel ---
    function updateCarousel() {
        const firstMovieCard = carousel.querySelector('.movie-card');
        if (!firstMovieCard) return;

        const movieCardStyle = window.getComputedStyle(firstMovieCard);
        const movieCardHeight = firstMovieCard.offsetHeight;
        const marginTop = parseFloat(movieCardStyle.marginTop);
        const marginBottom = parseFloat(movieCardStyle.marginBottom);
        const totalCardHeightWithMargin = movieCardHeight + marginTop + marginBottom;
        
        carousel.style.transform = `translateY(${-currentIndex * totalCardHeightWithMargin}px)`;
        updateCarouselButtons();
    }

    // --- Función para actualizar el estado de los botones de navegación ---
    function updateCarouselButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= filteredMovies.length - moviesPerPage;
    }

    // --- Event Listeners para los botones de navegación ---
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < filteredMovies.length - moviesPerPage) {
            currentIndex++;
            updateCarousel();
        }
    });

    // --- Ajuste responsivo ---
    window.addEventListener('resize', updateCarousel);

    // --- Inicialización de la aplicación ---
    initializeCarousel();
});

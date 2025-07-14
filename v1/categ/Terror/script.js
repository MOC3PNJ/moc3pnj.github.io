document.addEventListener('DOMContentLoaded', () => {
    // La URL de tu base de datos
    const DATA_URL = 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';
    
    // Elementos del DOM
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    // Configuración del carrusel
    const moviesPerPage = 3; // Mostrar 3 películas a la vez
    let currentIndex = 0; // Índice de la primera película visible
    let filteredMovies = []; // Aquí se guardarán las películas de terror/horror

    // --- Función para obtener y filtrar las películas ---
    async function fetchAndFilterMovies() {
        try {
            // Se asume que el archivo data.js exporta un objeto/array directamente, no un 'import { peliculas }'
            // Por lo tanto, lo tratamos como un JSON puro.
            const response = await fetch(DATA_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json(); // Parsea la respuesta como JSON
            
            // Filtra las películas para incluir solo las de "Terror" o "Horror"
            // Se verifica que 'category' exista y sea un array, luego se busca dentro del array.
            filteredMovies = data.filter(movie => 
                movie.category && Array.isArray(movie.category) && 
                (movie.category.includes('Terror') || movie.category.includes('Horror'))
            );

            // Si no hay películas filtradas, muestra un mensaje
            if (filteredMovies.length === 0) {
                carousel.innerHTML = '<p style="text-align: center; width: 100%;">No se encontraron películas de Terror o Horror.</p>';
                prevButton.disabled = true;
                nextButton.disabled = true;
                return;
            }

            displayMovies(); // Muestra las películas en el carrusel
            updateCarouselButtons(); // Actualiza el estado de los botones
            
        } catch (error) {
            console.error('Error al cargar o procesar los datos:', error);
            carousel.innerHTML = '<p style="text-align: center; width: 100%;">Error al cargar las películas. Por favor, inténtalo de nuevo más tarde.</p>';
            prevButton.disabled = true;
            nextButton.disabled = true;
        }
    }

    // --- Función para mostrar las películas en el DOM ---
    function displayMovies() {
        carousel.innerHTML = ''; // Limpiar el carrusel antes de añadir nuevas películas

        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            
            // Asegúrate de que las propiedades coincidan con tu 'data.js'
            // 'image', 'title', 'director', 'year', 'category', 'description'
            // Para el enlace, la base de datos de ejemplo no tiene 'link', pero si tuvieras podrías añadirlo:
            // const movieLink = movie.link || '#'; // Usar un enlace si existe, si no, un '#'

            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}" onerror="this.onerror=null;this.src='https://i.ibb.co/MkfkNDt/Sin-t-tulo-3.png';">
                <div class="movie-info">
                    <h2>${movie.title}</h2>
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Año:</strong> ${movie.year}</p>
                    <p class="categories"><strong>Categoría:</strong> ${movie.category ? movie.category.join(', ') : 'N/A'}</p>
                    <p>${movie.description}</p>
                </div>
            `;
            carousel.appendChild(movieCard);
        });

        // Asegurarse de que el carrusel esté en la posición correcta al cargar
        // Esto es crucial para que el desplazamiento inicial sea correcto.
        updateCarousel(); 
    }

    // --- Función para actualizar la posición del carrusel ---
    function updateCarousel() {
        // Obtenemos la altura real de una tarjeta de película y su margen vertical
        // Esto es más robusto que usar una altura fija en JS.
        const firstMovieCard = carousel.querySelector('.movie-card');
        if (!firstMovieCard) return; // No hay tarjetas, no se puede calcular

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
        // El botón 'next' se deshabilita cuando no hay suficientes películas para llenar la siguiente "página" de 3
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

    // --- Ajuste responsivo al cambiar el tamaño de la ventana (re-calcula posición si la altura de la tarjeta cambia) ---
    window.addEventListener('resize', updateCarousel);

    // --- Inicialización de la aplicación ---
    fetchAndFilterMovies();
});

document.addEventListener('DOMContentLoaded', () => {
    // La URL de tu base de datos (se cargará como JSON)
    const DATA_URL = 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';
    
    // Elementos del DOM
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    // Configuración del carrusel
    const moviesPerPage = 3; // Siempre mostrar 3 películas a la vez
    let currentIndex = 0; // Índice de la primera película visible
    let filteredMovies = []; // Aquí se guardarán las películas de terror/horror

    // --- Función para obtener y filtrar las películas ---
    async function fetchAndFilterMovies() {
        try {
            // Usamos fetch() para cargar el JSON desde la URL.
            // Esta es la forma correcta de obtener el contenido de data.js en un navegador,
            // ya que no es un módulo ES con 'export', sino un archivo JSON puro.
            const response = await fetch(DATA_URL);
            if (!response.ok) {
                // Si la respuesta HTTP no es exitosa (ej. 404, 500), lanzamos un error
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json(); // Parsea la respuesta como un objeto/array JSON
            
            // FILTRADO ESPECÍFICO PARA 'Terror' Y 'Horror'
            filteredMovies = data.filter(movie => {
                // Asegúrate de que movie.category existe y sea un array
                if (movie.category && Array.isArray(movie.category)) {
                    // Verifica si el array 'category' incluye 'Terror' O 'Horror'
                    return movie.category.includes('Terror') || movie.category.includes('Horror');
                }
                return false; // Si no tiene category o no es un array, no la incluimos
            });

            // Si no hay películas filtradas, muestra un mensaje y deshabilita botones
            if (filteredMovies.length === 0) {
                carousel.innerHTML = '<p style="text-align: center; width: 100%;">No se encontraron películas de Terror o Horror.</p>';
                prevButton.disabled = true;
                nextButton.disabled = true;
                return;
            }

            displayMovies(); // Muestra las películas en el carrusel
            // El primer updateCarousel asegura que la posición inicial sea correcta
            updateCarousel(); 
            updateCarouselButtons(); // Actualiza el estado de los botones
            
        } catch (error) {
            console.error('Error al cargar o procesar los datos:', error);
            carousel.innerHTML = '<p style="text-align: center; width: 100%;">Error al cargar las películas. Por favor, asegúrate de que la URL de la base de datos es correcta y el archivo está disponible.</p>';
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
            
            // Usamos un manejador de errores para la imagen si la URL es inválida
            const imageUrl = movie.image || 'https://i.ibb.co/MkfkNDt/Sin-t-tulo-3.png'; // Fallback por si 'image' no existe
            
            movieCard.innerHTML = `
                <img src="${imageUrl}" alt="${movie.title}" onerror="this.onerror=null;this.src='https://i.ibb.co/MkfkNDt/Sin-t-tulo-3.png';">
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
    }

    // --- Función para actualizar la posición del carrusel ---
    function updateCarousel() {
        // Obtenemos la altura real de una tarjeta de película y su margen vertical.
        // Esto es crucial para un desplazamiento preciso, especialmente si los estilos CSS varían.
        const firstMovieCard = carousel.querySelector('.movie-card');
        if (!firstMovieCard) return; // No hay tarjetas, no se puede calcular

        const movieCardStyle = window.getComputedStyle(firstMovieCard);
        const movieCardHeight = firstMovieCard.offsetHeight;
        const marginTop = parseFloat(movieCardStyle.marginTop);
        const marginBottom = parseFloat(movieCardStyle.marginBottom);
        const totalCardHeightWithMargin = movieCardHeight + marginTop + marginBottom;
        
        carousel.style.transform = `translateY(${-currentIndex * totalCardHeightWithMargin}px)`;
        updateCarouselButtons(); // Actualizamos el estado de los botones cada vez que el carrusel se mueve
    }

    // --- Función para actualizar el estado de los botones de navegación ---
    function updateCarouselButtons() {
        prevButton.disabled = currentIndex === 0;
        // El botón 'next' se deshabilita cuando no hay suficientes películas restantes
        // para llenar el número completo de 'moviesPerPage' en la siguiente vista.
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
        // Nos aseguramos de no ir más allá del final de las películas disponibles
        if (currentIndex < filteredMovies.length - moviesPerPage) {
            currentIndex++;
            updateCarousel();
        }
    });

    // --- Ajuste responsivo ---
    // Si la ventana cambia de tamaño, la altura de las tarjetas podría cambiar,
    // así que recalculamos la posición del carrusel para que se vea correctamente.
    window.addEventListener('resize', updateCarousel);

    // --- Inicialización de la aplicación: carga y filtra las películas ---
    fetchAndFilterMovies();
});

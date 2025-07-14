document.addEventListener('DOMContentLoaded', () => {
    const DATA_URL = 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const moviesPerPage = 3; // Cuántas películas se muestran a la vez
    let currentIndex = 0;
    let filteredMovies = [];

    async function fetchMovies() {
        try {
            const response = await fetch(DATA_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            
            // Filtrar películas por categoría "Terror" o "Horror"
            filteredMovies = data.filter(movie => 
                movie.category && (movie.category.includes('Terror') || movie.category.includes('Horror'))
            );

            displayMovies();
            updateCarouselButtons();

        } catch (error) {
            console.error('Error al cargar o procesar los datos:', error);
            carousel.innerHTML = '<p>Error al cargar las películas. Por favor, inténtalo de nuevo más tarde.</p>';
        }
    }

    function displayMovies() {
        carousel.innerHTML = ''; // Limpiar el carrusel
        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
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

        // Ajustar la altura del carrusel para que se vea el efecto de 3 en 3
        // Esto es un cálculo aproximado, puede que necesites ajustarlo con tus estilos finales
        // const movieCardHeight = carousel.querySelector('.movie-card') ? carousel.querySelector('.movie-card').offsetHeight + 20 : 200; // +20 por el margen
        // document.querySelector('.carousel-wrapper').style.height = `${movieCardHeight * moviesPerPage}px`;
        // La altura se maneja con CSS para mayor consistencia.
    }

    function updateCarousel() {
        // Calcula el desplazamiento vertical
        const movieCardHeight = carousel.querySelector('.movie-card') ? carousel.querySelector('.movie-card').offsetHeight + 20 : 0; // Altura de la tarjeta + margen
        carousel.style.transform = `translateY(${-currentIndex * movieCardHeight}px)`;
        updateCarouselButtons();
    }

    function updateCarouselButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= filteredMovies.length - moviesPerPage;
    }

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

    // Cargar las películas al iniciar
    fetchMovies();
});

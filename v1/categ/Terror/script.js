import { peliculas } from 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';

// --- Elementos del DOM ---
const contentGrid = document.getElementById('content-grid');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const paginationControls = document.querySelector('.pagination-controls');

// --- Estado de la aplicación ---
let allContent = [];
let horrorContent = [];
let currentPage = 1;
let itemsPerPage = 21; // Número de elementos a mostrar por página

// --- Funciones ---

// Función principal para obtener y mostrar los datos de terror/horror
async function initializeApp() {
    try {
        // Ordena todo el contenido por año de forma descendente
        allContent = peliculas.sort((a, b) => b.año - a.año);

        // Filtra solo el contenido que incluye 'Terror' u 'Horror' en sus categorías
        horrorContent = allContent.filter(item => {
            const categories = item.categoria.toLowerCase().split(',').map(cat => cat.trim());
            return categories.includes('terror') || categories.includes('horror');
        });

        // Muestra la primera página del contenido filtrado
        displayPaginatedContent();
    } catch (error) {
        console.error('Error al cargar la base de datos:', error);
        contentGrid.innerHTML = '<p>Error al cargar el contenido. Por favor, inténtalo de nuevo más tarde.</p>';
    }
}

// Muestra el contenido de la página actual
function displayPaginatedContent() {
    contentGrid.innerHTML = '';
    
    [span_0](start_span)// Si no hay resultados, muestra un mensaje y oculta la paginación[span_0](end_span)
    if (horrorContent.length === 0) {
        contentGrid.innerHTML = '<p>No se encontraron películas o series de terror/horror.</p>';
        paginationControls.style.display = 'none';
        return;
    }

    paginationControls.style.display = 'flex'; [span_1](start_span)// Muestra los botones de paginación[span_1](end_span)

    [span_2](start_span)// Calcula qué elementos mostrar en la página actual[span_2](end_span)
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = horrorContent.slice(startIndex, startIndex + itemsPerPage);

    [span_3](start_span)// Crea y añade cada tarjeta de película a la cuadrícula[span_3](end_span)
    paginatedItems.forEach(item => {
        const contentItem = document.createElement('div');
        contentItem.classList.add('content-item');
        
        // Usa una imagen por defecto si la portada no está disponible
        const imageUrl = item.portada && item.portada.startsWith('http') ? item.portada : 'https://i.ibb.co/vjC0p14/placeholder.png';

        contentItem.innerHTML = `
            <div class="image-container">
                <img src="${imageUrl}" alt="Portada de ${item.nombre}">
            </div>
            <h3>${item.nombre}</h3>
        `;
        
        // Añade el evento para abrir el enlace en una nueva pestaña
        contentItem.addEventListener('click', () => {
            if (item.link) {
                window.open(item.link, '_blank');
            } else {
                alert('Lo siento, no hay un enlace disponible para este contenido.');
            }
        });
       
        contentGrid.appendChild(contentItem);
    });

    updatePaginationButtons();
}

// Actualiza el estado de los botones de paginación
function updatePaginationButtons() {
    const totalPages = Math.ceil(horrorContent.length / itemsPerPage);
    prevButton.disabled = currentPage === 1; [span_4](start_span)// Deshabilita "anterior" si estás en la página 1[span_4](end_span)
    nextButton.disabled = currentPage === totalPages || totalPages === 0; // Deshabilita "siguiente" en la última página
    
    [span_5](start_span)// Oculta los controles si solo hay una página o menos[span_5](end_span)
    if (totalPages <= 1) {
        paginationControls.style.display = 'none';
    } else {
        paginationControls.style.display = 'flex';
    }
}

// --- Event Listeners para la Paginación ---

// Botón "Anterior"
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayPaginatedContent();
        window.scrollTo(0, 0); // Sube al inicio de la página
    }
});

// Botón "Siguiente"
nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(horrorContent.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayPaginatedContent();
        window.scrollTo(0, 0); // Sube al inicio de la página
    }
});

// --- Inicialización de la App ---
initializeApp();

import { peliculas } from 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js'; /* cite: 99 */

// --- Elementos del DOM ---
const contentGrid = document.getElementById('content-grid'); /* cite: 99 */
const categoryFilter = document.getElementById('category-filter'); /* cite: 100 */
const yearFilter = document.getElementById('year-filter'); /* cite: 100 */
const typeFilter = document.getElementById('type-filter'); /* cite: 100 */
const prevButton = document.getElementById('prev-button'); /* cite: 100 */
const nextButton = document.getElementById('next-button'); /* cite: 100 */
const paginationControls = document.querySelector('.pagination-controls'); /* cite: 100 */

// --- Estado de la aplicación ---
let allContent = []; /* cite: 101 */
let currentFilteredItems = []; /* cite: 101 */
let currentPage = 1; /* cite: 101 */
const itemsPerPage = 20; [span_14](start_span)// This value is still used for pagination logic, but CSS controls the grid layout[span_14](end_span)

// --- Funciones ---

// Función principal para obtener y mostrar datos iniciales
async function initializeApp() {
    try {
        // Ordena el contenido por año descendente desde el principio
        allContent = peliculas.sort((a, b) => b.año - a.año); /* cite: 104 */
        currentFilteredItems = [...allContent]; /* cite: 104 */

        populateFilters(); /* cite: 104 */
        displayPaginatedContent(); /* cite: 104 */
    } catch (error) {
        console.error('Error al cargar la base de datos:', error); /* cite: 105 */
        contentGrid.innerHTML = '<p>Error al cargar el contenido. Por favor, inténtalo de nuevo más tarde.</p>'; /* cite: 106 */
    }
}

// Rellena los menús desplegables de los filtros
function populateFilters() {
    const categories = new Set(); /* cite: 107 */
    allContent.forEach(item => { /* cite: 107 */
        item.categoria.split(',').forEach(cat => categories.add(cat.trim())); /* cite: 107 */
    });
    categoryFilter.innerHTML = '<option value="all">Todas</option>'; /* cite: 108 */
    categories.forEach(category => { /* cite: 108 */
        const option = document.createElement('option'); /* cite: 108 */
        option.value = category; /* cite: 108 */
        option.textContent = category; /* cite: 108 */
        categoryFilter.appendChild(option); /* cite: 108 */
    });
    const years = new Set(allContent.map(item => item.año)); /* cite: 109 */
    yearFilter.innerHTML = '<option value="all">Todos</option>'; /* cite: 109 */
    years.forEach(year => { /* cite: 110 */
        const option = document.createElement('option'); /* cite: 110 */
        option.value = year; /* cite: 110 */
        option.textContent = year; /* cite: 110 */
        yearFilter.appendChild(option); /* cite: 110 */
    });
}

// Muestra el contenido de la página actual
function displayPaginatedContent() {
    contentGrid.innerHTML = ''; /* cite: 112 */
    if (currentFilteredItems.length === 0) { /* cite: 112 */
        contentGrid.innerHTML = '<p>No se encontraron resultados para los filtros seleccionados.</p>'; /* cite: 113 */
        paginationControls.style.display = 'none'; [span_15](start_span)// Oculta los controles si no hay resultados[span_15](end_span)
        return; /* cite: 114 */
    }

    paginationControls.style.display = 'flex'; [span_16](start_span)// Muestra los controles[span_16](end_span)

    // Calcula los índices de inicio y fin para la página actual
    const startIndex = (currentPage - 1) * itemsPerPage; /* cite: 115 */
    const endIndex = startIndex + itemsPerPage; /* cite: 115 */
    const paginatedItems = currentFilteredItems.slice(startIndex, endIndex); /* cite: 116 */
    paginatedItems.forEach(item => { /* cite: 116 */
        const contentItem = document.createElement('div'); /* cite: 116 */
        contentItem.classList.add('content-item'); /* cite: 116 */
        
        const imageUrl = item.portada && item.portada.startsWith('http') ? item.portada : 'https://i.ibb.co/MkfkNDtT/Sin-t-tulo-3.png';

        contentItem.innerHTML = `
            <img src="${imageUrl}" alt="Portada de ${item.nombre}">
            <h3>${item.nombre}</h3>
        `;
        
        contentItem.addEventListener('click', () => { /* cite: 117 */
            if (item.link) { /* cite: 117 */
                window.open(item.link, '_blank'); /* cite: 117 */
            } else {
                alert('Lo siento, no hay un enlace disponible para este contenido.');
            }
        });
       
        contentGrid.appendChild(contentItem); /* cite: 118 */
    });

    updatePaginationButtons();
}

// Actualiza el estado (habilitado/deshabilitado) de los botones de paginación
function updatePaginationButtons() {
    const totalPages = Math.ceil(currentFilteredItems.length / itemsPerPage); /* cite: 119 */
    prevButton.disabled = currentPage === 1; /* cite: 119 */
    nextButton.disabled = currentPage === totalPages || totalPages === 0; /* cite: 120 */
    // Oculta los controles si solo hay una página o menos
    if (totalPages <= 1) { /* cite: 121 */
        paginationControls.style.display = 'none'; /* cite: 121 */
    } else {
        paginationControls.style.display = 'flex'; /* cite: 122 */
    }
}

// Filtra el contenido basado en la selección del usuario
function filterContent() {
    const selectedCategory = categoryFilter.value; /* cite: 123 */
    const selectedYear = yearFilter.value; /* cite: 123 */
    const selectedType = typeFilter.value; /* cite: 123 */

    currentFilteredItems = allContent.filter(item => { /* cite: 123 */
        const matchesCategory = selectedCategory === 'all' || item.categoria.split(',').map(cat => cat.trim()).includes(selectedCategory); /* cite: 123 */
        const matchesYear = selectedYear === 'all' || item.año.toString() === selectedYear; /* cite: 123 */
        const matchesType = selectedType === 'all' || item.tipo === selectedType; /* cite: 123 */
        return matchesCategory && matchesYear && matchesType; /* cite: 123 */
    });
    currentPage = 1; [span_17](start_span)// Reinicia a la primera página después de filtrar[span_17](end_span)
    displayPaginatedContent(); /* cite: 125 */
}

// --- Event Listeners ---

// Filtros
categoryFilter.addEventListener('change', filterContent); /* cite: 126 */
yearFilter.addEventListener('change', filterContent); /* cite: 126 */
typeFilter.addEventListener('change', filterContent); /* cite: 126 */

// Botones de paginación
prevButton.addEventListener('click', () => { /* cite: 126 */
    if (currentPage > 1) { /* cite: 126 */
        currentPage--; /* cite: 126 */
        displayPaginatedContent(); /* cite: 126 */
    }
});
nextButton.addEventListener('click', () => { /* cite: 127 */
    const totalPages = Math.ceil(currentFilteredItems.length / itemsPerPage); /* cite: 127 */
    if (currentPage < totalPages) { /* cite: 127 */
        currentPage++; /* cite: 127 */
        displayPaginatedContent(); /* cite: 127 */
    }
});

// Listener for window resize to re-render content (not strictly needed for responsive grid, but good for other potential responsive elements)
window.addEventListener('resize', () => {
    // Re-display content on resize. This will re-evaluate CSS grid and image sizes.
    displayPaginatedContent(); /* cite: 128 */
});

// --- Inicialización ---
initializeApp(); /* cite: 129 */

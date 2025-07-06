import { peliculas } from 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js'; /* cite: 58 */

// --- Elementos del DOM ---
const contentGrid = document.getElementById('content-grid'); /* cite: 58 */
const categoryFilter = document.getElementById('category-filter'); /* cite: 59 */
const yearFilter = document.getElementById('year-filter'); /* cite: 59 */
const typeFilter = document.getElementById('type-filter'); /* cite: 59 */
const prevButton = document.getElementById('prev-button'); /* cite: 59 */
const nextButton = document.getElementById('next-button'); /* cite: 59 */
const paginationControls = document.querySelector('.pagination-controls'); /* cite: 59 */

// --- Estado de la aplicación ---
let allContent = []; /* cite: 60 */
let currentFilteredItems = []; /* cite: 60 */
let currentPage = 1; /* cite: 61 */
const itemsPerPage = 20; [span_10](start_span)// This value is still used for pagination logic, but CSS controls the grid layout[span_10](end_span)

// --- Funciones ---

// Función principal para obtener y mostrar datos iniciales
async function initializeApp() {
    try {
        // Ordena el contenido por año descendente desde el principio
        allContent = peliculas.sort((a, b) => b.año - a.año); /* cite: 63 */
        currentFilteredItems = [...allContent]; /* cite: 63 */

        populateFilters(); /* cite: 63 */
        displayPaginatedContent(); /* cite: 63 */
    } catch (error) {
        console.error('Error al cargar la base de datos:', error); /* cite: 64 */
        contentGrid.innerHTML = '<p>Error al cargar el contenido. Por favor, inténtalo de nuevo más tarde.</p>'; /* cite: 65 */
    }
}

// Rellena los menús desplegables de los filtros
function populateFilters() {
    const categories = new Set(); /* cite: 66 */
    allContent.forEach(item => { /* cite: 66 */
        item.categoria.split(',').forEach(cat => categories.add(cat.trim())); /* cite: 67 */
    });
    categoryFilter.innerHTML = '<option value="all">Todas</option>'; /* cite: 67 */
    categories.forEach(category => { /* cite: 67 */
        const option = document.createElement('option'); /* cite: 67 */
        option.value = category; /* cite: 67 */
        option.textContent = category; /* cite: 67 */
        categoryFilter.appendChild(option); /* cite: 68 */
    });
    const years = new Set(allContent.map(item => item.año)); /* cite: 68 */
    yearFilter.innerHTML = '<option value="all">Todos</option>'; /* cite: 69 */
    years.forEach(year => { /* cite: 69 */
        const option = document.createElement('option'); /* cite: 69 */
        option.value = year; /* cite: 69 */
        option.textContent = year; /* cite: 69 */
        yearFilter.appendChild(option); /* cite: 70 */
    });
}

// Muestra el contenido de la página actual
function displayPaginatedContent() {
    contentGrid.innerHTML = ''; /* cite: 71 */
    if (currentFilteredItems.length === 0) { /* cite: 71 */
        contentGrid.innerHTML = '<p>No se encontraron resultados para los filtros seleccionados.</p>'; /* cite: 72 */
        paginationControls.style.display = 'none'; [span_11](start_span)// Oculta los controles si no hay resultados[span_11](end_span)
        return; /* cite: 73 */
    }

    paginationControls.style.display = 'flex'; [span_12](start_span)// Muestra los controles[span_12](end_span)

    // Calcula los índices de inicio y fin para la página actual
    const startIndex = (currentPage - 1) * itemsPerPage; /* cite: 74 */
    const endIndex = startIndex + itemsPerPage; /* cite: 74 */
    const paginatedItems = currentFilteredItems.slice(startIndex, endIndex); /* cite: 75 */
    paginatedItems.forEach(item => { /* cite: 75 */
        const contentItem = document.createElement('div'); /* cite: 75 */
        contentItem.classList.add('content-item'); /* cite: 75 */
        
        const imageUrl = item.portada && item.portada.startsWith('http') ? item.portada : 'https://i.ibb.co/MkfkNDtT/Sin-t-tulo-3.png';

        contentItem.innerHTML = `
            <img src="${imageUrl}" alt="Portada de ${item.nombre}">
            <h3>${item.nombre}</h3>
        `;
        
        contentItem.addEventListener('click', () => { /* cite: 76 */
            if (item.link) { /* cite: 76 */
                window.open(item.link, '_blank'); /* cite: 76 */
            } else {
                alert('Lo siento, no hay un enlace disponible para este contenido.');
            }
        });
       
        contentGrid.appendChild(contentItem); /* cite: 77 */
    });

    updatePaginationButtons();
}

// Actualiza el estado (habilitado/deshabilitado) de los botones de paginación
function updatePaginationButtons() {
    const totalPages = Math.ceil(currentFilteredItems.length / itemsPerPage); /* cite: 78 */
    prevButton.disabled = currentPage === 1; /* cite: 78 */
    nextButton.disabled = currentPage === totalPages || totalPages === 0; /* cite: 79 */
    // Oculta los controles si solo hay una página o menos
    if (totalPages <= 1) { /* cite: 80 */
        paginationControls.style.display = 'none'; /* cite: 80 */
    } else {
        paginationControls.style.display = 'flex'; /* cite: 81 */
    }
}

// Filtra el contenido basado en la selección del usuario
function filterContent() {
    const selectedCategory = categoryFilter.value; /* cite: 82 */
    const selectedYear = yearFilter.value; /* cite: 82 */
    const selectedType = typeFilter.value; /* cite: 82 */

    currentFilteredItems = allContent.filter(item => { /* cite: 82 */
        const matchesCategory = selectedCategory === 'all' || item.categoria.split(',').map(cat => cat.trim()).includes(selectedCategory); /* cite: 83 */
        const matchesYear = selectedYear === 'all' || item.año.toString() === selectedYear; /* cite: 83 */
        const matchesType = selectedType === 'all' || item.tipo === selectedType; /* cite: 83 */
        return matchesCategory && matchesYear && matchesType; /* cite: 83 */
    });
    currentPage = 1; [span_13](start_span)// Reinicia a la primera página después de filtrar[span_13](end_span)
    displayPaginatedContent(); /* cite: 84 */
}

// --- Event Listeners ---

// Filtros
categoryFilter.addEventListener('change', filterContent); /* cite: 85 */
yearFilter.addEventListener('change', filterContent); /* cite: 85 */
typeFilter.addEventListener('change', filterContent); /* cite: 85 */

// Botones de paginación
prevButton.addEventListener('click', () => { /* cite: 86 */
    if (currentPage > 1) { /* cite: 86 */
        currentPage--; /* cite: 86 */
        displayPaginatedContent(); /* cite: 86 */
    }
});
nextButton.addEventListener('click', () => { /* cite: 87 */
    const totalPages = Math.ceil(currentFilteredItems.length / itemsPerPage); /* cite: 87 */
    if (currentPage < totalPages) { /* cite: 87 */
        currentPage++; /* cite: 87 */
        displayPaginatedContent(); /* cite: 87 */
    }
});

// Listener for window resize to re-render content (not strictly needed for responsive grid, but good for other potential responsive elements)
window.addEventListener('resize', () => {
    // Re-display content on resize. This will re-evaluate CSS grid and image sizes.
    displayPaginatedContent(); /* cite: 88 */
});

// --- Inicialización ---
initializeApp(); /* cite: 88 */

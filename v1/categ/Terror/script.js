import { peliculas } from 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';

// --- Elementos del DOM ---
const contentGrid = document.getElementById('content-grid');
const categoryFilter = document.getElementById('category-filter');
const yearFilter = document.getElementById('year-filter');
const typeFilter = document.getElementById('type-filter');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const paginationControls = document.querySelector('.pagination-controls');

// --- Estado de la aplicación ---
let allContent = [];
let currentFilteredItems = [];
let currentPage = 1;
let itemsPerPage = 20;

// --- Funciones ---
const setItemsPerPage = () => {
    itemsPerPage = window.innerWidth <= 768 ? [span_0](start_span)21 : 20;[span_0](end_span)
};

async function initializeApp() {
    try {
        allContent = peliculas.sort((a, b) => b.año - a.año);
        [span_1](start_span)currentFilteredItems = [...allContent];[span_1](end_span)
        setItemsPerPage();
        populateFilters();
        displayPaginatedContent();
    } catch (error) {
        console.error('Error al cargar la base de datos:', error);
        contentGrid.innerHTML = '<p>Error al cargar el contenido. [span_2](start_span)Por favor, inténtalo de nuevo más tarde.</p>';[span_2](end_span)
    }
}

// Rellena los menús desplegables de los filtros
function populateFilters() {
    // --- MODIFICACIÓN CLAVE ---
    // Se elimina el código que recorría todas las categorías.
    // En su lugar, se insertan directamente solo las opciones deseadas.
    categoryFilter.innerHTML = `
        <option value="all">Todas</option>
        <option value="Terror">Terror</option>
        <option value="Horror">Horror</option>
    `;
    // --- FIN DE LA MODIFICACIÓN ---

    [span_3](start_span)const years = new Set(allContent.map(item => item.año));[span_3](end_span)
    yearFilter.innerHTML = '<option value="all">Todos</option>';
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        [span_4](start_span)yearFilter.appendChild(option);[span_4](end_span)
    });
}

function displayPaginatedContent() {
    contentGrid.innerHTML = '';
    if (currentFilteredItems.length === 0) {
        [span_5](start_span)contentGrid.innerHTML = '<p>No se encontraron resultados para los filtros seleccionados.</p>';[span_5](end_span)
        [span_6](start_span)paginationControls.style.display = 'none';[span_6](end_span)
        return;
    }

    [span_7](start_span)paginationControls.style.display = 'flex';[span_7](end_span)

    const startIndex = (currentPage - 1) * itemsPerPage;
    [span_8](start_span)const endIndex = startIndex + itemsPerPage;[span_8](end_span)
    const paginatedItems = currentFilteredItems.slice(startIndex, endIndex);

    paginatedItems.forEach(item => {
        const contentItem = document.createElement('div');
        contentItem.classList.add('content-item');
        
        const imageUrl = item.portada && item.portada.startsWith('http') ? item.portada : 'https://i.ibb.co/MkfkNDtT/Sin-t-tulo-3.png';

        contentItem.innerHTML = `
            <div class="image-container">
                <img src="${imageUrl}" alt="Portada de ${item.nombre}">
            </div>
            <h3>${item.nombre}</h3>
        `;
        
        contentItem.addEventListener('click', () => {
            if (item.link) {
                [span_9](start_span)window.open(item.link, '_blank');[span_9](end_span)
            } else {
                alert('Lo siento, no hay un enlace disponible para este contenido.');
            }
        });
       
        contentGrid.appendChild(contentItem);
    });

    [span_10](start_span)updatePaginationButtons();[span_10](end_span)
}

function updatePaginationButtons() {
    const totalPages = Math.ceil(currentFilteredItems.length / itemsPerPage);
    [span_11](start_span)prevButton.disabled = currentPage === 1;[span_11](end_span)
    [span_12](start_span)nextButton.disabled = currentPage === totalPages || totalPages === 0;[span_12](end_span)
    
    if (totalPages <= 1) {
        [span_13](start_span)paginationControls.style.display = 'none';[span_13](end_span)
    } else {
        [span_14](start_span)paginationControls.style.display = 'flex';[span_14](end_span)
    }
}

function filterContent() {
    const selectedCategory = categoryFilter.value;
    [span_15](start_span)const selectedYear = yearFilter.value;[span_15](end_span)
    const selectedType = typeFilter.value;

    currentFilteredItems = allContent.filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.categoria.split(',').map(cat => cat.trim()).includes(selectedCategory);
        const matchesYear = selectedYear === 'all' || item.año.toString() === selectedYear;
        const matchesType = selectedType === 'all' || item.tipo === selectedType;
        return matchesCategory && matchesYear && matchesType;
    });

    [span_16](start_span)currentPage = 1;[span_16](end_span)
    displayPaginatedContent();
}

// --- Event Listeners ---
categoryFilter.addEventListener('change', filterContent);
yearFilter.addEventListener('change', filterContent);
typeFilter.addEventListener('change', filterContent);

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        [span_17](start_span)displayPaginatedContent();[span_17](end_span)
    }
});

nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(currentFilteredItems.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        [span_18](start_span)displayPaginatedContent();[span_18](end_span)
    }
});

window.addEventListener('resize', () => {
    setItemsPerPage();
    [span_19](start_span)displayPaginatedContent();[span_19](end_span)
});

// --- Inicialización ---
initializeApp();

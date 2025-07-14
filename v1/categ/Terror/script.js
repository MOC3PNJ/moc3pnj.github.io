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
    itemsPerPage = window.innerWidth <= 768 ? 21 : 20;
};

async function initializeApp() {
    try {
        allContent = peliculas.sort((a, b) => b.año - a.año);
        currentFilteredItems = [...allContent];
        setItemsPerPage();
        populateFilters();
        displayPaginatedContent();
    } catch (error) {
        console.error('Error al cargar la base de datos:', error);
        contentGrid.innerHTML = '<p>Error al cargar el contenido. Por favor, inténtalo de nuevo más tarde.</p>';
    }
}

// Rellena los menús desplegables de los filtros
function populateFilters() {
    // =================== INICIO DE LA CORRECCIÓN ===================
    // Se elimina por completo el código que leía todas las categorías.
    // En su lugar, establecemos directamente el HTML del selector
    // con únicamente las opciones que deseas.

    categoryFilter.innerHTML = `
        <option value="all">Todas</option>
        <option value="Terror">Terror</option>
        <option value="Horror">Horror</option>
    `;

    // ==================== FIN DE LA CORRECCIÓN =====================

    // El resto de la función para los años permanece igual.
    const years = new Set(allContent.map(item => item.año));
    yearFilter.innerHTML = '<option value="all">Todos</option>';
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

function displayPaginatedContent() {
    contentGrid.innerHTML = '';
    if (currentFilteredItems.length === 0) {
        contentGrid.innerHTML = '<p>No se encontraron resultados para los filtros seleccionados.</p>';
        paginationControls.style.display = 'none';
        return;
    }

    paginationControls.style.display = 'flex';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
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
                window.open(item.link, '_blank');
            } else {
                alert('Lo siento, no hay un enlace disponible para este contenido.');
            }
        });
       
        contentGrid.appendChild(contentItem);
    });

    updatePaginationButtons();
}

function updatePaginationButtons() {
    const totalPages = Math.ceil(currentFilteredItems.length / itemsPerPage);
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages || totalPages === 0;
    
    if (totalPages <= 1) {
        paginationControls.style.display = 'none';
    } else {
        paginationControls.style.display = 'flex';
    }
}

function filterContent() {
    const selectedCategory = categoryFilter.value;
    const selectedYear = yearFilter.value;
    const selectedType = typeFilter.value;

    currentFilteredItems = allContent.filter(item => {
        // Esta lógica de filtro seguirá funcionando correctamente
        const matchesCategory = selectedCategory === 'all' || item.categoria.split(',').map(cat => cat.trim()).includes(selectedCategory);
        const matchesYear = selectedYear === 'all' || item.año.toString() === selectedYear;
        const matchesType = selectedType === 'all' || item.tipo === selectedType;
        return matchesCategory && matchesYear && matchesType;
    });

    currentPage = 1;
    displayPaginatedContent();
}

// --- Event Listeners ---
categoryFilter.addEventListener('change', filterContent);
yearFilter.addEventListener('change', filterContent);
typeFilter.addEventListener('change', filterContent);

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayPaginatedContent();
    }
});

nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(currentFilteredItems.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayPaginatedContent();
    }
});

window.addEventListener('resize', () => {
    setItemsPerPage();
    displayPaginatedContent();
});

// --- Inicialización ---
initializeApp();

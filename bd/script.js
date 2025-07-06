// Importa la base de datos directamente desde la URL
[span_0](start_span)import { peliculas } from 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';[span_0](end_span)

[span_1](start_span)const contentGrid = document.getElementById('content-grid');[span_1](end_span)
[span_2](start_span)const categoryFilter = document.getElementById('category-filter');[span_2](end_span)
[span_3](start_span)const yearFilter = document.getElementById('year-filter');[span_3](end_span)
[span_4](start_span)const typeFilter = document.getElementById('type-filter');[span_4](end_span)
const prevPageBtn = document.getElementById('prev-page-btn');
const nextPageBtn = document.getElementById('next-page-btn');

[span_5](start_span)let allContent = [];[span_5](end_span) // Variable para almacenar la base de datos una vez cargada
let filteredAndSortedContent = []; // To hold content after filtering and sorting
let currentPage = 1;
let itemsPerPage = 21; // Default for phones

// Function to determine items per page based on screen width
function setItemsPerPage() {
    if (window.innerWidth <= 768) { // Phones
        itemsPerPage = 21;
    } else { // TVs and Laptops
        itemsPerPage = 20;
    }
}

// Function to fetch data from the database
async function fetchData() {
    try {
        // The database is already imported directly, we just assign it
        [span_6](start_span)allContent = peliculas;[span_6](end_span)
        setItemsPerPage(); // Set initial items per page
        [span_7](start_span)populateFilters();[span_7](end_span)
        filterContent(); // Initial display after fetching
    } catch (error) {
        [span_8](start_span)console.error('Error al cargar la base de datos:', error);[span_8](end_span)
        contentGrid.innerHTML = '<p>Error al cargar el contenido. [span_9](start_span)Por favor, inténtalo de nuevo más tarde.</p>';[span_9](end_span)
    }
}

// Function to populate filter selectors
function populateFilters() {
    // Categories
    [span_10](start_span)const categories = new Set();[span_10](end_span)
    [span_11](start_span)allContent.forEach(item => {[span_11](end_span)
        // Handle multiple comma-separated categories
        [span_12](start_span)item.categoria.split(',').forEach(cat => categories.add(cat.trim()));[span_12](end_span)
    });
    categoryFilter.innerHTML = '<option value="all">Todas</option>'; [span_13](start_span)// Clears existing options and adds "Todas"[span_13](end_span)
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    // Years
    [span_14](start_span)const years = new Set(allContent.map(item => item.año).sort((a, b) => b - a));[span_14](end_span)
    [span_15](start_span)// Sort from most recent to oldest[span_15](end_span)
    yearFilter.innerHTML = '<option value="all">Todos</option>'; [span_16](start_span)// Clears existing options and adds "Todos"[span_16](end_span)
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

// Function to display content in the grid
function displayContent(items) {
    [span_17](start_span)contentGrid.innerHTML = '';[span_17](end_span) // Clear current content

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = items.slice(startIndex, endIndex);

    if (itemsToDisplay.length === 0) {
        [span_18](start_span)contentGrid.innerHTML = '<p>No se encontraron resultados para los filtros seleccionados.</p>';[span_18](end_span)
        [span_19](start_span)return;[span_19](end_span)
    }

    itemsToDisplay.forEach(item => {
        const contentItem = document.createElement('div');
        contentItem.classList.add('content-item');
        contentItem.dataset.id = item.id; // For future reference if needed

        // Ensure the cover URL is valid, if not, use a default one
        const imageUrl = item.portada && item.portada.startsWith('http') ? item.portada : 'https://i.ibb.co/MkfkNDtT/Sin-t-tulo-3.png';

        contentItem.innerHTML = `
            [span_20](start_span)<img src="${imageUrl}" alt="Portada de ${item.nombre}">[span_20](end_span)
            <h3>${item.nombre}</h3>
        `;

        contentItem.addEventListener('click', () => {
            if (item.link) {
                [span_21](start_span)window.open(item.link, '_blank'); // Open the link in a new tab[span_21](end_span)
            } else {
                [span_22](start_span)alert('Lo siento, no hay un enlace disponible para este contenido.');[span_22](end_span)
            }
        });

        [span_23](start_span)contentGrid.appendChild(contentItem);[span_23](end_span)
    });
}

// Function to filter and sort content
function filterContent() {
    const selectedCategory = categoryFilter.value;
    const selectedYear = yearFilter.value;
    [span_24](start_span)const selectedType = typeFilter.value;[span_24](end_span)

    let tempFilteredContent = allContent.filter(item => {
        // Check if the item's category includes the selected category (handling multiple categories)
        const matchesCategory = selectedCategory === 'all' || item.categoria.split(',').map(cat => cat.trim()).includes(selectedCategory);
        const matchesYear = selectedYear === 'all' || item.año.toString() === selectedYear;
        const matchesType = selectedType === 'all' || item.tipo === selectedType;
        return matchesCategory && matchesYear && matchesType;
    });

    // Sort by year (descending) as requested
    tempFilteredContent.sort((a, b) => b.año - a.año);

    filteredAndSortedContent = tempFilteredContent;
    currentPage = 1; // Reset to first page after filtering
    [span_25](start_span)displayContent(filteredAndSortedContent);[span_25](end_span)
    setupPagination(filteredAndSortedContent);
}

// Function to set up pagination buttons
function setupPagination(items) {
    const totalPages = Math.ceil(items.length / itemsPerPage);

    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages || items.length === 0;

    // Show/hide pagination buttons if there's only one page or no results
    if (totalPages <= 1) {
        prevPageBtn.style.display = 'none';
        nextPageBtn.style.display = 'none';
    } else {
        prevPageBtn.style.display = 'inline-block';
        nextPageBtn.style.display = 'inline-block';
    }
}

// Event Listeners for filters
categoryFilter.addEventListener('change', filterContent);
yearFilter.addEventListener('change', filterContent);
typeFilter.addEventListener('change', filterContent);

// Event Listeners for pagination buttons
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayContent(filteredAndSortedContent);
        setupPagination(filteredAndSortedContent);
    }
});

nextPageBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredAndSortedContent.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayContent(filteredAndSortedContent);
        setupPagination(filteredAndSortedContent);
    }
});

// Handle window resize for responsive items per page
function handleResize() {
    const oldItemsPerPage = itemsPerPage;
    setItemsPerPage();
    if (oldItemsPerPage !== itemsPerPage) {
        filterContent(); // Re-filter and display if itemsPerPage changes
    } else {
        // If itemsPerPage didn't change but content still needs to be adjusted (e.g., from small to large phone width)
        // just re-display the current page
        displayContent(filteredAndSortedContent);
        setupPagination(filteredAndSortedContent);
    }
}
window.addEventListener('resize', handleResize);


// Load data on start
fetchData();

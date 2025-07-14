// script.js

// === DATOS DE PELÍCULAS DE TERROR ===
const peliculas = [
    {
        nombre: "Al Impenetrable",
        portada: "https://i.ibb.co/hV723kL/impenetrable.jpg",
        categoria: "Terror",
        año: 2022,
        link: "https://ejemplo.com/impenetrable",
        tipo: "Película"
    },
    {
        nombre: "Phantasma: El pasaje del terror",
        portada: "https://i.ibb.co/C060y3s/phantasma.jpg",
        categoria: "Terror",
        año: 2017,
        link: "https://ejemplo.com/phantasma",
        tipo: "Película"
    },
    {
        nombre: "The Addiction",
        portada: "https://i.ibb.co/tZ56V6X/addiction.jpg",
        categoria: "Horror",
        año: 1995,
        link: "https://ejemplo.com/addiction",
        tipo: "Película"
    },
    {
        nombre: "Gritos en el pasillo",
        portada: "https://i.ibb.co/q1z6R1G/gritos.jpg",
        categoria: "Terror",
        año: 2008,
        link: "https://ejemplo.com/gritos",
        tipo: "Película"
    },
    {
        nombre: "Nameless",
        portada: "https://i.ibb.co/WcWzB2H/nameless.jpg",
        categoria: "Terror",
        año: 1999,
        link: "https://ejemplo.com/nameless",
        tipo: "Película"
    },
    {
        nombre: "A 3 metros y medio",
        portada: "https://i.ibb.co/Xz9tG9S/tres-metros.jpg",
        categoria: "Horror",
        año: 2017,
        link: "https://ejemplo.com/tres-metros",
        tipo: "Película"
    },
    {
        nombre: "Psycho Goreman",
        portada: "https://i.ibb.co/P8Qy8C6/psycho-goreman.jpg",
        categoria: "Terror",
        año: 2020,
        link: "https://ejemplo.com/psycho-goreman",
        tipo: "Película"
    },
    {
        nombre: "Influencer",
        portada: "https://i.ibb.co/N1gS17C/influencer.jpg",
        categoria: "Terror",
        año: 2022,
        link: "https://ejemplo.com/influencer",
        tipo: "Película"
    },
    {
        nombre: "Frankie Freako",
        portada: "https://i.ibb.co/QcYp02H/frankie.jpg",
        categoria: "Horror",
        año: 2022,
        link: "https://ejemplo.com/frankie-freako",
        tipo: "Película"
    },
    {
        nombre: "Deep Evil",
        portada: "https://i.ibb.co/r7b6tD5/deep-evil.jpg",
        categoria: "Terror",
        año: 2021,
        link: "https://ejemplo.com/deep-evil",
        tipo: "Película"
    },
    {
        nombre: "Where's Rose",
        portada: "https://i.ibb.co/JnHqf8B/wheres-rose.jpg",
        categoria: "Terror",
        año: 2021,
        link: "https://ejemplo.com/wheres-rose",
        tipo: "Película"
    }
];

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

function populateFilters() {
    const categories = new Set();
    allContent.forEach(item => {
        item.categoria.split(',').forEach(cat => categories.add(cat.trim()));
    });
    categoryFilter.innerHTML = '<option value="all">Todas</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
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

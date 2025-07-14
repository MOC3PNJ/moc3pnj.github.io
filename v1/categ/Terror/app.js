import { peliculas } from 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';

// --- Elementos del DOM ---
const contentGrid = document.getElementById('content-grid');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const paginationControls = document.querySelector('.pagination-controls');

// --- Estado ---
let terrorHorrorItems = [];
let currentPage = 1;
let itemsPerPage = 20;

// --- Determinar elementos por página (responsivo) ---
const setItemsPerPage = () => {
    itemsPerPage = window.innerWidth <= 768 ? 21 : 20;
};

// --- Inicializar la app ---
function initializeApp() {
    try {
        const categoriasClave = ['terror', 'horror'];

        // Filtrar solo contenido que incluya esas palabras clave
        terrorHorrorItems = peliculas
            .filter(item =>
                categoriasClave.some(cat => item.categoria.toLowerCase().includes(cat))
            )
            .sort((a, b) => b.año - a.año);

        setItemsPerPage();
        displayPaginatedContent();
    } catch (error) {
        console.error('Error al cargar:', error);
        contentGrid.innerHTML = '<p>Error al cargar el contenido.</p>';
    }
}

// --- Mostrar tarjetas de contenido ---
function displayPaginatedContent() {
    contentGrid.innerHTML = '';

    if (terrorHorrorItems.length === 0) {
        contentGrid.innerHTML = '<p>No hay contenido disponible.</p>';
        paginationControls.style.display = 'none';
        return;
    }

    paginationControls.style.display = 'flex';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = terrorHorrorItems.slice(startIndex, endIndex);

    currentItems.forEach(item => {
        const imageUrl = item.portada?.startsWith('http') ? item.portada : 'https://i.ibb.co/MkfkNDtT/Sin-t-tulo-3.png';

        const contentItem = document.createElement('div');
        contentItem.className = 'content-item';
        contentItem.innerHTML = `
            <div class="image-container">
                <img src="${imageUrl}" alt="Portada de ${item.nombre}">
            </div>
            <h3>${item.nombre}</h3>
        `;
        contentItem.onclick = () => window.open(item.link, '_blank');
        contentGrid.appendChild(contentItem);
    });

    updatePaginationButtons();
}

// --- Botones de navegación ---
function updatePaginationButtons() {
    const totalPages = Math.ceil(terrorHorrorItems.length / itemsPerPage);
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages || totalPages === 0;
    paginationControls.style.display = totalPages <= 1 ? 'none' : 'flex';
}

// --- Listeners ---
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayPaginatedContent();
    }
});
nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(terrorHorrorItems.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayPaginatedContent();
    }
});
window.addEventListener('resize', () => {
    setItemsPerPage();
    displayPaginatedContent();
});

// --- Iniciar ---
initializeApp();
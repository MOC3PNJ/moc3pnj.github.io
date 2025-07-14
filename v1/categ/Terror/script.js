import { peliculas } from 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';

// --- Elementos del DOM ---
const contentGrid = document.getElementById('content-grid');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// --- Estado ---
let currentPage = 1;
let itemsPerPage = 20;
let filteredContent = [];

// --- Inicialización ---
async function initializeApp() {
    try {
        const allowedCategories = ["Terror", "Horror"];

        filteredContent = peliculas.filter(item => {
            const categorias = item.categoria.split(',').map(cat => cat.trim());
            return categorias.some(cat => allowedCategories.includes(cat));
        });

        displayPaginatedContent();
    } catch (error) {
        console.error("Error al cargar los datos:", error);
        contentGrid.innerHTML = "<p>No se pudo cargar el contenido.</p>";
    }
}

// --- Mostrar contenido por página ---
function displayPaginatedContent() {
    contentGrid.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filteredContent.slice(start, end);

    if (pageItems.length === 0) {
        contentGrid.innerHTML = "<p>No hay contenido de Terror u Horror disponible.</p>";
        return;
    }

    pageItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("content-item");

        const imageUrl = item.portada && item.portada.startsWith("http") 
            ? item.portada 
            : "https://i.ibb.co/MkfkNDtT/Sin-t-tulo-3.png";

        itemDiv.innerHTML = `
            <div class="image-container">
                <img src="${imageUrl}" alt="Portada de ${item.nombre}">
            </div>
            <h3>${item.nombre}</h3>
        `;

        itemDiv.addEventListener("click", () => {
            if (item.link) {
                window.open(item.link, "_blank");
            } else {
                alert("No hay enlace disponible para este contenido.");
            }
        });

        contentGrid.appendChild(itemDiv);
    });

    updateButtons();
}

// --- Navegación ---
prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayPaginatedContent();
    }
});

nextButton.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredContent.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayPaginatedContent();
    }
});

function updateButtons() {
    const totalPages = Math.ceil(filteredContent.length / itemsPerPage);
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage >= totalPages;
}

// --- Ejecutar ---
initializeApp();
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
let itemsPerPage = 20; // Valor por defecto

// --- Funciones ---

// Determina cuántos elementos mostrar por página según el ancho de la pantalla
const setItemsPerPage = () => {
    // El punto de quiebre 768px coincide con el CSS para vistas de teléfono/tableta
    itemsPerPage = window.innerWidth <= 768 ? 21 : 20;
};

// Función principal para obtener y mostrar datos iniciales
async function initializeApp() {
    try {
        // Ordena el contenido por año descendente desde el principio
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

// Muestra el contenido de la página actual
function displayPaginatedContent() {
    contentGrid.innerHTML = '';
    if (currentFilteredItems.length === 0) {
        contentGrid.innerHTML = '<p>No se encontraron resultados para los filtros seleccionados.</p>';
        paginationControls.style.display = 'none'; // Oculta los controles si no hay resultados
        return;
    }

    paginationControls.style.display = 'flex'; // Muestra los controles

    // Calcula los índices de inicio y fin para la página actual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = currentFilteredItems.slice(startIndex, endIndex);

    paginatedItems.forEach(item => {
        const contentItem = document.createElement('div');
        contentItem.classList.add('content-item');
        contentItem.setAttribute('data-link', item.link); // Añade el enlace como un atributo de datos

        const imageUrl = item.portada && item.portada.startsWith('http') ? item.portada : 'https://i.ibb.co/MkfkNDtT/Sin-t-tulo-3.png';

        // --- CAMBIO APLICADO AQUÍ: Envuelve la imagen en un div con clase 'image-container' ---
        contentItem.innerHTML = `
            <div class="image-container">
                <img src="${imageUrl}" alt="Portada de ${item.nombre}">
            </div>
            <h3>${item.nombre}</h3>
        `;
        // --- FIN DEL CAMBIO ---

        contentItem.addEventListener('click', () => {
            if (item.link) {
                fetchAndPlayVideo(item.link);
            } else {
                alert('Lo siento, no hay un enlace disponible para este contenido.');
            }
        });

        contentGrid.appendChild(contentItem);
    });

    updatePaginationButtons();
}

// Actualiza el estado (habilitado/deshabilitado) de los botones de paginación
function updatePaginationButtons() {
    const totalPages = Math.ceil(currentFilteredItems.length / itemsPerPage);
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages || totalPages === 0;
    // Oculta los controles si solo hay una página o menos
    if (totalPages <= 1) {
        paginationControls.style.display = 'none';
    } else {
        paginationControls.style.display = 'flex';
    }
}

// Filtra el contenido basado en la selección del usuario
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
    currentPage = 1; // Reinicia a la primera página después de filtrar
    displayPaginatedContent();
}

// --- Event Listeners ---

// Filtros
categoryFilter.addEventListener('change', filterContent);
yearFilter.addEventListener('change', filterContent);
typeFilter.addEventListener('change', filterContent);

// Botones de paginación
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

// Ajuste responsivo al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    setItemsPerPage();
    // Vuelve a mostrar el contenido para ajustar el número de elementos por página
    displayPaginatedContent();
});

// --- Inicialización ---
initializeApp();

// Nueva función para fetch y reproducir video
async function fetchAndPlayVideo(link) {
    try {
        const response = await fetch(link);
        const data = await response.text();
        const nextData = JSON.parse(data.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/s)[1]);

        const mediaInfoList = nextData.props.pageProps.vestData.mediaInfoList;
        const qualityLinks = mediaInfoList.map(info => ({
            quality: info.currentDefinition,
            url: info.mediaUrl
        }));

        createPlayer(nextData.props.pageProps.vestData.title, qualityLinks);
    } catch (error) {
        console.error('Error al obtener los datos del video:', error);
    }
}

function createPlayer(title, qualityLinks) {
    const playerContainer = document.createElement('div');
    playerContainer.style.position = 'fixed';
    playerContainer.style.top = '0';
    playerContainer.style.left = '0';
    playerContainer.style.width = '100%';
    playerContainer.style.height = '100%';
    playerContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    playerContainer.style.zIndex = '1000';
    playerContainer.style.display = 'flex';
    playerContainer.style.justifyContent = 'center';
    playerContainer.style.alignItems = 'center';
    playerContainer.style.flexDirection = 'column';

    const player = document.createElement('video');
    player.controls = true;
    player.style.width = '80%';
    player.style.height = '80%';
    player.style.backgroundColor = 'black';

    const closeButton = document.createElement('div');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.left = '10px';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    closeButton.style.borderRadius = '50%';
    closeButton.style.cursor = 'pointer';
    closeButton.style.display = 'flex';
    closeButton.style.justifyContent = 'center';
    closeButton.style.alignItems = 'center';
    closeButton.style.fontSize = '20px';
    closeButton.style.color = 'black';
    closeButton.textContent = '✕';

    const titleElement = document.createElement('h2');
    titleElement.style.position = 'absolute';
    titleElement.style.top = '10px';
    titleElement.style.left = '50px';
    titleElement.style.color = 'white';
    titleElement.textContent = title;

    playerContainer.appendChild(closeButton);
    playerContainer.appendChild(titleElement);
    playerContainer.appendChild(player);

    document.body.appendChild(playerContainer);

    // Agregar opciones de calidad
    const qualitySelect = document.createElement('select');
    qualitySelect.style.position = 'absolute';
    qualitySelect.style.top = '10px';
    qualitySelect.style.right = '10px';
    qualitySelect.style.color = 'white';
    qualitySelect.style.backgroundColor = 'black';
    qualitySelect.style.border = 'none';
    qualitySelect.style.padding = '5px';

    qualityLinks.forEach(link => {
        const option = document.createElement('option');
        option.value = link.url;
        option.textContent = link.quality;
        qualitySelect.appendChild(option);
    });

    playerContainer.appendChild(qualitySelect);

    qualitySelect.addEventListener('change', function() {
        player.src = qualitySelect.value;
    });

    // Cerrar el reproductor
    closeButton.addEventListener('click', function() {
        document.body.removeChild(playerContainer);
    });
}

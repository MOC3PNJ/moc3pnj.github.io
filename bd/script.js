// Importa la base de datos directamente desde la URL
import { peliculas } from 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';

const contentGrid = document.getElementById('content-grid');
const categoryFilter = document.getElementById('category-filter');
const yearFilter = document.getElementById('year-filter');
const typeFilter = document.getElementById('type-filter');

let allContent = []; // Variable para almacenar la base de datos una vez cargada

// Elementos del iframe overlay
const iframeOverlay = document.getElementById('iframe-overlay');
const videoPlayer = document.getElementById('video-player');
const closeIframeButton = document.getElementById('close-iframe-button');
const iframeTitle = document.getElementById('iframe-title');


// Función para obtener los datos de la base de datos
async function fetchData() {
    try {
        // La base de datos ya se importa directamente, solo la asignamos
        allContent = peliculas;
        populateFilters();
        displayContent(allContent);
    } catch (error) {
        console.error('Error al cargar la base de datos:', error);
        contentGrid.innerHTML = '<p>Error al cargar el contenido. Por favor, inténtalo de nuevo más tarde.</p>';
    }
}

// Función para poblar los selectores de filtro
function populateFilters() {
    // Categorías
    const categories = new Set();
    allContent.forEach(item => {
        // Maneja múltiples categorías separadas por coma
        item.categoria.split(',').forEach(cat => categories.add(cat.trim()));
    });

    // Limpia opciones existentes y añade "Todas"
    categoryFilter.innerHTML = '<option value="all">Todas</option>';
    categories.forEach(category => {
        if (category) { // Asegura que no se añadan categorías vacías
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        }
    });

    // Años
    const years = new Set(allContent.map(item => item.año).sort((a, b) => b - a)); // Ordenar de más reciente a más antiguo
    yearFilter.innerHTML = '<option value="all">Todos</option>'; // Limpia opciones existentes y añade "Todos"
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

// Función para mostrar el contenido en la cuadrícula
function displayContent(items) {
    contentGrid.innerHTML = ''; // Limpiar el contenido actual

    if (items.length === 0) {
        contentGrid.innerHTML = '<p>No se encontraron resultados para los filtros seleccionados.</p>';
        return;
    }

    items.forEach(item => {
        const contentItem = document.createElement('div');
        contentItem.classList.add('content-item');
        contentItem.dataset.id = item.id; // Para futura referencia si se necesita

        // Asegúrate de que la URL de la portada sea válida, si no, usa una por defecto
        const imageUrl = item.portada && item.portada.startsWith('http') ? item.portada : 'https://i.ibb.co/svVpzwrL/error.png';

        contentItem.innerHTML = `
            <img src="${imageUrl}" alt="Portada de ${item.nombre}">
            <h3>${item.nombre}</h3>
        `;

        contentItem.addEventListener('click', () => {
            if (item.link) {
                openVideoPlayer(item.link, item.nombre); // Llama a la nueva función
            } else {
                alert('Lo siento, no hay un enlace disponible para este contenido.');
            }
        });

        contentGrid.appendChild(contentItem);
    });
}

// Nueva función para abrir el reproductor de video en un iframe
function openVideoPlayer(videoUrl, title) {
    videoPlayer.src = videoUrl;
    iframeTitle.textContent = title; // Establece el título en el header del iframe
    iframeOverlay.style.display = 'flex'; // Muestra el overlay

    // Intentar solicitar pantalla completa para el iframe
    // Esto generalmente requiere interacción del usuario O que el iframe lo permita explícitamente.
    // No podemos forzar la pantalla completa de un video externo desde aquí sin control sobre el iframe.
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen().catch(err => {
            console.warn("No se pudo entrar en pantalla completa automáticamente. El usuario debe hacerlo manualmente.", err);
            // Opcional: mostrar un mensaje al usuario para que presione el botón de pantalla completa en el video
        });
    } else if (videoPlayer.mozRequestFullScreen) { /* Firefox */
        videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) { /* IE/Edge */
        videoPlayer.msRequestFullscreen();
    }
}

// Función para cerrar el reproductor de video
function closeVideoPlayer() {
    videoPlayer.src = ''; // Detiene el video al limpiar el src
    iframeOverlay.style.display = 'none'; // Oculta el overlay

    // Salir de pantalla completa si el navegador está en modo de pantalla completa
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }
}

// Event listener para el botón de cerrar iframe
closeIframeButton.addEventListener('click', closeVideoPlayer);


// Función para filtrar el contenido
function filterContent() {
    const selectedCategory = categoryFilter.value;
    const selectedYear = yearFilter.value;
    const selectedType = typeFilter.value;

    const filteredContent = allContent.filter(item => {
        // Comprueba si la categoría del ítem incluye la categoría seleccionada (manejando múltiples categorías)
        const matchesCategory = selectedCategory === 'all' || item.categoria.split(',').map(cat => cat.trim()).includes(selectedCategory);
        const matchesYear = selectedYear === 'all' || item.año.toString() === selectedYear;
        const matchesType = selectedType === 'all' || item.tipo === selectedType;
        return matchesCategory && matchesYear && matchesType;
    });
    displayContent(filteredContent);
}

// Event Listeners para los filtros
categoryFilter.addEventListener('change', filterContent);
yearFilter.addEventListener('change', filterContent);
typeFilter.addEventListener('change', filterContent);

// Cargar los datos al iniciar
fetchData();

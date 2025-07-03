// Importa la base de datos directamente desde la URL
import { peliculas } from 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';

const contentGrid = document.getElementById('content-grid');
const categoryFilter = document.getElementById('category-filter');
const yearFilter = document.getElementById('year-filter');
const typeFilter = document.getElementById('type-filter');

let allContent = []; // Variable para almacenar la base de datos una vez cargada

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
    const categories = new Set(allContent.map(item => item.categoria));
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    // Años
    const years = new Set(allContent.map(item => item.año).sort((a, b) => b - a)); // Ordenar de más reciente a más antiguo
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
        const imageUrl = item.portada && item.portada.startsWith('http') ? item.portada : 'https://via.placeholder.com/250x350?text=No+Cover';

        contentItem.innerHTML = `
            <img src="${imageUrl}" alt="Portada de ${item.nombre}">
            <h3>${item.nombre}</h3>
        `;

        contentItem.addEventListener('click', () => {
            if (item.link) {
                window.open(item.link, '_blank'); // Abre el enlace en una nueva pestaña
            } else {
                alert('Lo siento, no hay un enlace disponible para este contenido.');
            }
        });

        contentGrid.appendChild(contentItem);
    });
}

// Función para filtrar el contenido
function filterContent() {
    const selectedCategory = categoryFilter.value;
    const selectedYear = yearFilter.value;
    const selectedType = typeFilter.value;

    const filteredContent = allContent.filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.categoria === selectedCategory;
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

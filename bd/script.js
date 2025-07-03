// Importa la base de datos directamente desde la URL
[span_0](start_span)import { peliculas } from 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';[span_0](end_span)

const contentGrid = document.getElementById('content-grid');
[span_1](start_span)const categoryFilter = document.getElementById('category-filter');[span_1](end_span)
[span_2](start_span)const yearFilter = document.getElementById('year-filter');[span_2](end_span)
[span_3](start_span)const typeFilter = document.getElementById('type-filter');[span_3](end_span)

let allContent = []; [span_4](start_span)// Variable para almacenar la base de datos una vez cargada[span_4](end_span)

// Función para obtener los datos de la base de datos
async function fetchData() {
    try {
        // La base de datos ya se importa directamente, solo la asignamos
        allContent = peliculas;
        [span_5](start_span)populateFilters();[span_5](end_span)
        [span_6](start_span)displayContent(allContent);[span_6](end_span)
    } catch (error) {
        [span_7](start_span)console.error('Error al cargar la base de datos:', error);[span_7](end_span)
        contentGrid.innerHTML = '<p>Error al cargar el contenido. [span_8](start_span)Por favor, inténtalo de nuevo más tarde.</p>';[span_8](end_span)
    }
}

// Función para poblar los selectores de filtro
function populateFilters() {
    // Categorías
    const categories = new Set();
    allContent.forEach(item => {
        // Handle multiple categories separated by comma
        item.categoria.split(',').forEach(cat => categories.add(cat.trim()));
    });

    categoryFilter.innerHTML = '<option value="all">Todas</option>'; // Clear existing options and add "Todas"
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    // Años
    [span_9](start_span)const years = new Set(allContent.map(item => item.año).sort((a, b) => b - a));[span_9](end_span) [span_10](start_span)// Ordenar de más reciente a más antiguo[span_10](end_span)
    yearFilter.innerHTML = '<option value="all">Todos</option>'; // Clear existing options and add "Todos"
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

// Función para mostrar el contenido en la cuadrícula
function displayContent(items) {
    contentGrid.innerHTML = ''; [span_11](start_span)// Limpiar el contenido actual[span_11](end_span)

    if (items.length === 0) {
        [span_12](start_span)contentGrid.innerHTML = '<p>No se encontraron resultados para los filtros seleccionados.</p>';[span_12](end_span)
        [span_13](start_span)return;[span_13](end_span)
    }

    items.forEach(item => {
        const contentItem = document.createElement('div');
        contentItem.classList.add('content-item');
        contentItem.dataset.id = item.id; // Para futura referencia si se necesita

        // Asegúrate de que la URL de la portada sea válida, si no, usa una por defecto
        const imageUrl = item.portada && item.portada.startsWith('http') ? item.portada : 'https://i.ibb.co/svVpzwrL/error.png';

        contentItem.innerHTML = `
            [span_14](start_span)<img src="${imageUrl}" alt="Portada de ${item.nombre}">[span_14](end_span)
            <h3>${item.nombre}</h3>
        `;

        contentItem.addEventListener('click', () => {
            if (item.link) {
                window.open(item.link, '_blank'); // Abre el enlace en una nueva pestaña
            } else {
                [span_15](start_span)alert('Lo siento, no hay un enlace disponible para este contenido.');[span_15](end_span)
            }
        });

        contentGrid.appendChild(contentItem);
    });
}

// Función para filtrar el contenido
function filterContent() {
    const selectedCategory = categoryFilter.value;
    const selectedYear = yearFilter.value;
    [span_16](start_span)const selectedType = typeFilter.value;[span_16](end_span)

    const filteredContent = allContent.filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.categoria.split(',').map(cat => cat.trim()).includes(selectedCategory);
        const matchesYear = selectedYear === 'all' || item.año.toString() === selectedYear;
        const matchesType = selectedType === 'all' || item.tipo === selectedType;
        return matchesCategory && matchesYear && matchesType;
    });
    [span_17](start_span)displayContent(filteredContent);[span_17](end_span)
}

// Event Listeners para los filtros
categoryFilter.addEventListener('change', filterContent);
yearFilter.addEventListener('change', filterContent);
typeFilter.addEventListener('change', filterContent);

// Cargar los datos al iniciar
fetchData();

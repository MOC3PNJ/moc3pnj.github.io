[span_0](start_span)import { peliculas } from 'https://raw.githack.com/MOC3PNJ/moc3pnj.github.io/refs/heads/main/bd/data.js';[span_0](end_span)

// --- Elementos del DOM ---
[span_1](start_span)const contentGrid = document.getElementById('content-grid');[span_1](end_span)
[span_2](start_span)const categoryFilter = document.getElementById('category-filter');[span_2](end_span)
[span_3](start_span)const yearFilter = document.getElementById('year-filter');[span_3](end_span)
[span_4](start_span)const typeFilter = document.getElementById('type-filter');[span_4](end_span)
[span_5](start_span)const prevButton = document.getElementById('prev-button');[span_5](end_span)
[span_6](start_span)const nextButton = document.getElementById('next-button');[span_6](end_span)
[span_7](start_span)const paginationControls = document.querySelector('.pagination-controls');[span_7](end_span)

// --- Estado de la aplicación ---
[span_8](start_span)let allContent = [];[span_8](end_span)
[span_9](start_span)let currentFilteredItems = [];[span_9](end_span)
[span_10](start_span)let currentPage = 1;[span_10](end_span)
let itemsPerPage = 20; [span_11](start_span)// Valor por defecto[span_11](end_span)

// --- Funciones ---

// Determina cuántos elementos mostrar por página según el ancho de la pantalla
const setItemsPerPage = () => {
    // El punto de quiebre 768px coincide con el CSS para vistas de teléfono/tableta
    itemsPerPage = window.innerWidth <= 768 ?
        [span_12](start_span)21 : 20;[span_12](end_span)
};

// Función principal para obtener y mostrar datos iniciales
async function initializeApp() {
    try {
        // Ordena el contenido por año descendente desde el principio
        [span_13](start_span)allContent = peliculas.sort((a, b) => b.año - a.año);[span_13](end_span)
        [span_14](start_span)currentFilteredItems = [...allContent];[span_14](end_span)

        [span_15](start_span)setItemsPerPage();[span_15](end_span)
        [span_16](start_span)populateFilters();[span_16](end_span)
        [span_17](start_span)displayPaginatedContent();[span_17](end_span)
    } catch (error) {
        [span_18](start_span)console.error('Error al cargar la base de datos:', error);[span_18](end_span)
        contentGrid.innerHTML = '<p>Error al cargar el contenido. [span_19](start_span)Por favor, inténtalo de nuevo más tarde.</p>';[span_19](end_span)
    }
}

// Rellena los menús desplegables de los filtros
function populateFilters() {
    [span_20](start_span)const categories = new Set();[span_20](end_span)
    [span_21](start_span)allContent.forEach(item => {[span_21](end_span)
        [span_22](start_span)item.categoria.split(',').forEach(cat => categories.add(cat.trim()));[span_22](end_span)
    });
    [span_23](start_span)categoryFilter.innerHTML = '<option value="all">Todas</option>';[span_23](end_span)
    [span_24](start_span)categories.forEach(category => {[span_24](end_span)
        [span_25](start_span)const option = document.createElement('option');[span_25](end_span)
        [span_26](start_span)option.value = category;[span_26](end_span)
        [span_27](start_span)option.textContent = category;[span_27](end_span)
        [span_28](start_span)categoryFilter.appendChild(option);[span_28](end_span)
    });
    [span_29](start_span)const years = new Set(allContent.map(item => item.año));[span_29](end_span)
    [span_30](start_span)yearFilter.innerHTML = '<option value="all">Todos</option>';[span_30](end_span)
    [span_31](start_span)years.forEach(year => {[span_31](end_span)
        [span_32](start_span)const option = document.createElement('option');[span_32](end_span)
        [span_33](start_span)option.value = year;[span_33](end_span)
        [span_34](start_span)option.textContent = year;[span_34](end_span)
        [span_35](start_span)yearFilter.appendChild(option);[span_35](end_span)
    });
}

// Muestra el contenido de la página actual
function displayPaginatedContent() {
    [span_36](start_span)contentGrid.innerHTML = '';[span_36](end_span)
    [span_37](start_span)if (currentFilteredItems.length === 0) {[span_37](end_span)
        [span_38](start_span)contentGrid.innerHTML = '<p>No se encontraron resultados para los filtros seleccionados.</p>';[span_38](end_span)
        paginationControls.style.display = 'none'; [span_39](start_span)// Oculta los controles si no hay resultados[span_39](end_span)
        [span_40](start_span)return;[span_40](end_span)
    }

    paginationControls.style.display = 'flex'; [span_41](start_span)// Muestra los controles[span_41](end_span)

    // Calcula los índices de inicio y fin para la página actual
    [span_42](start_span)const startIndex = (currentPage - 1) * itemsPerPage;[span_42](end_span)
    [span_43](start_span)const endIndex = startIndex + itemsPerPage;[span_43](end_span)
    [span_44](start_span)const paginatedItems = currentFilteredItems.slice(startIndex, endIndex);[span_44](end_span)

    [span_45](start_span)paginatedItems.forEach(item => {[span_45](end_span)
        [span_46](start_span)const contentItem = document.createElement('div');[span_46](end_span)
        [span_47](start_span)contentItem.classList.add('content-item');[span_47](end_span)
        
        [span_48](start_span)const imageUrl = item.portada && item.portada.startsWith('http') ? item.portada : 'https://i.ibb.co/MkfkNDtT/Sin-t-tulo-3.png';[span_48](end_span)

        // --- CAMBIO APLICADO AQUÍ: Envuelve la imagen en un div con clase 'image-container' ---
        contentItem.innerHTML = `
            <div class="image-container">
                <img src="${imageUrl}" alt="Portada de ${item.nombre}">
            </div>
            <h3>${item.nombre}</h3>
        `;
        // --- FIN DEL CAMBIO ---
        
        [span_49](start_span)contentItem.addEventListener('click', () => {[span_49](end_span)
            [span_50](start_span)if (item.link) {[span_50](end_span)
                [span_51](start_span)window.open(item.link, '_blank');[span_51](end_span)
            [span_52](start_span)} else {[span_52](end_span)
                [span_53](start_span)alert('Lo siento, no hay un enlace disponible para este contenido.');[span_53](end_span)
            }
        });
       
        [span_54](start_span)contentGrid.appendChild(contentItem);[span_54](end_span)
    });

    [span_55](start_span)updatePaginationButtons();[span_55](end_span)
}

// Actualiza el estado (habilitado/deshabilitado) de los botones de paginación
function updatePaginationButtons() {
    [span_56](start_span)const totalPages = Math.ceil(currentFilteredItems.length / itemsPerPage);[span_56](end_span)
    [span_57](start_span)prevButton.disabled = currentPage === 1;[span_57](end_span)
    [span_58](start_span)nextButton.disabled = currentPage === totalPages || totalPages === 0;[span_58](end_span)
    // Oculta los controles si solo hay una página o menos
    [span_59](start_span)if (totalPages <= 1) {[span_59](end_span)
        [span_60](start_span)paginationControls.style.display = 'none';[span_60](end_span)
    [span_61](start_span)} else {[span_61](end_span)
        [span_62](start_span)paginationControls.style.display = 'flex';[span_62](end_span)
    }
}

// Filtra el contenido basado en la selección del usuario
function filterContent() {
    [span_63](start_span)const selectedCategory = categoryFilter.value;[span_63](end_span)
    [span_64](start_span)const selectedYear = yearFilter.value;[span_64](end_span)
    [span_65](start_span)const selectedType = typeFilter.value;[span_65](end_span)

    [span_66](start_span)currentFilteredItems = allContent.filter(item => {[span_66](end_span)
        [span_67](start_span)const matchesCategory = selectedCategory === 'all' || item.categoria.split(',').map(cat => cat.trim()).includes(selectedCategory);[span_67](end_span)
        [span_68](start_span)const matchesYear = selectedYear === 'all' || item.año.toString() === selectedYear;[span_68](end_span)
        [span_69](start_span)const matchesType = selectedType === 'all' || item.tipo === selectedType;[span_69](end_span)
        [span_70](start_span)return matchesCategory && matchesYear && matchesType;[span_70](end_span)
    });
    currentPage = 1; [span_71](start_span)// Reinicia a la primera página después de filtrar[span_71](end_span)
    [span_72](start_span)displayPaginatedContent();[span_72](end_span)
}

// --- Event Listeners ---

// Filtros
[span_73](start_span)categoryFilter.addEventListener('change', filterContent);[span_73](end_span)
[span_74](start_span)yearFilter.addEventListener('change', filterContent);[span_74](end_span)
[span_75](start_span)typeFilter.addEventListener('change', filterContent);[span_75](end_span)

// Botones de paginación
[span_76](start_span)prevButton.addEventListener('click', () => {[span_76](end_span)
    [span_77](start_span)if (currentPage > 1) {[span_77](end_span)
        [span_78](start_span)currentPage--;[span_78](end_span)
        [span_79](start_span)displayPaginatedContent();[span_79](end_span)
    }
});
[span_80](start_span)nextButton.addEventListener('click', () => {[span_80](end_span)
    [span_81](start_span)const totalPages = Math.ceil(currentFilteredItems.length / itemsPerPage);[span_81](end_span)
    [span_82](start_span)if (currentPage < totalPages) {[span_82](end_span)
        [span_83](start_span)currentPage++;[span_83](end_span)
        [span_84](start_span)displayPaginatedContent();[span_84](end_span)
    }
});

// Ajuste responsivo al cambiar el tamaño de la ventana
[span_85](start_span)window.addEventListener('resize', () => {[span_85](end_span)
    [span_86](start_span)setItemsPerPage();[span_86](end_span)
    // Vuelve a mostrar el contenido para ajustar el número de elementos por página
    [span_87](start_span)displayPaginatedContent();[span_87](end_span)
});

// --- Inicialización ---
[span_88](start_span)initializeApp();[span_88](end_span)

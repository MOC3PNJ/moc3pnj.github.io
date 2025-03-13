function validateLicense() {
    const licenseInput = document.getElementById('licenseInput');
    const resultContainer = document.querySelector('.result-container');
    const licenseResult = document.getElementById('licenseResult');
    const statusIndicator = licenseResult.querySelector('.status-indicator');
    
    const licenseNumber = document.getElementById('licenseNumber');
    const licenseStatus = document.getElementById('licenseStatus');
    const licenseDescription = document.getElementById('licenseDescription');
    
    const license = licenseInput.value.trim();
    
    // Validar licencia
    const isValid = BaseDeDatosLicencias.validarLicencia(license);
    const details = BaseDeDatosLicencias.obtenerDetalles(license);
    const status = details ? details.ESTADO : 2;
    const statusText = BaseDeDatosLicencias.estadosValidos[status];
    
    // Actualizar UI
    licenseResult.classList.remove('valid', 'invalid');
    resultContainer.classList.add('visible');
    
    if (isValid) {
        licenseResult.classList.add('valid');
        licenseNumber.textContent = license;
        licenseStatus.textContent = `${status} - ${statusText}`;
        licenseDescription.textContent = details.descripcion;
        statusIndicator.style.backgroundColor = getStatusColor(status);
    } else {
        licenseResult.classList.add('invalid');
        licenseNumber.textContent = license;
        licenseStatus.textContent = '2 - Inválida';
        licenseDescription.textContent = 'Licencia no válida o formato incorrecto';
    }
    
    updateStatusLegend();
}

function getStatusColor(status) {
    const colors = {
        1: '#4CAF50',
        2: '#F44336',
        3: '#9C27B0',
        4: '#FF9800',
        5: '#2196F3'
    };
    return colors[status] || '#666';
}

function updateStatusLegend() {
    const legend = document.getElementById('statusLegend');
    legend.innerHTML = '';
    
    Object.entries(BaseDeDatosLicencias.estadosValidos).forEach(([key, value]) => {
        const li = document.createElement('li');
        li.setAttribute('data-status', key);
        li.innerHTML = `
            <span>${key} - ${value}</span>
        `;
        legend.appendChild(li);
    });
}

// Inicializar leyenda de estados
document.addEventListener('DOMContentLoaded', updateStatusLegend);

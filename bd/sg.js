// Obtén una referencia al elemento body del documento
const body = document.querySelector('body');

// Crea un div para el fondo oscuro
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
overlay.style.zIndex = '9998'; // Un z-index alto para que esté encima de todo

// Crea un div para el contenedor del formulario
const formContainer = document.createElement('div');
formContainer.style.position = 'fixed';
formContainer.style.top = '50%';
formContainer.style.left = '50%';
formContainer.style.transform = 'translate(-50%, -50%)';
formContainer.style.backgroundColor = '#fff';
formContainer.style.padding = '30px';
formContainer.style.borderRadius = '8px';
formContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
formContainer.style.zIndex = '9999'; // Más alto que el overlay

// Añade un título al formulario
const title = document.createElement('h2');
title.textContent = 'Acceso Restringido';
title.style.textAlign = 'center';
title.style.marginBottom = '20px';

// Crea el formulario
const form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.alignItems = 'center';

// Crea el input para la clave
const input = document.createElement('input');
input.setAttribute('type', 'password');
input.setAttribute('placeholder', 'Ingresa la clave');
input.style.padding = '10px';
input.style.marginBottom = '15px';
input.style.border = '1px solid #ccc';
input.style.borderRadius = '4px';
input.style.width = '250px';

// Crea el botón de enviar
const button = document.createElement('button');
button.setAttribute('type', 'submit');
button.textContent = 'Entrar';
button.style.padding = '10px 20px';
button.style.backgroundColor = '#007bff';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '4px';
button.style.cursor = 'pointer';
button.style.transition = 'background-color 0.3s ease';

// Añade un efecto hover al botón
button.onmouseover = () => { button.style.backgroundColor = '#0056b3'; };
button.onmouseout = () => { button.style.backgroundColor = '#007bff'; };

// Mensaje de error (inicialmente oculto)
const errorMessage = document.createElement('p');
errorMessage.textContent = 'Clave incorrecta. Inténtalo de nuevo.';
errorMessage.style.color = 'red';
errorMessage.style.marginTop = '10px';
errorMessage.style.display = 'none'; // Oculto por defecto

// Agrega los elementos al formulario
form.appendChild(input);
form.appendChild(button);
form.appendChild(errorMessage);

// Agrega el título y el formulario al contenedor
formContainer.appendChild(title);
formContainer.appendChild(form);

// Agrega el overlay y el contenedor del formulario al body
body.appendChild(overlay);
body.appendChild(formContainer);

// La clave correcta
const correctKey = '32370953';

// Manejador del evento submit del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    const enteredKey = input.value;

    if (enteredKey === correctKey) {
        // Si la clave es correcta, oculta el formulario y el overlay
        formContainer.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        // Si la clave es incorrecta, muestra el mensaje de error
        errorMessage.style.display = 'block';
        input.value = ''; // Limpia el input
    }
});

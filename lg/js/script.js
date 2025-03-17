document.getElementById('username').addEventListener('input', function(e) {
    const username = e.target.value.trim().substring(0, 10);
    const licencia = `HZ${username.toUpperCase()}FZ`;
    document.getElementById('licencia').value = licencia;
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        username: document.getElementById('username').value.trim(),
        licencia: document.getElementById('licencia').value,
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value
    };

    fetch('../private/php/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const messageDiv = document.getElementById('message');
        if (data.success) {
            messageDiv.style.color = 'green';
            messageDiv.innerHTML = 'Registro exitoso!';
            document.getElementById('registerForm').reset();
        } else {
            messageDiv.style.color = 'red';
            messageDiv.innerHTML = data.error || 'Error en el registro';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').innerHTML = 'Error en la conexión';
    });
});

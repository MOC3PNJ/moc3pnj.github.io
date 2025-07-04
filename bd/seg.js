<script>
    // --- Deshabilitar Copiar, Pegar y Menú Contextual ---
    document.addEventListener('contextmenu', event => event.preventDefault());

    document.addEventListener('copy', (event) => {
        event.preventDefault();
        alert("¡Copiar contenido está deshabilitado en este sitio!");
    });

    document.addEventListener('selectstart', event => event.preventDefault());

    // --- Deshabilitar Herramientas de Desarrollador ---
    document.onkeydown = function(e) {
        // F12
        if (e.keyCode == 123) {
            return false;
        }
        // Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        // Ctrl+Shift+J
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        // Ctrl+C
        if (e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        // Ctrl+V
        if (e.ctrlKey && e.keyCode == 'V'.charCodeAt(0)) {
            return false;
        }
        // Ctrl+U
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    }

    // --- Detección de Herramientas de Desarrollador Abiertas ---
    // Este método es más agresivo y puede afectar el rendimiento.
    // (function() {
    //     const checkDevTools = () => {
    //         const widthThreshold = window.outerWidth - window.innerWidth > 160;
    //         const heightThreshold = window.outerHeight - window.innerHeight > 160;
    //
    //         if (widthThreshold || heightThreshold) {
    //             // Redirigir o mostrar un mensaje si las herramientas están abiertas.
    //             document.body.innerHTML = "<h1>Las herramientas de desarrollador están deshabilitadas.</h1>";
    //         }
    //
    //         'debugger';
    //     };
    //
    //     setInterval(checkDevTools, 1000);
    // })();
</script>

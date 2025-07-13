// Contenido para: https://moc3pnj.github.io/api/cs.js

(async () => {
    try {
        const urlBaseDeDatosOriginal = 'https://moc3pnj.github.io/bd/data.js';
        const respuesta = await fetch(urlBaseDeDatosOriginal);
        
        if (!respuesta.ok) {
            console.error(`ERROR (cs.js): No se pudo conectar con la base de datos original (${urlBaseDeDatosOriginal}). Estado HTTP: ${respuesta.status}.`);
            document.body.innerHTML = `<h1>❌ Error de Conexión: Base de Datos no accesible (${respuesta.status}).</h1><p>Verifica la URL y la disponibilidad de tu base de datos.</p>`;
            return; // Detener la ejecución en caso de error de conexión
        }
        
        const dataBase = await respuesta.text();
        console.log('✅ Contenido de la base de datos original (data.js) obtenido exitosamente.');
        // console.log(dataBase); // Opcional: loguear el contenido de la base de datos

        // Si data.js contiene código JavaScript ejecutable, puedes usar eval().
        // Si data.js contiene datos (por ejemplo, JSON), deberías parsearlos:
        // const datosParseados = JSON.parse(dataBase);
        // console.log('Datos parseados:', datosParseados);
        // ¡ADVERTENCIA!: Usar eval() con contenido no confiable es un riesgo de seguridad MAYOR.
        // Solo descomenta si estás ABSOLUTAMENTE seguro de la fuente y contenido.
        // eval(dataBase);

    } catch (error) {
        console.error(`ERROR (cs.js): Fallo al intentar obtener contenido de la base de datos original (data.js):`, error);
        document.body.innerHTML = `<h1>❌ Error de Conexión: Fallo de red al cargar la base de datos (data.js).</h1><p>Verifica tu conexión a internet o la disponibilidad del servidor de la base de datos.</p>`;
    }
})();

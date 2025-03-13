const BaseDeDatosLicencias = (() => {
    const validarFormatoLicencia = (licencia) => {
        return /^0X\d{4}DX$/.test(licencia);
    };

    const datos = Object.freeze([
        Object.freeze({
            LIC: "0X1234DX",
            ESTADO: 1,
            descripcion: "Licencia activa y en buen estado"
        }),
        Object.freeze({
            LIC: "0X9876DX",
            ESTADO: 3,
            descripcion: "Licencia bloqueada permanentemente"
        }),
        Object.freeze({
            LIC: "0X5555DX",
            ESTADO: 5,
            descripcion: "Licencia suspendida por falta de pago"
        }),
        Object.freeze({
            LIC: "0X0000DX",
            ESTADO: 4,
            descripcion: "Licencia en mantenimiento técnico"
        })
    ]);

    return Object.freeze({
        validarLicencia: (licencia) => {
            if (!validarFormatoLicencia(licencia)) return false;
            return datos.some(l => l.LIC === licencia);
        },

        obtenerEstado: (licencia) => {
            if (!validarFormatoLicencia(licencia)) return 2;
            
            const encontrada = datos.find(l => l.LIC === licencia);
            return encontrada ? encontrada.ESTADO : 2;
        },

        obtenerDetalles: (licencia) => {
            if (!validarFormatoLicencia(licencia)) return null;
            
            const encontrada = datos.find(l => l.LIC === licencia);
            return encontrada ? Object.freeze({...encontrada}) : null;
        },

        obtenerTodas: () => {
            return Object.freeze(datos.map(l => Object.freeze({...l})));
        },

        estadosValidos: Object.freeze({
            1: "Activa - Todo en orden",
            2: "Inhabilitada",
            3: "Bloqueo permanente",
            4: "En mantenimiento",
            5: "Contactar soporte por pago"
        })
    });
})();

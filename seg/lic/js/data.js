const BaseDeDatosLicencias = (() => {
    const validarFormatoLicencia = (licencia) => {
        return /^0X\d{4}DX$/.test(licencia);
    };

    const datos = Object.freeze([
        Object.freeze({
            LIC: "0X0001X",
            ESTADO: 1,
            descripcion: "Licencia activa y en buen estado"
        }),
        Object.freeze({
            LIC: "0X0002DX",
            ESTADO: 2,
            descripcion: "Licencia bloqueada permanentemente"
        }),
        Object.freeze({
            LIC: "0X0003DX",
            ESTADO: 3,
            descripcion: "Licencia suspendida por falta de pago"
        }),
        Object.freeze({
            LIC: "0X0004DX",
            ESTADO: 4,
            descripcion: "Licencia en mantenimiento técnico"
       }),
        Object.freeze({
            LIC: "0X0005DX",
            ESTADO: 5,
            descripcion: "Licencia en mantenimiento técnico"
        }),
        Object.freeze({
            LIC: "0X0006DX",
            ESTADO: 6,
            descripcion: "Licencia en mantenimiento técnico"

       }),
        Object.freeze({
            LIC: "0X0007DX",
            ESTADO: 7,
            descripcion: "Licencia en mantenimiento técnico"
        }),
        Object.freeze({
            LIC: "0X0008DX",
            ESTADO: 8,
            descripcion: "Licencia en mantenimiento técnico"
        }),
        Object.freeze({
            LIC: "0X0009DX",
            ESTADO: 9,
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
            2: "Error: Cuenta Inhabilitada",
            3: "Error al inciar: Bloqueo permanente",
            4: "Error: Sistema o cuenta en mantenimiento",
            5: "Atencion: Contactar soporte por pago"
            6: "Buen dia admin, todo bien con su licencia"
            7: "Buen dia admin, al parecer el parlamente PNJ ha notado algo fuera de lo comun y su licencia será revocada."
            8: "Error: El PNJ revoco su licencia. ATENCION: m.pnj@bk.ru."
            9: "Error: Licencia revocada permanentemente. USTED FUE BANEADO."
            
        })
    });
})();

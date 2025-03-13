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
            LIC: "0XADMIN3237DX",
            ESTADO: ,
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
            6: "Buen dia admin, todo bien con su licencia"
            7: "Buen dia admin, al parecer el parlamente PNJ ha notado algo fuera de lo comun y su licencia será revocada."
            8: "Error: El PNJ revoco su licencia. ATENCION: m.pnj@bk.ru."
            9: "Error: Licencia revocada permanentemente. USTED FUE BANEADO."
            
        })
    });
})();

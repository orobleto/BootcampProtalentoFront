

const alumno = {
    nombre: "Octavio",
    apellido: "Robleto",
    edad: 25,
    activo: true,
    telefonos: ["+5491150124479", "4479"],
    geo: {
        lat: 52.36,
        lon: 96.36
    },
    mostrarDireccion: function () {
        for (const coordenada in this.geo) {
            console.log(coordenada +":" + this.geo[coordenada]);
        }
    }
}

function suma(a , b = 10) {
    return a + b;
}

function imprimir(cadena){
    console.log(cadena);
}
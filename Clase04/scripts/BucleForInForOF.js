
// json 
const alumno = {
    nombre: "Octavio",
    apellido: "Robleto",
    edad: 25,
    activo: true,
    telefonos: ["+5491150124479", "4479"],
    geo: {
        lat: 52.36,
        lon: 96.36
    }
}


console.log(alumno.nombre);
// alumno['nombre']

// for atributo
for (const atributo in alumno) {
    console.log(atributo + ": " + alumno[atributo]);
}

const alumnos = [

    {
        nombre: "Octavio",
        apellido: "Robleto",
        edad: 25,
        activo: true,
        telefonos: ["+5491150124479", "4479"],
        geo: {
            lat: 52.36,
            lon: 96.36
        }
    },
    {
        nombre: "Mariana",
        apellido: "Bracho",
        edad: 22,
        activo: false,
        telefonos: ["+5491150124479", "4479"],
        geo: {
            lat: 52.36,
            lon: 96.36
        }
    }



];

// foreach
for (const alumno of alumnos) {
    console.log(alumno);
}





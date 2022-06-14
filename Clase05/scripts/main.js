const edad = 92;

let miPromesa = new Promise(
    function (resolve, reject) {
        function evaluarEdad() {
            if (edad >= 18) {
                resolve('La persona es mayor de edad');
            } else {
                reject('La persona no es mayor de edad, por favor que lo acompañe un adulto');
            }
        }
        setTimeout(evaluarEdad,5000);
    }
);
// then -> try   catch -> catch finnaly -> finally

// 
console.log("Inicio");

const prom = miPromesa.then(
    function (mensaje) {
        console.log("Se cumplio la promesa " + mensaje);
    }
).catch(
    function(mensaje){
        console.log("No se cumplio la promesa " + mensaje);
    }
).finally(
    function(){
        console.log("Finalizar votacion");
    }
)

console.log("Fin");



let arreglo = ["Octavio", 2, true, []];

for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];
    console.log(element);
}

//agregar al final de la lista
arreglo.push("Rafael");
console.log(arreglo);

//agregar al prinicipio de la lista
arreglo.unshift(true);
console.log(arreglo);

//eliminar ultimo en la lista
arreglo.pop();
console.log(arreglo);

//eliminar primero en la lista
arreglo.shift()
console.log(arreglo);

// buscar si existe elemento en la lista y devuelve el indice si lo encuentra de lo contrario -1
console.log(arreglo.indexOf(2));

// con un solo argumento elimina a partir del indice indicado arreglo.splice(1);
// con dos argumentos elimina el rango de acuerdo a los indices indicados arreglo.splice(1,2);
arreglo.splice(1, 2);
console.log(arreglo);

let nombreCompleto = "Octavio Robleto"
let razonSocial = nombreCompleto.split(" ");
const nombre = razonSocial[0];
const apellido = razonSocial[1];
console.log("El nombre es " + nombre + " y el apellido es " + apellido);

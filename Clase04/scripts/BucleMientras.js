

// 
let contador = 0;
const maximo = 10;
const h2 = document.getElementById("elemento");
let cadena = ""
while (contador < maximo) {
    contador++;
    cadena += "<li>" + contador + "</li>";
}

cadena += "";

document.getElementById("elemento").innerHTML = cadena;
// switch

let numero1 = window.prompt("Indica el primer numero", "5");
let numero2 = window.prompt("Indica el segundo numero", "5");
const operador = window.prompt("Indica la operacion que desea realizar", "+");
let total;


switch (operador) {
    case "+":
        total = +numero1 + (+numero2);
        break;
    case "-":
        total = numero1 - numero2;
        break;
    case "*":
        total = numero1 * numero2;
        break;
    case "/":
        total = (numero2 != 0 ? numero1 / numero2 : 0);
        break;
    default:
        alert(`El caracter (${operador}) No es un operador valido`);
}

if (typeof total !== "undefined") {
    alert("El total es: " + total);
}

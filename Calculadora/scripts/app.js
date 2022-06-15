const display = document.getElementById("display");
const operacion = document.getElementById("operacion");
const longitudDisplay = 20;
let calcule = 0;
const operadores = ["+", "-", "*", "/"]

function setDisplay(button) {

    const valor = button.innerText;

    if (calcule === true) {
        limpiar();
    }

    if (display.value.length < longitudDisplay && !(valor == 0 && display.value === "")) {
        display.value += valor;
    }

    //if (valor == '+' || valor == '-' || valor == '*' || valor == '/') {
    if (operadores.indexOf(valor) != -1) {
        operacion.value += display.value;
        limpiar(false);
    }

}

function calcular() {
    operacion.value += display.value === "" ? 0 : display.value;
    const resultado = eval(operacion.value);
    display.value = resultado == "Infinity" || resultado == "-Infinity" ? "No se puede dividir por cero" : resultado.toFixed(2);
    calcule = true;
}

function limpiar(todo = true) {
    display.value = '';
    if (todo === true) {
        calcule = false;
        operacion.value = '';
    }


}




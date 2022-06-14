const display = document.getElementById("display");
const longitudDisplay = 20;
let calcule = 0;

function setDisplay(button) {

    const valor = button.innerText;

    if (calcule === true) {
        limpiar();
    }

    if (display.value.length < longitudDisplay && !(valor == 0 && display.value === "")) {
        display.value += valor;
    }
    console.log(button.innerText);
}

function calcular() {
    const resultado = eval(display.value)
    console.log(resultado);
    display.value = resultado.toFixed(2);
    calcule = true;
}

function limpiar() {
    calcule = false;
    display.value = '';
}




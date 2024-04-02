const cajatexto = document.getElementById("cajatexto");
const resultado = document.getElementById("resultado");
var cifra = "";
var acumulado = 0;
var sumar = true;
var restar = false;
var multi = false;
var divi = false;
function resetar() {
    cajatexto.value = "";
    cifra = "";
    resultado.value = "";
    acumulado = 0;
    sumar = true; 
    restar = false; 
    multi =  false; 
    divi  = false;  
}

function suma() {
    if (restar) {
        acumulado -= parseFloat(cifra);
    } else if (multi) {
        acumulado *= parseFloat(cifra);
    } else if (divi) {
        acumulado /= parseFloat(cifra);
    } else {
        acumulado += parseFloat(cifra);
    }
    resultado.value = acumulado;
    cifra = "";
    sumar = true;
    restar = false;
    multi = false;
    divi = false;
}

function resta() {
    if (sumar) {
        acumulado += parseFloat(cifra);
    } 
    else if (multi) {
        acumulado *= parseFloat(cifra);
    } else if (divi) {
        acumulado /= parseFloat(cifra);
    } 
    else {
        acumulado -= parseFloat(cifra);
    }
    resultado.value = acumulado;
    cifra = "";
    sumar = false;
    restar = true;
    multi = false;
    divi = false;
}

function multiplicacion() {
    if (sumar) {
        acumulado += parseFloat(cifra);
    } else if (restar) {
        acumulado -= parseFloat(cifra);
    } else if (divi) {
        acumulado /= parseFloat(cifra);
    } else {
        acumulado *= parseFloat(cifra);
    }
    resultado.value = acumulado;
    cifra = "";
    sumar = false;
    restar = false;
    multi = true;
    divi = false;
}



function division() {
    if (parseFloat(cifra) === 0) {
        resultado.value = "Error: división por cero";
    } else {
        if (sumar) {
            acumulado += parseFloat(cifra);
        } else if (restar) {
            acumulado -= parseFloat(cifra);
        } else if (multi) {
            acumulado *= parseFloat(cifra);
        } else {
            acumulado /= parseFloat(cifra);
        }
        
        resultado.value = acumulado;
    }
    
    cifra = "";
    sumar = false;
    restar = false;
    multi = false;
    divi = true; 
}



function igual() {
    var valorActual = parseFloat(cajatexto.value);
    if (sumar) {
        resultado.value = acumulado + valorActual;
    } else if (restar) {
        resultado.value = acumulado - valorActual;
    } else if (multi) {
        resultado.value = acumulado * valorActual;
    } else if (divi) {
        resultado.value = acumulado / valorActual;
    }
}

function mostrar(num) {
    cajatexto.value = cifra + num;
    cifra = cajatexto.value;
}
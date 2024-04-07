$(document).ready(function() {
    var crimenycastigo = {
        "Nombre": "Crimen y Castigo",
        "Autor": "Fiódor Dostoyevski",
        "Editorial": "Editorial XYZ",
        "Año": 1866,
        "Paginas": 671,

    };
    var almasEnElParamo = {
        "Nombre": "Almas en el páramo",
        "Autor": "José María Arguedas",
        "Editorial": "Editorial GHI",
        "Año": 1965,
        "Paginas": 312
    };
    
    var laConfesora = {
        "Nombre": "La confesora",
        "Autor": "Martín Blasco",
        "Editorial": "Editorial JKL",
        "Año": 2020,
        "Paginas": 432
    };
    
    var milenio = {
        "Nombre": "Milenio",
        "Autor": "Tom Holland",
        "Editorial": "Editorial MNO",
        "Año": 2021,
        "Paginas": 480
    };
    

    var datosclasico = $("#datos-libro-clasico");

    // Iterar sobre el objeto crimenycastigo y agregar cada dato como un párrafo al div
    for (var propiedad in crimenycastigo) {
        if (crimenycastigo.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + crimenycastigo[propiedad]);
            datosclasico.append(datoElemento);
        }
    }
    var datosclasico = $("#datos-libro-historico");

    // Iterar sobre el objeto crimenycastigo y agregar cada dato como un párrafo al div
    for (var propiedad in milenio) {
        if (milenio.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + milenio[propiedad]);
            datosclasico.append(datoElemento);
        }
    }
    var datosclasico = $("#datos-libro-drama");

    // Iterar sobre el objeto crimenycastigo y agregar cada dato como un párrafo al div
    for (var propiedad in almasEnElParamo) {
        if (almasEnElParamo.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + almasEnElParamo[propiedad]);
            datosclasico.append(datoElemento);
        }
    }
    var datosclasico = $("#datos-libro-fantasia");

    // Iterar sobre el objeto crimenycastigo y agregar cada dato como un párrafo al div
    for (var propiedad in laConfesora) {
        if (laConfesora.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + laConfesora[propiedad]);
            datosclasico.append(datoElemento);
        }
    }
});
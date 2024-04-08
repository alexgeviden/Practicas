$(document).ready(function(){

    $(".leer").on("click", function() {
        // Guardar una referencia al elemento que activó el evento de clic
        var $this = $(this);
    
        // Realizar la solicitud para verificar la sesión
        $.get("verificacion.php", function(data) {
            // Si el servidor devuelve "true", significa que el usuario ha iniciado sesión
            if (data === "true") {
                // Obtener la URL del PDF
                var pdfURL = $this.closest(".libro").find("a").attr("href");
                // Abrir el PDF en una nueva pestaña
                window.open(pdfURL, "_blank");
            } else {
                // Mostrar un mensaje de alerta si el usuario no ha iniciado sesión
                alert("Tienes que iniciar sesión");
            }
        });
    });
    
    
    
    $(".descargar").on("click", function(event) {
        // Guardar una referencia al botón que activó el evento de clic
        var $this = $(this);
    
        // Deshabilitar el botón para evitar clics repetidos
        $this.prop('disabled', true);
    
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();
    
        // Realizar la solicitud para verificar la sesión
        $.get("verificacion.php", function(data) {
            // Si el servidor devuelve "true", significa que el usuario ha iniciado sesión
            if (data === "true") {
                // Descargar el recurso asociado al botón
                window.location.href = $this.closest(".libro").find("a").attr("href");
            } else {
                // Mostrar un mensaje de alerta si el usuario no ha iniciado sesión
                alert("Tienes que iniciar sesión para descargar el libro.");
            }
    
            // Habilitar nuevamente el botón después de completar la verificación
            $this.prop('disabled', false);
        });
    });
    
// LIBROS CLASICOS 

    var crimenycastigo = {
        "Nombre": "Crimen y Castigo",
        "Autor": "Fiódor Dostoyevski",
        "Editorial": "Editorial XYZ",
        "Año": 1866,
        "Paginas": 671,
    
    };
    var iliada = {
        "Nombre": "La Ilíada",
        "Autor": "Homero",
        "Editorial": "Editorial ABC",
        "Año": "Siglo VIII a.C.",
        "Páginas": 683
    };
    
    var odisea = {
        "Nombre": "La Odisea",
        "Autor": "Homero",
        "Editorial": "Editorial DEF",
        "Año": "Siglo VIII a.C.",
        "Páginas": 725
    };
    
    var quijote = {
        "Nombre": "Don Quijote de la Mancha",
        "Autor": "Miguel de Cervantes",
        "Editorial": "Editorial GHI",
        "Año": 1605,
        "Páginas": 863
    };
    
    
    var datosclasico = $("#datos-libro1");
    
    // Introduccion de Datos del libro 
    for (var propiedad in crimenycastigo) {
        if (crimenycastigo.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + crimenycastigo[propiedad]);
            datosclasico.append(datoElemento);
        }
    }
    var datosclasico = $("#datos-libro2");
    
    // Introduccion de Datos del libro 
    for (var propiedad in iliada) {
        if (iliada.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + iliada[propiedad]);
            datosclasico.append(datoElemento);
        }
    }
    var datosclasico = $("#datos-libro3");
    
    // Introduccion de Datos del libro 
    for (var propiedad in odisea) {
        if (odisea.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + odisea[propiedad]);
            datosclasico.append(datoElemento);
        }
    }
    var datosclasico = $("#datos-libro4");
    
    // Introduccion de Datos del libro 
    for (var propiedad in quijote) {
        if (quijote.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + quijote[propiedad]);
            datosclasico.append(datoElemento);
        }
    }

    // LIBROS DE FANTASIA 

    var laConfesora = {
        "Nombre": "La Confesora",
        "Autor": "Isabel Allende",
        "Editorial": "Editorial ABC",
        "Año": 2018,
        "Páginas": 320
    };
    
    var elLodoMagico = {
        "Nombre": "El Lodo Mágico",
        "Autor": "Brandon Sanderson",
        "Editorial": "Editorial XYZ",
        "Año": 2015,
        "Páginas": 432
    };
    
    var laTumba = {
        "Nombre": "La Tumba",
        "Autor": "José Agustín",
        "Editorial": "Editorial DEF",
        "Año": 1964,
        "Páginas": 320
    };
    
    var losCienMilReinos = {
        "Nombre": "Los cien mil reinos",
        "Autor": "N.K. Jemisin",
        "Editorial": "Editorial GHI",
        "Año": 2010,
        "Páginas": 448
    };
    
    var datosfantasia = $("#datos-fantasia1");
    
    // Introduccion de Datos del libro 
    for (var propiedad in laConfesora) {
        if (laConfesora.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + laConfesora[propiedad]);
            datosfantasia.append(datoElemento);
        }
    }
    var datosfantasia = $("#datos-fantasia2");
    for (var propiedad in elLodoMagico) {
        if (elLodoMagico.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + elLodoMagico[propiedad]);
            datosfantasia.append(datoElemento);
        }
    }
    var datosfantasia = $("#datos-fantasia3");
    for (var propiedad in laTumba) {
        if (laTumba.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + laTumba[propiedad]);
            datosfantasia.append(datoElemento);
        }
    }
    var datosfantasia = $("#datos-fantasia4");
    for (var propiedad in losCienMilReinos) {
        if (losCienMilReinos.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + losCienMilReinos[propiedad]);
            datosfantasia.append(datoElemento);
        }
    }

    // DATOS DE LOS LIBROS HISTORICOS

    var losCeltas = {
        "Nombre": "Los Celtas",
        "Autor": "Jean Markale",
        "Editorial": "Editorial ABC",
        "Año": 1972,
        "Páginas": 320
    };
    
    var laMasoneria = {
        "Nombre": "La Masonería",
        "Autor": "Albert G. Mackey",
        "Editorial": "Editorial XYZ",
        "Año": 1878,
        "Páginas": 432
    };
    
    var himalaya = {
        "Nombre": "Himalaya",
        "Autor": "Erika Stokes",
        "Editorial": "Editorial DEF",
        "Año": 2004,
        "Páginas": 320
    };
    
    var milenio = {
        "Nombre": "Milenio",
        "Autor": "Tom Holland",
        "Editorial": "Editorial GHI",
        "Año": 2005,
        "Páginas": 448
    };
    var datoshistoricos = $("#datos-historicos1");
    for (var propiedad in milenio) {
        if (milenio.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + milenio[propiedad]);
            datoshistoricos.append(datoElemento);
        }
    }
    var datoshistoricos = $("#datos-historicos2");
    for (var propiedad in losCeltas) {
        if (losCeltas.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + losCeltas[propiedad]);
            datoshistoricos.append(datoElemento);
        }
    }
    var datoshistoricos = $("#datos-historicos3");
    for (var propiedad in himalaya) {
        if (himalaya.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + himalaya[propiedad]);
            datoshistoricos.append(datoElemento);
        }
    }
    var datoshistoricos = $("#datos-historicos4");
    for (var propiedad in laMasoneria) {
        if (laMasoneria.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + laMasoneria[propiedad]);
            datoshistoricos.append(datoElemento);
        }
    }

    //DATOS DE LOS LIBROS DE DRAMA

    var almasEnElParamo = {
        "Nombre": "Almas en el páramo",
        "Autor": "María Dueñas",
        "Editorial": "Editorial ABC",
        "Año": 2019,
        "Páginas": 384
    };
    
    var losDestrozos = {
        "Nombre": "Los destrozos",
        "Autor": "Juan Gabriel Vásquez",
        "Editorial": "Editorial XYZ",
        "Año": 2018,
        "Páginas": 320
    };
    
    var losTimadores = {
        "Nombre": "Los timadores",
        "Autor": "John Grisham",
        "Editorial": "Editorial DEF",
        "Año": 2020,
        "Páginas": 416
    };
    
    var laMalaSemilla = {
        "Nombre": "La mala semilla",
        "Autor": "Tess Gerritsen",
        "Editorial": "Editorial GHI",
        "Año": 2019,
        "Páginas": 320
    };

    var datosdrama = $("#datos-drama1");
    for (var propiedad in almasEnElParamo) {
        if (almasEnElParamo.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + almasEnElParamo[propiedad]);
            datosdrama.append(datoElemento);
        }
    }
    var datosdrama = $("#datos-drama2");
    for (var propiedad in losDestrozos) {
        if (losDestrozos.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + losDestrozos[propiedad]);
            datosdrama.append(datoElemento);
        }
    }
    var datosdrama = $("#datos-drama3");
    for (var propiedad in laMalaSemilla) {
        if (laMalaSemilla.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + laMalaSemilla[propiedad]);
            datosdrama.append(datoElemento);
        }
    }
    var datosdrama = $("#datos-drama4");
    for (var propiedad in losTimadores) {
        if (losTimadores.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + losTimadores[propiedad]);
            datosdrama.append(datoElemento);
        }
    }
});
    



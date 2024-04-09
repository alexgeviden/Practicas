$(document).ready(function() {
    // Scripts para el main 
    $(".despliegelibro").hide();
    
    var palabras = ["Lee", ", Aprende", ", Descarga" , ";)"];

    // Seleccionar el div donde se mostrarán las palabras
    var $textoTecleado = $('#texto-tecleado');

    // Mostrar las palabras secuencialmente
    function mostrarPalabrasSecuencialmente() {
        // Limpiar el contenido del div antes de mostrar las palabras
        $textoTecleado.empty();

        // Mostrar cada palabra en un span
        palabras.forEach(function(palabra, i) {
           
            var $span = $('<span>').text(palabra).hide(); 
            $textoTecleado.append($span);

            // Mostrar cada span con un pequeño retraso
            $span.delay(1000 * i).fadeIn(500); 
        });
    }

  
    mostrarPalabrasSecuencialmente();

    //SECCION CATEGORIAS 
    
   const textoscat = $("·categoria h3");
   const iconoscat = $("·categoria span");
    
   //Abrir categoria

    $(".categoria").on("mouseenter", function(){
    
    $(this).data("originalHeight", $(this).height());
    
    $(this).height(400);
   
    $(this).css("justify-content" ,  "flex-start")
    $(this).find("span").css("color" , "black");
    

    // Animación y ocultar el elemento en pantallas pequeñas
    if ($(window).width() <= 700) {
        $(this).find("#iconsmain").animate({ left: 50 }, 400, function() {
           
            $(this).css("display", "none");
        });
    } else {
        $(this).find("#iconsmain").animate({ left: 50 }, 400);
    }

$(this).find(".despliegelibro").fadeIn(600);
    
});

$(".categoria").on("mouseleave", function(){
  
    $(this).height(150);
    
   
    $(this).css("justify-content", "center");
    $(this).find("span").css("color", "#FADD6B");

   
    $(this).find("#iconsmain").animate({
        left: 0
    }, 400);
    $(this).find("#iconsmain").show();
   
    $(this).find(".despliegelibro").hide();
});;



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


    for (var propiedad in crimenycastigo) {
        if (crimenycastigo.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + crimenycastigo[propiedad]);
            datosclasico.append(datoElemento);
        }
    }
    var datosclasico = $("#datos-libro-historico");


    for (var propiedad in milenio) {
        if (milenio.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + milenio[propiedad]);
            datosclasico.append(datoElemento);
        }
    }
    var datosclasico = $("#datos-libro-drama");


    for (var propiedad in almasEnElParamo) {
        if (almasEnElParamo.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + almasEnElParamo[propiedad]);
            datosclasico.append(datoElemento);
        }
    }
    var datosclasico = $("#datos-libro-fantasia");


    for (var propiedad in laConfesora) {
        if (laConfesora.hasOwnProperty(propiedad)) {
            var datoElemento = $("<p>").text(propiedad + ": " + laConfesora[propiedad]);
            datosclasico.append(datoElemento);
        }
    }
});
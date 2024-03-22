function aparece1(){
    var x = document.querySelector( "#acerca" );
    if (x.style.display === "none") {  //Si el div está oculto lo muestro
        x.style.display = "block";
    } else {                         //Sino, lo oculto
        x.style.display = "none";
    }
}

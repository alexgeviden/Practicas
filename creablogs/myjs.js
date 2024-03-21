

        
   $(document).ready(function() {
           var min = 1000;
    var max = 9999;

    $()
    var_id = Math.floor(Math.random()*(max-min+1)+min)
    $("#imagen").change(function() {
        mostrarImagen(this);
    });

function incrustarvideo(){
    var codinsert = document.getElementById("video").value;
    var contenedorvideo = document.getElementById("video-yt");
    contenedorvideo.innerHTML = codinsert;
   
    
}
document.addEventListener("DOMContentLoaded", function() {
    var nota = document.getElementById("nota");
    var tooltip = document.getElementById("tooltip");

    
    nota.addEventListener("mouseover", function() {
        tooltip.style.display = "block";
    });

   
    nota.addEventListener("mouseout", function() {
        tooltip.style.display = "none";
    });
});




    $("#reset").click(function() {
        location.reload();
    });

    $("#enviar").click(function() {
        var var_dia = new Date().getDate();
        var var_mes = new Date().getMonth() + 1;
        var var_ano = new Date().getFullYear();
        var var_nombre = $("#nombre").val();
        var var_titulo = $("#titulo").val();
        var var_content = $("#contenido").val();
        var var_img = $("#imagen").val();
        var var_sub = $("#subtitulo").val();
        var var_vid = $("#video").val();

        var var_check = $("#avisolegal").prop('checked');
        if (!var_check) {
            alert("Debe aceptar la política de privacidad");
        if (var_nombre === "") {
            alert("Escriba su nombre");
            $("#dividir").show();
            $("#textos").hide();
        } else if (var_titulo === "") {
            alert("Escriba su título");
            $("#dividir").show();
            $("#textos").hide();
        } else if (var_content === "") {
            alert("Escriba su contenido");
            $("#dividir").show();
            $("#textos").hide();
        } else if (var_img === "") {
            alert("Sube una imagen / o una URL");
            $("#dividir").show();
            $("#textos").hide();
        } 
        } else {
            $("#textos").show();
            $("#dividir").hide();
            $("#texto1").text(var_titulo);
            $("#texto2").attr("src" , var_img);
            $("#texto3").text(var_nombre + "       " + var_dia + "/" + var_mes + "/" + var_ano);
            $("#texto6").text(var_sub);
            $("#texto4").text(var_content + ".");
            incrustarvideo();
            $("#texto5").text("BLOG ID: " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000));

          
        }
    });
});

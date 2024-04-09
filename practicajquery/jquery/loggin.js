$(document).ready(function(){

  
   
    $("#login-form").submit(function(event) {
    // Prevenir el envío del formulario por defecto
    event.preventDefault(); 
    // Obtener los datos del formulario
    var datosformulario = $(this).serialize();

    // Realizar una solicitud AJAX al script PHP
    $.post("logg.php", datosformulario, function(data) {
        if (data === "si") {
            // Mostrar el mensaje de bienvenida si el inicio de sesión fue exitoso
            $("#acceso").text("¡Inicio de sesión exitoso! Bienvenido, " + $("#username").val() + ".");
            
            
            $("#login-form").hide();
            setTimeout(function() {
                // Redireccionar a otra página
                window.location.href = "index.html"; 
            }, 2000);
        } else {
            // Mostrar un mensaje de error si el inicio de sesión no fue exitoso
            alert("¡Error de inicio de sesión! Por favor, verifica tu usuario y contraseña.");
        }
    });
});
});
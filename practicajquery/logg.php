<?php
$usuario = "Manolo";
$clave = "1234";

// Verificar si se enviaron datos mediante el método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    if (isset($_POST["username"]) && isset($_POST["password"])) {
        // Obtener los datos del formulario
        $username = $_POST["username"];
        $password = $_POST["password"];
      
            if ($usuario===$username and $clave === $password) {
                session_start();
                $_SESSION["loggedin"] = true;
                echo "si";}
            
    } else {
        // Mostrar un mensaje de error si no se recibieron los datos esperados
        echo "no";
    }
} else {
   
    echo "Error: No se recibieron datos mediante el método POST.";
}
?>

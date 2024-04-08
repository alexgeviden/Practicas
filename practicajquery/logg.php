<?php
$usuario = "Manolo";
$clave = "1234";
// Verificar si se enviaron datos mediante el método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar si se recibieron los datos del formulario
    if (isset($_POST["username"]) && isset($_POST["password"])) {
        // Obtener los datos del formulario
        $username = $_POST["username"];
        $password = $_POST["password"];

        // Aquí puedes realizar cualquier procesamiento adicional, como validar las credenciales del usuario, conectar a una base de datos, etc.
            if ($usuario===$username and $clave === $password) {
                session_start();
                $_SESSION["loggedin"] = true;
                echo "si";}
        // Ejemplo de salida de los datos recibidos
      
    } else {
        // Mostrar un mensaje de error si no se recibieron los datos esperados
        echo "no";
    }
} else {
    // Mostrar un mensaje de error si no se recibieron datos mediante el método POST
    echo "Error: No se recibieron datos mediante el método POST.";
}
?>

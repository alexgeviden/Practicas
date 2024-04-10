<?php
// Iniciar o reanudar la sesión
session_start();

// Verificar si el usuario ha iniciado sesión
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) {
    echo "true";
} else {
    echo "false";
}

?>
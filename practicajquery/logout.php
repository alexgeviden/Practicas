<?php
// Iniciar o reanudar la sesión
session_start();

// Destruir todas las variables de sesión
$_SESSION = array();

// Destruir la sesión
session_destroy();

// Redireccionar a la página de inicio o a donde desees
header("location: index.html");

exit;
?>

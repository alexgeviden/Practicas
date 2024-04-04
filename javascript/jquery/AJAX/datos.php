<?php

// Define el usuario y la contraseña válidos
$usuario_valido = "juan";
$contraseña_valida = "1234";

// Obtén los datos del formulario de inicio de sesión
$usuario_ingresado = isset($_POST['username']) ? $_POST['username'] : '';
$contraseña_ingresada = isset($_POST['password']) ? $_POST['password'] : '';

// Verifica si el usuario y la contraseña ingresados son válidos
if ($usuario_ingresado === $usuario_valido && $contraseña_ingresada === $contraseña_valida) {
    // Si son válidos, devuelve un mensaje de éxito
    echo "correcto";
} else {
    // Si no son válidos, devuelve un mensaje de error
    echo "¡Error de inicio de sesión! Por favor, verifica tu usuario y contraseña.";
}

?>

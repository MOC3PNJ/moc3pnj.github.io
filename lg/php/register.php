<?php
require_once('db_connect.php');

$data = json_decode(file_get_contents('php://input'), true);

$username = $conn->real_escape_string($data['username']);
$licencia = $conn->real_escape_string($data['licencia']);
$email = $conn->real_escape_string($data['email']);
$password = password_hash($data['password'], PASSWORD_DEFAULT);

// Validaciones
$errors = [];

// Verificar si el usuario ya existe
$result = $conn->query("SELECT usuario FROM usuarios WHERE usuario = '$username'");
if ($result->num_rows > 0) {
    $errors[] = "El nombre de usuario ya está registrado";
}

// Verificar si el correo ya existe
$result = $conn->query("SELECT correo FROM usuarios WHERE correo = '$email'");
if ($result->num_rows > 0) {
    $errors[] = "El correo electrónico ya está registrado";
}

// Verificar si la licencia ya existe
$result = $conn->query("SELECT licencia FROM usuarios WHERE licencia = '$licencia'");
if ($result->num_rows > 0) {
    $errors[] = "La licencia ya está registrada";
}

if (count($errors) === 0) {
    $sql = "INSERT INTO usuarios (usuario, licencia, correo, contrasena) 
            VALUES ('$username', '$licencia', '$email', '$password')";
            
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Error en el registro: ' . $conn->error]);
    }
} else {
    echo json_encode(['success' => false, 'error' => implode('<br>', $errors)]);
}

$conn->close();
?>

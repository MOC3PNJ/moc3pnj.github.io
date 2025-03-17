<?php
$host = 'sql306.infinityfree.com';
$dbname = 'if0_38542515_datauser';
$user = 'if0_38542515';
$pass = '32370953';

try {
    $conn = new mysqli($host, $user, $pass, $dbname);
    
    if ($conn->connect_error) {
        throw new Exception("Conexión fallida: " . $conn->connect_error);
    }
    
    $conn->set_charset("utf8");
    
} catch (Exception $e) {
    die(json_encode(['success' => false, 'error' => $e->getMessage()]));
}
?>

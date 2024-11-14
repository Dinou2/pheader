<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


$host = 'localhost';    // Adresse du serveur
$dbname = 'portfolio_dinou21'; // Nom de la base de données
$username = 'root';   // Nom d'utilisateur de la base de données
$password = '';      // Mot de passe de la base de données

try {
    // Création d'une instance PDO
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);

    // Configuration de PDO pour afficher les erreurs d'exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connexion réussie !";
} catch (PDOException $e) {
    // En cas d'erreur de connexion
    echo "Erreur de connexion : " . $e->getMessage();
}



?>
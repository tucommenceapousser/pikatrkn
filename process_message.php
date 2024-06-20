<?php
// Démarrer la session si nécessaire
session_start();

// Vérifier si un message a été envoyé
if (isset($_POST['input']) && !empty($_POST['input'])) {
    $message = htmlspecialchars($_POST['input']);
    $userId = $_SESSION['user_id'] ?? 'anonymous'; // Remplacer par une logique d'authentification appropriée

    // Format du message : timestamp, user_id, message
    $formattedMessage = date('Y-m-d H:i:s') . " | " . $userId . " | " . $message . PHP_EOL;

    // Enregistrer le message dans un fichier texte
    file_put_contents('messages.txt', $formattedMessage, FILE_APPEND);

    // Rediriger vers la page de chat
    header("Location: index.php");
    exit;
}

// Vérifier si une photo a été envoyée
if (isset($_FILES['photo']) && $_FILES['photo']['error'] == 0) {
    $photo = $_FILES['photo'];
    $allowedTypes = ['image/jpeg', 'image/png'];
    $maxFileSize = 2 * 1024 * 1024; // 2MB

    if (in_array($photo['type'], $allowedTypes) && $photo['size'] <= $maxFileSize) {
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($photo['name']);

        if (move_uploaded_file($photo['tmp_name'], $uploadFile)) {
            $userId = $_SESSION['user_id'] ?? 'anonymous'; // Remplacer par une logique d'authentification appropriée
            $formattedPhoto = date('Y-m-d H:i:s') . " | " . $userId . " | Photo: " . $uploadFile . PHP_EOL;

            // Enregistrer le chemin de la photo dans un fichier texte
            file_put_contents('photos.txt', $formattedPhoto, FILE_APPEND);

            // Rediriger vers la page de chat
            header("Location: index.php");
            exit;
        } else {
            echo "Erreur lors du téléchargement de la photo.";
        }
    } else {
        echo "Type de fichier ou taille non valide.";
    }
}
?>
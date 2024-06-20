document.addEventListener('DOMContentLoaded', (event) => {
    const sendMessageButton = document.getElementById('sendMessageButton');
    const messageInput = document.getElementById('messageInput');
    const chatForm = document.getElementById('chatForm');

    sendMessageButton.addEventListener('click', () => {
        // Ajoutez ici votre code pour envoyer le message
        // Exemple : utiliser fetch pour envoyer une requête AJAX
        chatForm.submit();
    });

    const photoIcon = document.querySelector('.zmdi-camera');
    const photoInput = document.getElementById('photoInput');

    photoIcon.addEventListener('click', () => {
        photoInput.click();
    });

    photoInput.addEventListener('change', () => {
        // Ajoutez ici votre code pour gérer le téléchargement de la photo
    });
});
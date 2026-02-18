// Fonction pour demander le nom d'utilisateur
function demanderNomUtilisateur() {
    // Vérifier si un nom d'utilisateur est déjà stocké dans le localStorage
    let username = localStorage.getItem('username');

    // Si aucun nom n'est trouvé, on le demande à l'utilisateur
    if (!username) {
        username = prompt("Veuillez entrer votre nom d'utilisateur :");

        // Si l'utilisateur entre un nom, on le stocke dans le localStorage
        if (username) {
            localStorage.setItem('username', username);
        }
    }

    // Appel à la fonction pour afficher le nom d'utilisateur
    afficherNomUtilisateur();
}

// Fonction pour afficher le nom d'utilisateur dans un emplacement donné
function afficherNomUtilisateur() {
    // Récupérer le nom d'utilisateur depuis le localStorage
    let username = localStorage.getItem('username');

    // Sélectionner l'élément HTML où le nom sera affiché
    const emplacementNom = document.getElementById('emplacement-username');

    // Si l'utilisateur a bien un nom stocké, l'afficher
    if (username && emplacementNom) {
        emplacementNom.textContent = `Bienvenue, ${username}!`;
    }
}

// Appeler la fonction au chargement de la page
window.onload = demanderNomUtilisateur;

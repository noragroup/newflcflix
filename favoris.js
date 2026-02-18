// Fonction pour afficher les favoris
function displayFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let favoriteList = document.getElementById('favorite-list');

    favoriteList.innerHTML = ''; // Efface le contenu avant de le recharger

    favorites.forEach((fav, index) => {
        // Créer un conteneur pour chaque favori
        let favContainer = document.createElement('div');
        favContainer.style.display = "inline-block";
        favContainer.style.margin = "10px";

        // Créer un lien <a> avec l'image du favori
        let link = document.createElement('a');
        link.href = fav.pageUrl;

        let img = document.createElement('img');
        img.src = fav.imageUrl;
        img.width = 100;

        // Ajouter l'image au lien, et le lien au conteneur
        link.appendChild(img);
        favContainer.appendChild(link);

        // Ajouter un bouton de suppression
        let removeButton = document.createElement('button');
        removeButton.textContent = "Retirer";
        removeButton.style.display = "block";
        removeButton.onclick = () => removeFromFavorites(index);

        // Ajouter le bouton de suppression au conteneur
        favContainer.appendChild(removeButton);

        // Ajouter le conteneur à la liste des favoris
        favoriteList.appendChild(favContainer);
    });
}

// Fonction pour retirer un favori
function removeFromFavorites(index) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.splice(index, 1); // Supprime le favori du tableau
    localStorage.setItem('favorites', JSON.stringify(favorites)); // Met à jour localStorage
    displayFavorites(); // Recharge la liste des favoris
}

// Charger la liste des favoris au chargement de la page
window.onload = displayFavorites;

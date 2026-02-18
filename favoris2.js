// Fonction pour afficher les favoris
function displayFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let favoriteList = document.getElementById('favorite-list');

    favoriteList.innerHTML = ''; // Efface le contenu avant de le recharger

    favorites.forEach((fav, index) => {
        let favContainer = document.createElement('div');
        favContainer.style.display = "inline-block";
        favContainer.style.margin = "10px";

        // Créer un lien <a> avec l'image du favori
        let link = document.createElement('a');
        link.href = fav.pageUrl;

        let img = document.createElement('img');
        img.src = fav.imageUrl;
        img.width = 100;

        link.appendChild(img);
        favContainer.appendChild(link);

        // Créer le bouton de suppression avec SVG
        let removeButton = document.createElement('button');
        removeButton.classList.add("button");
        removeButton.onclick = () => removeFromFavorites(index);
        removeButton.innerHTML = `
            <svg viewBox="0 0 448 512" class="svgIcon" width="20" height="20">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
            </svg>
        `;

        favContainer.appendChild(removeButton);
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

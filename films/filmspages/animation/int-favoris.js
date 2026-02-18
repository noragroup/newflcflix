// Fonction pour ajouter un film aux favoris
function addToFavorites(pageUrl, imageUrl) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Vérifier si le film est déjà dans les favoris
    if (!favorites.some(fav => fav.pageUrl === pageUrl)) {
        // Ajouter un objet représentant le favori
        favorites.push({ pageUrl: pageUrl, imageUrl: imageUrl });
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

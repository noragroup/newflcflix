// Sauvegarde les réglages par défaut dans le localStorage
function saveDefaultSettings() {
    const defaultSettings = {
        backgroundColor: getComputedStyle(document.body).backgroundColor,
        titleColor: getComputedStyle(document.getElementById('main-title')).color,
        textPosition: getComputedStyle(document.getElementById('description-text')).marginLeft,
        textColor: getComputedStyle(document.getElementById('description-text')).color,
        imageSrc: document.getElementById('main-image').src
    };

    localStorage.setItem('defaultSettings', JSON.stringify(defaultSettings));
}

// Applique un pré-réglage de modifications
function applyPreset() {
    document.body.style.backgroundColor = '#282c34'; // Couleur du fond
    document.getElementById('main-title').style.color = '#61dafb'; // Couleur du titre
    document.getElementById('description-text').style.marginLeft = '100px'; // Déplacer le texte
    document.getElementById('description-text').style.color = '#ffffff'; // Changer la couleur du texte
    document.getElementById('main-image').src = 'img/themes/FLC-Flix-Rétro_logo.png'; // Nouvelle image

    savePresetToLocalStorage(); // Sauvegarder dans le localStorage
}

// Sauvegarde les modifications actuelles dans le localStorage
function savePresetToLocalStorage() {
    const modifications = {
        backgroundColor: document.body.style.backgroundColor,
        titleColor: document.getElementById('main-title').style.color,
        textPosition: document.getElementById('description-text').style.marginLeft,
        textColor: document.getElementById('description-text').style.color,
        imageSrc: document.getElementById('main-image').src
    };

    localStorage.setItem('pagePreset', JSON.stringify(modifications));
}

// Applique les réglages sauvegardés depuis le localStorage
function loadPresetFromLocalStorage() {
    const savedPreset = JSON.parse(localStorage.getItem('pagePreset'));
    
    if (savedPreset) {
        document.body.style.backgroundColor = savedPreset.backgroundColor;
        document.getElementById('main-title').style.color = savedPreset.titleColor;
        document.getElementById('description-text').style.marginLeft = savedPreset.textPosition;
        document.getElementById('description-text').style.color = savedPreset.textColor;
        document.getElementById('main-image').src = savedPreset.imageSrc;
    }
}

// Réinitialise la page aux réglages par défaut
function resetToDefault() {
    const defaultSettings = JSON.parse(localStorage.getItem('defaultSettings'));

    if (defaultSettings) {
        document.body.style.backgroundColor = defaultSettings.backgroundColor;
        document.getElementById('main-title').style.color = defaultSettings.titleColor;
        document.getElementById('description-text').style.marginLeft = defaultSettings.textPosition;
        document.getElementById('description-text').style.color = defaultSettings.textColor;
        document.getElementById('main-image').src = defaultSettings.imageSrc;

        // Supprimer le preset personnalisé du localStorage
        localStorage.removeItem('pagePreset');
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Sauvegarder les réglages par défaut au premier chargement
    if (!localStorage.getItem('defaultSettings')) {
        saveDefaultSettings();
    }

    // Charger les pré-réglages s'ils existent
    loadPresetFromLocalStorage();

    // Appliquer les pré-réglages au clic du bouton
    document.getElementById('apply-preset').addEventListener('click', applyPreset);

    // Réinitialiser les réglages par défaut au clic du bouton
    document.getElementById('reset-preset').addEventListener('click', resetToDefault);
});

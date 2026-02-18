let slideIndex = 1;
let slides = document.getElementsByClassName("slide");
let slideInterval;

// Fonction pour afficher les slides
function showSlides(n) {
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Fonction pour changer de slide
function plusSlides(n) {
    clearInterval(slideInterval);  // Arrête l'intervalle automatique
    slideIndex += n;
    showSlides(slideIndex);

    // Redémarre l'intervalle automatique après 10 secondes
    slideInterval = setInterval(() => plusSlides(1), 10000);
}

// Lancement initial des slides
showSlides(slideIndex);

// Démarrage de l'intervalle automatique
slideInterval = setInterval(() => plusSlides(1), 10000);

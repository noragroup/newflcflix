document.addEventListener("DOMContentLoaded", function(){

    const nights = document.getElementById("FlcFlixNights");

    // Petite pause avant lancement
    setTimeout(() => {
        nights.classList.add("expanded");
    }, 800);

    // Fermeture après 5 secondes
    setTimeout(() => {
        nights.classList.remove("expanded");
    }, 6000);

});
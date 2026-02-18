let film = document.getElementById('moviesNews');
let filmDiv = document.getElementById('moviesSlides');
let serie = document.getElementById('seriesNews');
let serieDiv = document.getElementById('seriesSlides');
let seasons = document.getElementById('seasonsNews');
let seasonsDiv = document.getElementById('seasonsSlides');

film.addEventListener('click', function() {
    filmDiv.style.display = "inherit";
    serieDiv.style.display = "none";
    seasonsDiv.style.display = "none";
})

serie.addEventListener('click', function() {
    serieDiv.style.display = "inherit";
    filmDiv.style.display = "none";
    seasonsDiv.style.display = "none";
})

seasons.addEventListener('click', function() {
    seasonsDiv.style.display = "inherit";
    filmDiv.style.display = "none";
    serieDiv.style.display = "none";
})
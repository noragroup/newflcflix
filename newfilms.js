let movies = document.getElementById('moviesPosters');
let moviesPosters = document.getElementById('posters0');
let movie1 = document.querySelector('.movie1');
let movie2 = document.querySelector('.movie2');
let movie3 = document.querySelector('.movie3');
let movie4 = document.querySelector('.movie4');
let film1 = document.getElementById('film1');
let film2 = document.getElementById('film2');
let film3 = document.getElementById('film3');
let film4 = document.getElementById('film4');

movie1.addEventListener('click', function() {
    let moviesSrc = moviesPosters.getAttribute('src');
    if (moviesSrc === "img/posters/films/action/bac_nord.jpg", "img/posters/films/action/black_adam.jpg", "img/posters/films/action/bullet_train_poster.jpg") {
        film1.style.display = "inherit";
        film2.style.display = "none";
        film3.style.display = "none";
        film4.style.display = "none";
        movie1.style.width = "170px";
        movie1.style.height = "250px";
        movie2.style.width = "130px";
        movie2.style.height = "200px";

        movie2.style.width = "130px";
        movie2.style.height = "200px";
        movie3.style.width = "130px";
        movie3.style.height = "200px";
        movie4.style.width = "130px";
        movie4.style.height = "200px";
    }
})

movie2.addEventListener('click', function() {
    let moviesSrc = moviesPosters.getAttribute('src');
    if (moviesSrc === "img/posters/films/action/argylle.jpg", "img/posters/films/action/black_adam.jpg", "img/posters/films/action/bullet_train_poster.jpg") {
        film2.style.display = "inherit";
        film1.style.display = "none";
        film3.style.display = "none";
        film4.style.display = "none";
        movie2.style.width = "170px";
        movie2.style.height = "250px";
        movie1.style.width = "130px";
        movie1.style.height = "200px";

        movie1.style.width = "130px";
        movie1.style.height = "200px";
        movie3.style.width = "130px";
        movie3.style.height = "200px";
        movie4.style.width = "130px";
        movie4.style.height = "200px";
    }
})

movie3.addEventListener('click', function() {
    let moviesSrc = moviesPosters.getAttribute('src');
    if (moviesSrc === "img/posters/films/action/argylle.jpg", "img/posters/films/action/black_adam.jpg", "img/posters/films/action/bullet_train_poster.jpg") {
        film3.style.display = "inherit";
        film1.style.display = "none";
        film2.style.display = "none";
        film4.style.display = "none";
        movie3.style.width = "170px";
        movie3.style.height = "250px";

        movie1.style.width = "130px";
        movie1.style.height = "200px";
        movie2.style.width = "130px";
        movie2.style.height = "200px";
        movie4.style.width = "130px";
        movie4.style.height = "200px";
    }
})

movie4.addEventListener('click', function() {
    let moviesSrc = moviesPosters.getAttribute('src');
    if (moviesSrc === "img/posters/films/action/argylle.jpg", "img/posters/films/action/black_adam.jpg", "img/posters/films/action/bullet_train_poster.jpg") {
        film4.style.display = "inherit";
        film1.style.display = "none";
        film2.style.display = "none";
        film3.style.display = "none";
        movie4.style.width = "170px";
        movie4.style.height = "250px";

        movie1.style.width = "130px";
        movie1.style.height = "200px";
        movie2.style.width = "130px";
        movie2.style.height = "200px";
        movie3.style.width = "130px";
        movie3.style.height = "200px";
    }
})
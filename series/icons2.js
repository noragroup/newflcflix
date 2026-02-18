let home = document.getElementById('home');
let search = document.getElementById('search');
let homeSrc = home.getAttribute('src');
let searchSrc = search.getAttribute('src');

home.addEventListener('click', function() {
    if(homeSrc === "img/icons/home.png"){
        home.setAttribute('src', 'img/icons/home-selected.png');
        search.setAttribute('src', 'img/icons/search.png');
    } else{
        home.setAttribute('src', 'img/icons/home.png');
    }
});

search.addEventListener('click', function() {
    if(searchSrc === "img/icons/search.png"){
        search.setAttribute('src', 'img/icons/search-selected.png');
        home.setAttribute('src', 'img/icons/home.png');
    } else{
        search.setAttribute('src', 'img/icons/search.png');
    }
});
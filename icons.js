let home = document.getElementById('home');
let search = document.getElementById('search');
let patchNote = document.getElementById('patchNote');
let infos = document.getElementById('more');
let homeSrc = home.getAttribute('src');
let searchSrc = search.getAttribute('src');
let patchNoteSrc = patchNote.getAttribute('src');
let infosSrc = infos.getAttribute('src');

home.addEventListener('click', function() {
    if(homeSrc === "img/icons/home-selected.png"){
        home.setAttribute('src', 'img/icons/home-selected.png');
        search.setAttribute('src', 'img/icons/search.png');
        patchNote.setAttribute('src', 'img/icons/patch-note.png');
        infos.setAttribute('src', 'img/icons/infos.png');
    } else{
        home.setAttribute('src', 'img/icons/home.png');
    }
});

search.addEventListener('click', function() {
    if(searchSrc === "img/icons/search.png"){
        search.setAttribute('src', 'img/icons/search-selected.png');
        home.setAttribute('src', 'img/icons/home.png');
        patchNote.setAttribute('src', 'img/icons/patch-note.png');
        infos.setAttribute('src', 'img/icons/infos.png');
    } else{
        search.setAttribute('src', 'img/icons/search.png');
    }
});

patchNote.addEventListener('click', function() {
    if(patchNoteSrc === "img/icons/patch-note.png"){
        patchNote.setAttribute('src', 'img/icons/patch-note-selected.png');
        home.setAttribute('src', 'img/icons/home.png');
        search.setAttribute('src', 'img/icons/search.png');
        infos.setAttribute('src', 'img/icons/infos.png');
    } else{
        patchNote.setAttribute('src', 'img/icons/patch-note.png');
    }
});

infos.addEventListener('click', function() {
    if(infosSrc === "img/icons/infos.png"){
        infos.setAttribute('src', 'img/icons/infos-selected.png');
        home.setAttribute('src', 'img/icons/home.png');
        search.setAttribute('src', 'img/icons/search.png');
        patchNote.setAttribute('src', 'img/icons/patch-note.png');
    } else{
        infos.setAttribute('src', 'img/icons/infos.png');
    }
});
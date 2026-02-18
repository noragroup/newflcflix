let box = document.querySelector('.slideshow-container');
let filmsSelect = document.getElementById('FilmsSelect');
let filmsDiv = document.getElementById('news-films');
let seriesSelect = document.getElementById('SeriesSelect');
let seriesDiv = document.getElementById('news-series');
let docsSelect = document.getElementById('DocsSelect');
let docsDiv = document.getElementById('news-docs');

filmsSelect.addEventListener('click', function() {
    let boxId = box.getAttribute("id");
    if (boxId === "news-series", "news-docs") {
        filmsDiv.style.display = "inherit";
        seriesDiv.style.display = "none";
        docsDiv.style.display = "none";
    }
});

seriesSelect.addEventListener('click', function() {
    let boxId = box.getAttribute("id");
    if (boxId === "news-films", "news-docs") {
        seriesDiv.style.display = "inherit";
        filmsDiv.style.display = "none";
        docsDiv.style.display = "none";
    }
});

docsSelect.addEventListener('click', function() {
    let boxId = box.getAttribute("id");
    if (boxId === "news-series", "news-docs") {
        docsDiv.style.display = "inherit";
        seriesDiv.style.display = "none";
        filmsDiv.style.display = "none";
    }
});
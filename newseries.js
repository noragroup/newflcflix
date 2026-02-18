let series = document.getElementById('seriesPosters');
let seriesPosters = document.getElementById('posters1');
let serie1 = document.querySelector('.serie1');
let serie2 = document.querySelector('.serie2');
let serie3 = document.querySelector('.serie3');
let serie4 = document.querySelector('.serie4');
let series1 = document.getElementById('series1');
let series2 = document.getElementById('series2');
let series3 = document.getElementById('series3');
let series4 = document.getElementById('series4');

serie1.addEventListener('click', function() {
    let seriesSrc = seriesPosters.getAttribute('src');
    if (seriesSrc === "img/posters/series/american_horror_story.jpg", "img/posters/series/amphibia.jpg", "img/posters/series/action/arcane_poster.jpg") {
        series1.style.display = "inherit";
        series2.style.display = "none";
        series3.style.display = "none";
        series4.style.display = "none";
        serie1.style.width = "170px";
        serie1.style.height = "250px";
        serie2.style.width = "130px";
        serie2.style.height = "200px";

        serie2.style.width = "130px";
        serie2.style.height = "200px";
        serie3.style.width = "130px";
        serie3.style.height = "200px";
        serie4.style.width = "130px";
        serie4.style.height = "200px";
    }
})

serie2.addEventListener('click', function() {
    let seriesSrc = seriesPosters.getAttribute('src');
    if (seriesSrc === "img/posters/series/1899.jpg", "img/posters/series/amphibia.jpg", "img/posters/series/action/arcane_poster.jpg") {
        series2.style.display = "inherit";
        series1.style.display = "none";
        series3.style.display = "none";
        series4.style.display = "none";
        serie2.style.width = "170px";
        serie2.style.height = "250px";
        serie1.style.width = "130px";
        serie1.style.height = "200px";

        serie1.style.width = "130px";
        serie1.style.height = "200px";
        serie3.style.width = "130px";
        serie3.style.height = "200px";
        serie4.style.width = "130px";
        serie4.style.height = "200px";
    }
})

serie3.addEventListener('click', function() {
    let seriesSrc = seriesPosters.getAttribute('src');
    if (seriesSrc === "img/posters/series/1899.jpg", "img/posters/series/american_horror_story.jpg", "img/posters/series/action/arcane_poster.jpg") {
        series3.style.display = "inherit";
        series1.style.display = "none";
        series2.style.display = "none";
        series4.style.display = "none";
        serie3.style.width = "170px";
        serie3.style.height = "250px";

        serie1.style.width = "130px";
        serie1.style.height = "200px";
        serie2.style.width = "130px";
        serie2.style.height = "200px";
        serie4.style.width = "130px";
        serie4.style.height = "200px";
    }
})

serie4.addEventListener('click', function() {
    let seriesSrc = seriesPosters.getAttribute('src');
    if (seriesSrc === "img/posters/series/1899.jpg", "img/posters/series/american_horror_story.jpg", "img/posters/series/action/amphibia.jpg") {
        series4.style.display = "inherit";
        series1.style.display = "none";
        series2.style.display = "none";
        series3.style.display = "none";
        serie4.style.width = "170px";
        serie4.style.height = "250px";

        serie1.style.width = "130px";
        serie1.style.height = "200px";
        serie2.style.width = "130px";
        serie2.style.height = "200px";
        serie3.style.width = "130px";
        serie3.style.height = "200px";
    }
})
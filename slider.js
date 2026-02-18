const series = [
    {
        background: "series/img/posters/background-logos/1899 background.jpg",
        logo: "series/img/posters/background-logos/1899 logo.png",
        link: "series/1899.html"
    },
    {
        background: "series/img/posters/background-logos/AHS background.jpg",
        logo: "series/img/posters/background-logos/AHS logo.png",
        link: "series/ahs.html"
    },
    {
        background: "series/img/posters/background-logos/Arcane background.jpg",
        logo: "series/img/posters/background-logos/Arcane logo.png",
        link: "series/arcane.html"
    },
    {
        background: "series/img/posters/background-logos/BecomingKarlLagerfeld background.jpeg",
        logo: "series/img/posters/background-logos/BecomingKarlLagerfeld logo.png",
        link: "series/becomingkarllagerfeld.html"
    },
    {
        background: "series/img/posters/background-logos/BetterCallSaul background.jpg",
        logo: "series/img/posters/background-logos/BetterCallSaul logo.png",
        link: "series/bettercallsaul.html"
    }
];

const slider = document.getElementById("slider");
let current = 0;
const interval = 12000;

const slides = [];

series.forEach(serie => {
    const bg = document.createElement("div");
    bg.className = "background";
    bg.style.backgroundImage = `url('${serie.background}')`;

    const logo = document.createElement("div");
    logo.className = "logo-container";

    logo.innerHTML = `
        <img src="img/nouveau/SERIES1.png" class="flcflix-series">
        <a href="${serie.link}" target="_blank">
            <img src="${serie.logo}" class="serie-logo" alt="Logo de la série">
        </a>
    `;

    slider.appendChild(bg);
    slider.appendChild(logo);

    slides.push({ bg, logo });
});

slides[0].bg.classList.add("active");
slides[0].logo.classList.add("active");

setInterval(() => {
    slides[current].bg.classList.remove("active");
    slides[current].logo.classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].bg.classList.add("active");
    slides[current].logo.classList.add("active");
}, interval);
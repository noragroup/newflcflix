let month = document.getElementById('calendarMonth');
const current = "Juillet:"
const nextMonth = "Aout:"
let day1 = document.getElementById("day1");
let calendar1 = document.getElementById("calendar1");
let day2 = document.getElementById("day2");
let calendar2 = document.getElementById("calendar2");
let day3 = document.getElementById("day3");
let calendar3 = document.getElementById("calendar3");
let day4 = document.getElementById("day4");
let calendar4 = document.getElementById("calendar4");
let day5 = document.getElementById("day5");
let calendar5 = document.getElementById("calendar5");
let day6 = document.getElementById("day6");
let calendar6 = document.getElementById("calendar6");

day1.style.color = "#9900ff"

day1.addEventListener('click', function() {
    calendar1.style.display = "initial";
    calendar2.style.display = "none";
    calendar3.style.display = "none";
    calendar4.style.display = "none";
    calendar5.style.display = "none";
    calendar6.style.display = "none";
    if(month.textContent != current) {
        month.textContent = current
    };
    day1.style.color = "#9900ff"
    day2.style.color = "#33ccff"
    day3.style.color = "#33ccff"
    day4.style.color = "#33ccff"
    day5.style.color = "#33ccff"
    day6.style.color = "#33ccff"
});

day2.addEventListener('click', function() {
    calendar1.style.display = "none";
    calendar2.style.display = "initial";
    calendar3.style.display = "none";
    calendar4.style.display = "none";
    calendar5.style.display = "none";
    calendar6.style.display = "none";
    if(month.textContent != current) {
        month.textContent = current
    };
    day1.style.color = "#33ccff"
    day2.style.color = "#9900ff"
    day3.style.color = "#33ccff"
    day4.style.color = "#33ccff"
    day5.style.color = "#33ccff"
    day6.style.color = "#33ccff"
});

day3.addEventListener('click', function() {
    calendar1.style.display = "none";
    calendar2.style.display = "none";
    calendar3.style.display = "initial";
    calendar4.style.display = "none";
    calendar5.style.display = "none";
    calendar6.style.display = "none";
    if(month.textContent != current) {
        month.textContent = current
    };
    day1.style.color = "#33ccff"
    day2.style.color = "#33ccff"
    day3.style.color = "#9900ff"
    day4.style.color = "#33ccff"
    day5.style.color = "#33ccff"
    day6.style.color = "#33ccff"
});

day4.addEventListener('click', function() {
    calendar1.style.display = "none";
    calendar2.style.display = "none";
    calendar3.style.display = "none";
    calendar4.style.display = "initial";
    calendar5.style.display = "none";
    calendar6.style.display = "none";
    if(month.textContent != current) {
        month.textContent = current
    };
    day1.style.color = "#33ccff"
    day2.style.color = "#33ccff"
    day3.style.color = "#33ccff"
    day4.style.color = "#9900ff"
    day5.style.color = "#33ccff"
    day6.style.color = "#33ccff"
});

day5.addEventListener('click', function() {
    calendar1.style.display = "none";
    calendar2.style.display = "none";
    calendar3.style.display = "none";
    calendar4.style.display = "none";
    calendar5.style.display = "initial";
    calendar6.style.display = "none";
    if(month.textContent === current) {
        month.textContent = nextMonth
    };
    day1.style.color = "#33ccff"
    day2.style.color = "#33ccff"
    day3.style.color = "#33ccff"
    day4.style.color = "#33ccff"
    day5.style.color = "#9900ff"
    day6.style.color = "#33ccff"
});

day6.addEventListener('click', function() {
    calendar1.style.display = "none";
    calendar2.style.display = "none";
    calendar3.style.display = "none";
    calendar4.style.display = "none";
    calendar5.style.display = "none";
    calendar6.style.display = "initial";
    day1.style.color = "#33ccff"
    day2.style.color = "#33ccff"
    day3.style.color = "#33ccff"
    day4.style.color = "#33ccff"
    day5.style.color = "#33ccff"
    day6.style.color = "#9900ff"
});
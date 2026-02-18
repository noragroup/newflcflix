document.addEventListener("DOMContentLoaded", function () {

  const filmDateString = "20/02/2026";
  const startHour = 22;
  const endHour = 6;

  const movie = document.querySelector(".movie");
  const night = document.querySelector(".night");
  const weeknight = document.getElementById("weeknight");
  const nextweek = document.getElementById("nextweek");
  const countdown = document.querySelector(".countdown");

  function parseDateFR(dateString) {
    const [day, month, year] = dateString.split("/");
    return new Date(year, month - 1, day);
  }

  function updateDisplay() {

    const now = new Date();
    const filmDate = parseDateFR(filmDateString);

    const nightStart = new Date(filmDate);
    nightStart.setHours(startHour, 0, 0, 0);

    const nightEnd = new Date(nightStart);
    nightEnd.setDate(nightEnd.getDate() + 1);
    nightEnd.setHours(endHour, 0, 0, 0);

    const isBeforeNight = now < nightStart;
    const isNightTime = now >= nightStart && now < nightEnd;
    const isAfterNight = now >= nightEnd;

    if (isBeforeNight) {

      if (movie) movie.style.display = "none";
      if (nextweek) nextweek.style.display = "none";
      if (weeknight) weeknight.style.display = "block";
      if (night) night.style.display = "block";

      const diff = nightStart - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      if (countdown) {
        countdown.textContent =
          `⏳ Début dans : ${days}j ${hours
            .toString()
            .padStart(2, "0")}h ${minutes
            .toString()
            .padStart(2, "0")}m ${seconds
            .toString()
            .padStart(2, "0")}s`;
      }
    }

    else if (isNightTime) {

      if (movie) movie.style.display = "block";
      if (weeknight) weeknight.style.display = "block";
      if (night) night.style.display = "block";
      if (nextweek) nextweek.style.display = "none";

      if (countdown) {
        countdown.textContent = "🌙 Disponible jusqu'à 6h 🌙";
      }
    }

    else if (isAfterNight) {

      if (movie) movie.style.display = "none";
      if (weeknight) weeknight.style.display = "none";
      if (night) night.style.display = "none";

      if (nextweek) {
        nextweek.style.display = "block";
        nextweek.textContent =
          "Rendez-vous bientôt pour la prochaine FLC Flix Night!";
      }

      if (countdown) {
        countdown.textContent = "";
      }
    }
  }

  updateDisplay();
  setInterval(updateDisplay, 1000);

});

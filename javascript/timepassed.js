function getTimePassed() {
    const start = new Date("1990-01-01T00:00:00Z");
    const now = new Date();
    const diffMs = now - start;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365.25);

    return { years, days, hours, minutes, seconds };
}

function formatTimePassed(tp) {
    return `${tp.years} years, ${tp.days % 365} days, ${tp.hours % 24} hours, ${tp.minutes % 60} minutes, ${tp.seconds % 60} seconds`;
}

function updateTime() {
    const current = getTimePassed();
    const formatted = formatTimePassed(current);

    if (formatted !== lastFormatted) {
        document.getElementById("timePassed").textContent = formatted;
        lastFormatted = formatted;
    }
    else {}
}

let lastFormatted = "";

updateTime(); // Initial call - nije ovo skupo po processor
setInterval(updateTime, 60 * 1000); // Check every minute

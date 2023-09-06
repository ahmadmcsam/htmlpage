function updateDateTime() {
    const datetimeElement = document.getElementById("datetime");
    const now = new Date();
    datetimeElement.textContent = now.toLocaleString();
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();

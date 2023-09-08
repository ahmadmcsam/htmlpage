
function updateDateTime() {
    const datetimeElement = document.getElementById("datetime");
    const now = new Date();
    datetimeElement.textContent = now.toLocaleString();
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();





document.addEventListener("DOMContentLoaded", function () {
    // Update Hostname
    document.getElementById("hostname").textContent = window.location.hostname;

    // Update IP Address
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("ip").textContent = data.ip;
        });

    // Update Date and Time
    const dateTimeElement = document.getElementById("datetime");
    setInterval(function () {
        const now = new Date();
        dateTimeElement.textContent = now.toLocaleString();
    }, 1000);

    // Update Uptime
    // You may need to customize this part based on your server environment.

    // Update Browser Info
    document.getElementById("browser").textContent = `Browser: ${navigator.userAgent}`;
});

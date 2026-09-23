// WHY ATTEND - Show / Hide Details

// NEWSLETTER SUBSCRIBE

const subscribeBtn = document.getElementById("subscribeBtn");
const newsletterEmail = document.getElementById("newsletterEmail");
const subscribeMessage = document.getElementById("subscribeMessage");

if (subscribeBtn && newsletterEmail && subscribeMessage) {

    subscribeBtn.addEventListener("click", function () {

        const email = newsletterEmail.value.trim();

        if (email === "") {
            subscribeMessage.textContent = "Please enter your email address.";
            return;
        }

        if (!email.includes("@")) {
            subscribeMessage.textContent = "Please enter a valid email.";
            return;
        }

        subscribeMessage.textContent =
            "Thank you! You are subscribed to our updates.";

        newsletterEmail.value = "";
    });

}

document.addEventListener("DOMContentLoaded", function () {

    const attendCards = document.querySelectorAll(".attend-card");

    attendCards.forEach(function (card) {

        const image = card.querySelector(".attend-image");
        const bullets = card.querySelector(".attend-bullets");

        if (image && bullets) {

            image.style.cursor = "pointer";

            image.addEventListener("click", function () {

                bullets.style.display =
                    bullets.style.display === "block" ? "none" : "block";

            });

        }

    });

});
function updateFooterClock() {

    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    document.getElementById("liveTime").textContent =
        `${hours}:${minutes}:${seconds}`;

    document.getElementById("liveAmPm").textContent = ampm;
}

updateFooterClock();

setInterval(updateFooterClock, 1000);
function updateFooterClock() {
    const now = new Date();

    const pakistanTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Karachi",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    }).formatToParts(now);

    let hour = "";
    let minute = "";
    let second = "";
    let period = "";

    pakistanTime.forEach(part => {
        if (part.type === "hour") hour = part.value;
        if (part.type === "minute") minute = part.value;
        if (part.type === "second") second = part.value;
        if (part.type === "dayPeriod") period = part.value;
    });

    const timeElement = document.getElementById("liveTime");
    const ampmElement = document.getElementById("liveAmPm");

    if (timeElement) {
        timeElement.textContent = `${hour}:${minute}:${second}`;
    }

    if (ampmElement) {
        ampmElement.textContent = period;
    }
}

updateFooterClock();
setInterval(updateFooterClock, 1000);
/* =========================================
   WHY ATTEND - IMAGE CLICK
========================================= */

const attendCards = document.querySelectorAll(".attend-card");

attendCards.forEach(card => {

    const image = card.querySelector(".attend-image");
    const text = card.querySelector(".attend-content > p");
    const bullets = card.querySelector(".attend-bullets");

    function toggleBullets() {

        bullets.classList.toggle("show");
        card.classList.toggle("active");

    }

    image.addEventListener("click", toggleBullets);
    text.addEventListener("click", toggleBullets);
});

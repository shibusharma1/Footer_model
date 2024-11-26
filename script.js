// Countdown Timer Logic
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1); // Set target date to 1 day from now

function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.querySelector(".countdown").innerHTML = "Sale has ended!";
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

// Close Button Logic
document.getElementById("closeBtn").addEventListener("click", function () {
    const promoFooter = document.getElementById("promoFooter");
    promoFooter.style.display = "none";
});

// Initialize Timer
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initialize the timer immediately

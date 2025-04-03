
// let startingMinutes = document.getElementById("userTimerLen");
const startingMinutes = 45;
let time = startingMinutes * 60; // converts into minutes

const countdownEl = document.getElementById("countdown");

// setInterval(updateCountdown, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const startTimer = document.getElementById('startTimer');
    // const pauseTimer = document.getElementById('pauseTimer');

    startTimer.addEventListener('click', () => {
        setInterval(updateCountdown, 1000);
    })

    // pause and reset not yet implemented
    resetTimer.addEventListener('click', () => {
        clearInterval(updateCountdown, 0);
    })
})

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}
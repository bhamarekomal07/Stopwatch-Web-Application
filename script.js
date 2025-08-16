let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.innerText = `${h}:${m}:${s}`;
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) { seconds = 0; minutes++; }
            if (minutes === 60) { minutes = 0; hours++; }
            updateDisplay();
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0; minutes = 0; hours = 0;
    updateDisplay();
    laps.innerHTML = "";
}

function lapTime() {
    if (isRunning) {
        let li = document.createElement("li");
        li.textContent = display.innerText;
        laps.appendChild(li);
    }
}

document.getElementById("startBtn").addEventListener("click", startStopwatch);
document.getElementById("stopBtn").addEventListener("click", stopStopwatch);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);
document.getElementById("lapBtn").addEventListener("click", lapTime);

updateDisplay();

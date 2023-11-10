let timer;
let seconds = 0;

function startStopwatch() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function stopStopwatch() {
    clearInterval(timer);
    timer = null;
}

function resetStopwatch() {
    stopStopwatch();
    seconds = 0;
    updateTimerDisplay();
}

function updateTimer() {
    seconds++;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
    document.getElementById('timer').innerText = formattedTime;
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}

const butt = document.getElementById("b");
const t = document.getElementById("a");

function showtime() {
    const curtime = new Date();
    const time = `${curtime.getHours()}:${curtime.getMinutes()}:${curtime.getSeconds()}`;
    t.innerText = time;
}

let it = setInterval(showtime, 1000);  
let running = true; 

butt.addEventListener("click", () => {
    if (running) {
        clearInterval(it);  
        running = false;
        butt.innerText = "Start";   
    } else {
        it = setInterval(showtime, 1000);  
        running = true;
        butt.innerText = "Stop";   
    }
});
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let interval = null;

function updateDisplay() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    display.innerText = 
        `${hrs.toString().padStart(2,'0')}:` +
        `${mins.toString().padStart(2,'0')}:` +
        `${secs.toString().padStart(2,'0')}`;
}

function startTimer() {
    if (interval) return;  

    interval = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

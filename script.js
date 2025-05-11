let isRunning = false;
let interval;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const zone1 = document.getElementById('zone1');
const zone2 = document.getElementById('zone2');

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(changeColors, 1000); // schimbă culorile la fiecare 1 secundă
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    isRunning = false;
});

function changeColors() {
    if (zone1.style.backgroundColor === 'red') {
        zone1.style.backgroundColor = 'blue';
        zone2.style.backgroundColor = 'red';
    } else {
        zone1.style.backgroundColor = 'red';
        zone2.style.backgroundColor = 'blue';
    }
}

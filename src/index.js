
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let timerId = null;

const randomIntegerFromInterval = (min=0, max=colors.length) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', startChange);

stopBtn.addEventListener('click', stopChangeBodyBg);

function changeBgBody() {
        document.body.style.backgroundColor = `${colors[randomIntegerFromInterval()]}`;
        startBtn.disabled = true;   
};

function startChange() {
    timerId = setInterval(changeBgBody, 1000);
};

function stopChangeBodyBg() {
        clearInterval(timerId);
    startBtn.disabled = false;
};
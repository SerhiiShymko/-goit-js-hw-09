const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');
let timerId = null;

btnStop.disabled = true;
// btnStop.setAttribute('disabled', false);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;

  // btnStart.setAttribute('disabled', false);
  // btnStop.removeAttribute('disabled', false);
  timerId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  btnStop.disabled = true;
  btnStart.disabled = false;

  // btnStop.setAttribute('disabled', false);
  // btnStart.removeAttribute('disabled');
  clearInterval(timerId);
});

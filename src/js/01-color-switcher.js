const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
  bodyColor.style.backgroundColor = getRandomHexColor();

  console.log(bodyColor.style.backgroundColor);
});

btnStop.addEventListener('click', () => {
  bodyColor.style.backgroundColor = getRandomHexColor();

  console.log(bodyColor.style.backgroundColor);
});

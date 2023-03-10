const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');
// let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// btnStart.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// btnStop.addEventListener('click', () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// btnStart.addEventListener('click', () => {
//   const timerId = setTimeout(getRandomHexColor, 3000);
//   bodyColor.style.backgroundColor = getRandomHexColor();
//   console.log(bodyColor.style.backgroundColor);
// });

// btnStop.addEventListener('click', () => {
//   bodyColor.style.backgroundColor = getRandomHexColor();

//   console.log(bodyColor.style.backgroundColor);
// });

setTimeout(() => {
  bodyColor.style.backgroundColor = getRandomHexColor();
});

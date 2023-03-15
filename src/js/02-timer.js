import '../css/common.css';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
document.body.style.backgroundColor = '#ffcc99';

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  calendar: document.querySelector('#datetime-picker'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

refs.btnStart.disabled = true;

let selectedDate = null;

flatpickr(refs.calendar, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Report.failure('Please choose a date in the future');
    } else {
      selectedDate = selectedDates[0].getTime();
      refs.btnStart.disabled = false;
    }
    console.log(selectedDates[0]);
  },
});

const timer = {
  start() {
    intervalId = setInterval(() => {
      currentDate = Date.now();
      const deltaTime = selectedDate - currentDate;
      updateTimerface(convertMs(deltaTime));
      refs.btnStart.disabled = true;
      refs.calendar.disabled = true;

      if (deltaTime <= 1000) {
        this.stop();
        Report.info('Timer stopped!');
      }
    }, 1000);
  },

  stop() {
    startBtn.disabled = true;
    flatpickrInput.disabled = false;
    clearInterval(intervalId);
    return;
  },
};

refs.btnStart.addEventListener('click', () => {
  timer.start();
});

function updateTimerface({ days, hours, minutes, seconds }) {
  refs.dataDays.textContent = `${days}`;
  refs.dataHours.textContent = `${hours}`;
  refs.dataMinutes.textContent = `${minutes}`;
  refs.dataSeconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

// const calendar = document.querySelector('#datetime-picker');
// const startBtn = document.querySelector('[data-start-timer]');
// startBtn.disabled = true;

// Report.info(
//   '👋 Greeting, my Friend!',
//   'Please, choose a date and click on start',
//   'Okay'
// );

// flatpickr(calendar, {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0].getTime() < Date.now()) {
//       Report.failure(
//         '🥺 Ooops...',
//         'Please, choose a date in the future and remember: "Knowledge rests not upon truth alone, but upon error also." - Carl Gustav Jung',
//         'Okay'
//       );
//     } else {
//       Report.success(
//         '🥰 Congratulation! Click on start!',
//         '"Do not try to become a person of success but try to become a person of value." <br/><br/>- Albert Einstein',
//         'Okay'
//       );
//       startBtn.disabled = false;
//       const setTimer = () => {
//         selectedDate = selectedDates[0].getTime();
//         timer.start();
//       };

//       startBtn.addEventListener('click', setTimer);
//     }
//   },
// });

// const timer = {
//   rootSelector: document.querySelector('.timer'),
//   start() {
//     intervalId = setInterval(() => {
//       startBtn.disabled = true;
//       calendar.disabled = true;
//       currentDate = Date.now();
//       const delta = selectedDate - currentDate;

//       if (delta <= 0) {
//         this.stop();
//         Report.info(
//           '👏 Congratulation! Timer stopped!',
//           'Please, if you want to start timer, choose a date and click on start or reload this page',
//           'Okay'
//         );
//         return;
//       }
//       const { days, hours, minutes, seconds } = this.convertMs(delta);
//       this.rootSelector.querySelector('[data-days]').textContent =
//         this.addLeadingZero(days);
//       this.rootSelector.querySelector('[data-hours]').textContent =
//         this.addLeadingZero(hours);
//       this.rootSelector.querySelector('[data-minutes]').textContent =
//         this.addLeadingZero(minutes);
//       this.rootSelector.querySelector('[data-seconds]').textContent =
//         this.addLeadingZero(seconds);
//     }, TIMER_DELAY);
//   },

//   stop() {
//     clearInterval(intervalId);
//     this.intervalId = null;
//     startBtn.disabled = true;
//     calendar.disabled = false;
//   },

//   convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     const days = this.addLeadingZero(Math.floor(ms / day));
//     const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
//     const minutes = this.addLeadingZero(
//       Math.floor(((ms % day) % hour) / minute)
//     );
//     const seconds = this.addLeadingZero(
//       Math.floor((((ms % day) % hour) % minute) / second)
//     );

//     return { days, hours, minutes, seconds };
//   },

//   addLeadingZero(value) {
//     return String(value).padStart(2, 0);
//   },
// };

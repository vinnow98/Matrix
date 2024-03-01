let workCountdownMinutes = 25;
let workCountdownSeconds = "00";
let breakCountdownMinutes = 5;
let breakCountdownSeconds = "00";

const editTime = (action) => {
  if (action == "minusWork") {
    workCountdownMinutes--;
  } else if (action == "plusWork") {
    workCountdownMinutes++;
  } else if (action == "minusBreak") {
    breakCountdownMinutes--;
  } else if (action == "plusBreak") {
    breakCountdownMinutes++;
  }
  disableButtons();
  const timeWork = document.querySelector(".time-work");
  const timeBreak = document.querySelector(".time-break");
  timeWork.innerHTML = `${workCountdownMinutes}:${workCountdownSeconds}`;
  timeBreak.innerHTML = `${breakCountdownMinutes}:${breakCountdownSeconds}`;
};

const disableButtons = () => {
  const addWork = document.querySelector(".add-work");
  const minusWork = document.querySelector(".minus-work");
  const addBreak = document.querySelector(".add-break");
  const minusBreak = document.querySelector(".minus-break");

  workCountdownMinutes >= 25
    ? (addWork.disabled = true)
    : (addWork.disabled = false);
  workCountdownMinutes <= 1
    ? (minusWork.disabled = true)
    : (minusWork.disabled = false);
  breakCountdownMinutes >= 5
    ? (addBreak.disabled = true)
    : (addBreak.disabled = false);
  breakCountdownMinutes <= 1
    ? (minusBreak.disabled = true)
    : (minusBreak.disabled = false);
};

const clock = document.querySelector(".border-clock");
let pause = true;
let clockMinutes;
let clockSeconds;
let timer;
let firstStart = false;
//need both because of pause func
let workStarted = false;
let breakStarted = false;

clock.addEventListener("click", () => {
  if (pause == false) {
    pause = true;
    clearInterval(timer);
    return;
  }

  if (!firstStart) {
    workStarted = true;
    firstStart = true;
    clockMinutes = workCountdownMinutes;
    clockSeconds = workCountdownSeconds;
  }
  startCountdown(clockMinutes, clockSeconds);
  pause = false;
});

const rectangleBlock = document.querySelector(".block-rectangle");
const oldRectHeight = 300;
let rectHeight = oldRectHeight;
let initialCountdownminutes;
let rectMovingRatio;

const startCountdown = (min, sec) => {
  const display = document.querySelector(".display");
  if (!initialCountdownminutes) {
    initialCountdownminutes = min;
    rectMovingRatio = oldRectHeight / (initialCountdownminutes * 60);
  }
  clockMinutes = min;
  clockSeconds = sec;
  if (workStarted) {
    display.innerHTML = `Work!`;
    display.style.color = `red`;
    setTimer("work");
  } else if (breakStarted) {
    display.innerHTML = `Break!`;
    display.style.color = `blue`;
    setTimer("break");
  }
};

const setTimer = (mode) => {
  timer = setInterval(() => {
    if (clockMinutes == 0 && clockSeconds == 0) {
      clearInterval(timer);
      initialCountdownminutes = null;
      if (workStarted) {
        workStarted = false;
        breakStarted = true;
        startCountdown(breakCountdownMinutes, breakCountdownSeconds);
      } else if (breakStarted) {
        breakStarted = false;
        workStarted = true;
        startCountdown(workCountdownMinutes, workCountdownSeconds);
      }
    }
    if (clockSeconds == 0) {
      clockMinutes--;
      clockSeconds = 60;
    }
    clockSeconds--;
    clockSeconds < 10 ? (clockSeconds = `0${clockSeconds}`) : clockSeconds;

    if (mode == "work") {
      rectHeight -= rectMovingRatio;
      rectangleBlock.style.height = `${rectHeight}px`;
    } else if (mode == "break") {
      rectHeight += rectMovingRatio;
      rectangleBlock.style.height = `${rectHeight}px`;
    }
    clock.innerHTML = `${clockMinutes}:${clockSeconds}`;
  }, 1000);
};

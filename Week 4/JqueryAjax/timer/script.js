let timerRunning = false;
let timer;
let hours;
let minutes;
let seconds;

$(".start").click(function () {
  if (timerRunning) {
    return;
  }
  hours = parseInt($(".hours").val());
  minutes = parseInt($(".minutes").val());
  seconds = parseInt($(".seconds").val());
  updateTime(hours, minutes, seconds);

  if (hours + minutes + seconds == 0) {
    return;
  }

  let outOfBounds = false;
  $(".hours,.minutes,.seconds").each(function () {
    let value = $(this).val();
    let max = parseInt($(this).attr("max"));
    let min = parseInt($(this).attr("min"));

    if (value < min || value > max || isNaN(parseInt(value))) {
      let className = $(this).attr("class").split(" ")[1];
      alert(`${className} is out of bounds!`);
      outOfBounds = true;
      return;
    }
  });
  if (outOfBounds) {
    return;
  }
  startTimer(hours, minutes, seconds);
});

function startTimer(hours, minutes, seconds) {
  timerRunning = true;

  timer = setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else if (hours > 0) {
      hours--;
      minutes = 59;
      seconds = 59;
    } else {
      const audio = new Audio("done.wav");
      audio.play();
      timerRunning = false;
      clearInterval(timer);
    }

    updateTime(hours, minutes, seconds);
  }, 100);
}

$(".reset").click(function () {
  clearInterval(timer);
  timerRunning = false;
  hours = parseInt($(".hours").val());
  minutes = parseInt($(".minutes").val());
  seconds = parseInt($(".seconds").val());
  updateTime(hours, minutes, seconds);
});

function updateTime(hours, minutes, seconds) {
  $("#timer").html(
    `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
  );
}
function formatTime(timeUnit) {
  return timeUnit > 9 ? timeUnit : "0" + timeUnit;
}

const currentTime = document.querySelector(".para");
const btnClicked = document.querySelector(".btn-container");

let sec = 0;
let min = 0;
let hrs = 0;
let startWatch;

function displayTime(hrs, min, sec) {
  currentTime.innerHTML = `${hrs < 10 ? `0${hrs}` : hrs}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function startTimer() {
  startWatch = setInterval(() => {
    sec++;
    if (sec > 59) {
      sec = 0;
      min++;
      if (min > 59) {
        min = 0;
        hrs++;
      }
    }
    displayTime(hrs, min, sec);
  }, 1000);
}

function HandleButtonClick(e) {
  const btnValue = e.target.innerHTML;
  if (btnValue == "Start") {
    startTimer();
  } else if (btnValue == "Stop") {
    clearInterval(startWatch);
  } else if (btnValue == "Reset") {
    clearInterval(startWatch);
    hrs = min = sec = 0;
    displayTime(hrs, min, sec);
  }
}

btnClicked.addEventListener("click", HandleButtonClick);

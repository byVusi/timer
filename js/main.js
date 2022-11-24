import { userInput, inputHours, inputMinutes, inputSeconds, clockHours, clockMinutes, clockSeconds, startBtn, otherBtn } from "./modules/getElements.mjs";
import { format } from "./modules/formatting.mjs";
import { printClock } from "./modules/printClock.mjs";
import { resetInput } from "./modules/resetInput.mjs";

function formatAll() {
  format(clockHours, hours);
  format(clockMinutes, minutes)
  format(clockSeconds, seconds)
}

function resetClock() {
  seconds = 0;
  minutes = 0;
  hours = 0;
}

function startCountdown() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  if (minutes < 0) {
    minutes = 59;
    hours--;
  }
  if (hours < 0) {
   resetClock();
  }
  formatAll();
}

function stopCountdown() {
  clearInterval(refreshIntervalID);
}

function resetCountdown() {
  resetClock();
  formatAll();
  resetInput();
}

let hours, minutes, seconds, refreshIntervalID;

//As the input changes so will the clock output
printClock();


startBtn.addEventListener("click", () => {
  hours = inputHours.value;
  minutes = inputMinutes.value;
  seconds = inputSeconds.value;
  if (hours != 0 || minutes != 0 || seconds != 0) {
    startCountdown();
    refreshIntervalID = setInterval(startCountdown, 1000);
    resetInput();
    startBtn.disabled = true;
    otherBtn.className = "stop-btn";
    otherBtn.innerText = "Stop";
    otherBtn.addEventListener("click", ()=> {
      stopCountdown();
      resetClock();
      formatAll();
      otherBtn.className = "clear-btn";
      otherBtn.innerText = "Clear";
      userInput.style.visibility = "visible";
      startBtn.disabled = false;
     });
    userInput.style.visibility = "hidden";
  }
 });

 otherBtn.addEventListener("click", ()=> {
  resetCountdown();
 })
 
 userInput.scrollIntoView();
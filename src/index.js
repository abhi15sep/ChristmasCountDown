//import "./styles.css";
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const time = document.querySelector(".time"),
  bg = document.querySelector(".bg");

function checkTimeLeft(t1, t2) {
  const days = Math.floor((t1 - t2) / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    ((t1 - t2) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(((t1 - t2) % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor(((t1 - t2) % (1000 * 60)) / 1000);
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    time.innerHTML = `Merry Christmas!!!`;
  } else {
    time.innerHTML = `${days} Days ${hours < 10 ? `0${hours}` : `${hours}`}
    :${minutes < 10 ? `0${minutes}` : `${minutes}`}
    :${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
  }
}
function getTime() {
  // Don't delete this.
  const curDay = new Date(new Date().getTime() + NINE_HOURS_MILLISECONDS);
  const xmasDay = new Date(`${curDay.getFullYear()}-12-24:00:00:00+0900`);
  checkTimeLeft(xmasDay.getTime(), curDay.getTime());
}
function init() {
  setInterval(getTime, 1000);
}
init();

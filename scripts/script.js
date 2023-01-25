//elements
const dateEl = document.querySelector(".date-container");
const timeEl = document.querySelector(".time-container");

// functions
// date

function toGetDate() {
  let date = new Date();
  let today = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  today = today < 10 ? "0" + today : today;
  month = month < 10 ? "0" + month : month;

  dateEl.innerHTML = `  <span>${today} -</span>
  <span>${month} -</span>
  <span>${year}</span>`;
}

toGetDate();

// time
function toGetTime() {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();
  let period = "AM";

  hours = hours === 0 ? (hours = 12) : hours;
  period = hours > 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours < 10 ? `0${hours}` : hours;
  mins = mins < 10 ? `0${mins}` : mins;
  sec = sec < 10 ? `0${sec}` : sec;

  timeEl.innerHTML = `<span>${hours} :</span>
  <span>${mins} :</span>
  <span>${sec} :</span>
  <span>${period}</span>`;
}

setInterval(toGetTime, 1000);

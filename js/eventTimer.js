let dateOfEvent = new Date("2024-12-26").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let diff = dateOfEvent - dateNow;

  let days = diff / (1000 * 60 * 60 * 24); // NUMBER DAY AND SOME MILE SECONDS
  let hours = (diff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60; // NUMBER OF THAT MILE SECONDS
  let mins = (diff % (1000 * 60 * 60)) / 1000 / 60; // NUMBER OF THAT MILE SECONDS
  let secs = (diff % (1000 * 60)) / 1000; // NUMBER OF THAT MILE SECONDS
  document.querySelector(".events .day h1").innerHTML = Math.floor(days);
  document.querySelector(".events .hour h1").innerHTML = Math.floor(hours);
  document.querySelector(".events .minute h1").innerHTML = Math.floor(mins);
  document.querySelector(".events .second h1").innerHTML = Math.floor(secs);
  // console.log(hours);
}, 1000);

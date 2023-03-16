let par = document.querySelector(".scroll-par");
let btn = document.querySelector(".scroll-top");
let megaBtn = document.querySelector(".mega-btn");
let width = document.querySelector(".scroll-par .width");
let skillsSection = document.querySelector(".skills");
let spans = document.querySelectorAll(".skills span");

window.onscroll = () => {
  ///////////////// go to up btn feature //////////////////////////
  if (
    document.documentElement.scrollTop >= document.documentElement.clientHeight
  ) {
    btn.style.right = "37px";
  } else {
    btn.style.right = "-137px";
  }
  ///////////////// end go to up btn feature//////////////////////////
  ///////////////// start full progress bar animation//////////////////////////
  if (window.scrollY > skillsSection.offsetTop - 300) {
    // console.log(skillsSection.offsetTop);
    spans.forEach((s) => {
      s.style.width = s.dataset.width;
    });
  } else {
    spans.forEach((s) => {
      s.style.width = 0;
    });
  }
  ///////////////// end full progress bar animation//////////////////////////
  ///////////////// scroll bar progress feature//////////////////////////
  let scrollTop = document.documentElement.scrollTop;
  let scroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  width.style.width = `${(scrollTop / scroll) * 100}% `;
  ///////////////// scroll bar progress feature //////////////////////////
};

///////////////////////////////  mega btn function click feature /////////////////////////////////
document.addEventListener("click", function (e) {
  if (e.target.href == "http://127.0.0.1:5500/index.html#otherlinks") {
    document.querySelector(".mega-btn .mega").classList.toggle("active");
  } else {
    document.querySelector(".mega-btn .mega").classList.remove("active");
  }
});
/////////////////////////////// end mega btn function click feature /////////////////////////////////

///////////////////////////////  start button go to up page feature /////////////////////////////////
btn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
/////////////////////////////// end button go to up page feature /////////////////////////////////

/////////////////////////////// add Event feature ///////////////////////////////////////////
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

/////////////////////////////// end Event feature ///////////////////////////////////////////

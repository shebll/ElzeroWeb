let par = document.querySelector(".scroll-par");
let btn = document.querySelector(".scroll-top");
let megaBtn = document.querySelector(".mega-btn");
let width = document.querySelector(".scroll-par .width");
let skillsSection = document.querySelector(".skills");
let statsSection = document.querySelector(".stats");
let testSection = document.querySelector(".testim");
let workSection = document.querySelector(".work");
let stars = document.querySelectorAll(".testim .holder .card .rate i");
let statBoxes = document.querySelectorAll(".stats .box h1");
let spans = document.querySelectorAll(".skills span");
let boxes = document.querySelectorAll(".video .box");
let images = document.querySelectorAll(".video .image img");
let labels = document.querySelectorAll(".video  .image label");
let shuffleBtn = document.querySelector(".video .container .holder .menu > i ");
let cards = document.querySelectorAll(".work .container .holder .right .card");

let flag = false;
// console.log(cards);
/////////////////// work section add taps feature ///////////////////////////
cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("active");
    });
    card.classList.add("active");
  });
});
/////////////////// end  work section add taps feature ///////////////////////////

/////////////////// video section shuffle btn feature ///////////////////////////
shuffleBtn.onclick = () => {
  let random = Math.floor(Math.random() * boxes.length);

  for (let index = 0; index < boxes.length; index++) {
    images[index].classList.remove("active");
    boxes[index].classList.remove("active");
    labels[index].classList.remove("active");
  }
  images[random].classList.add("active");
  boxes[random].classList.add("active");
  labels[random].classList.add("active");
};
///////////////////end video section shuffle btn feature ///////////////////////////

//////////////////////////stars on team feature  add  /////////////////////////////
// let teamObj = {
//   index: 0,
//   starCount: 0,
// };

// let arrayOfObject = [];
// teamObj.index = 1;
// arrayOfObject.push(teamObj);
// teamObj.index = 1;
// arrayOfObject.push(teamObj);
// console.log(arrayOfObject);
stars.forEach((star, i) => {
  star.addEventListener("click", () => {
    let num = +star.dataset.num;
    if (star.classList.contains("far")) {
      for (let index = i - num; index < i; index++) {
        stars[index].classList.remove("far");
        stars[index].classList.add("filled", "fas");
      }
      star.classList.remove("far");
      star.classList.add("filled", "fas");
    } else {
      // star.classList.remove("filled", "fas");
      // star.classList.add("far");
      for (let index = i + 1; index < i + 5 - num; index++) {
        stars[index].classList.remove("filled", "fas");
        stars[index].classList.add("far");
      }
    }
  });
});

////////////////////////// end stars on team feature  add  /////////////////////////////

/////////////////loader feature add and animation on landing on window load /////////////////////////////
window.onload = function () {
  window.alert("this is a dummy data");
  shuffleBtn.click();
  document.querySelector("#loading").classList.add("hide");
  let x = setInterval(() => {
    document.querySelector(".landing .container .image").style.left = "0px";
    document.querySelector(".landing .container .text").style.transform =
      "scale(1)";
    document.querySelector("#loading").style.display = "none";
  }, 1000);
  let y = setInterval(() => {
    document.querySelector(".landing ").style.overflow = "Initial";
    document.querySelector(".landing .container .image").style.filter =
      "blur(0px)";
    document.querySelector(".landing .container .text").style.filter =
      "blur(0px)";
  }, 1400);

  // clearInterval(x);
};
/////////// end loader feature add and animation on landing on window load  /////////////////////////////

//////////////////////////images taps in video section /////////////////////////////
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log(box.classList[0]);
    images.forEach((img) => {
      img.classList.remove("active");
    });
    labels.forEach((l) => {
      l.classList.remove("active");
    });
    images[--box.classList[0]].classList.add("active");
    labels[--box.classList[0]].classList.add("active");
    boxes.forEach((box) => {
      box.classList.remove("active");
    });
    box.classList.add("active");
  });
});
// console.log(boxes);
//////////////////////////end images taps in video section /////////////////////////////

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

  ///////////////// start ( stats section ) count to data set feature//////////////////////////
  if (window.scrollY > statsSection.offsetTop - 300) {
    if (!flag) {
      statBoxes.forEach((statBox) => {
        let counter = setInterval(() => {
          statBox.innerHTML++;
          if (statBox.innerHTML == statBox.parentElement.dataset.number) {
            clearInterval(counter);
            // console.log("done");
          }
        }, 3000 / statBox.parentElement.dataset.number);
      });
      flag = true;
    }
  } else {
  }
  ///////////////// end ( stats section ) count to data set feature//////////////////////////

  ///////////////// start full progress bar animation and animation on image (skills)//////////////////////////
  if (window.scrollY > skillsSection.offsetTop - 300) {
    // console.log(skillsSection.offsetTop);
    document.querySelector(".skills .container .image").style.right = "0px";
    document.querySelector(".skills .container .image").style.transform =
      "scale(1)";
    let y = setInterval(() => {
      document.querySelector(".skills .container .image").style.filter =
        "blur(0px)";
    }, 600);
    spans.forEach((s) => {
      s.style.width = s.dataset.width;
    });
  }
  ///////////////// end full progress bar animation and animation on image (skills)//////////////////////////

  ///////////////// animation on image (work section) //////////////////////////
  if (window.scrollY > workSection.offsetTop - 300) {
    let y = setInterval(() => {
      document.querySelector(
        ".work .container .holder > .image"
      ).style.transform = "scale(1)";
      document.querySelector(".work .container .holder > .image").style.filter =
        "blur(0px)";
    }, 600);
  }
  ///////////////// end animation on image (work section) //////////////////////////

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
  console.log(e.target.href);

  if (
    e.target.href == "http://127.0.0.1:5500/#otherlinks" ||
    e.target.href == "https://shebll.github.io/Template_Three/#otherlinks"
  ) {
    document.querySelector(".mega-btn .mega").classList.toggle("active");
    // console.log("s");
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

/////////////////////////////// add Event feature ( count down timer  )///////////////////////////////////////////
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
/////////////////////////////// end Event feature ( count down timer  )///////////////////////////////////////////
/////////////////////////////// image scroll dragging feature ( team section)///////////////////////////////////////////

let holderTeam = document.querySelector(".team .holder");
console.log(holderTeam);
let isDargStart = false,
  prevPageX,
  prevScrollLeft;
let dargStart = (e) => {
  isDargStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = holderTeam.scrollLeft;
};
let dragging = (e) => {
  if (!isDargStart) return;
  e.preventDefault();
  let diff = e.pageX - prevPageX;
  holderTeam.scrollLeft = prevScrollLeft - diff;
};
let dargEnd = () => {
  isDargStart = false;
};
holderTeam.addEventListener("mousedown", dargStart);
holderTeam.addEventListener("mousemove", dragging);
holderTeam.addEventListener("mouseup", dargEnd);
/////////////////////////////// image scroll dragging feature ( team section)///////////////////////////////////////////

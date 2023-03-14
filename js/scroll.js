let par = document.querySelector(".scroll-par");
let btn = document.querySelector(".scroll-top");
let megaBtn = document.querySelector(".mega-btn");
let width = document.querySelector(".scroll-par .width");
window.onscroll = () => {
  let scrollTop = document.documentElement.scrollTop;
  let scroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  width.style.width = `${(scrollTop / scroll) * 100}% `;
  if (
    document.documentElement.scrollTop >= document.documentElement.clientHeight
  ) {
    // btn.style.display = "block";
    btn.style.right = "37px";
  } else {
    btn.style.right = "-137px";
  }
};

btn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
document.addEventListener("click", function (e) {
  if (e.target.href == "http://127.0.0.1:5500/index.html#otherlinks") {
    document.querySelector(".mega-btn .mega").classList.toggle("active");
  } else {
    document.querySelector(".mega-btn .mega").classList.remove("active");
  }
});

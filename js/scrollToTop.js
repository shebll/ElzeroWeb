let btn = document.querySelector(".scroll-top");

window.onscroll = () => {
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

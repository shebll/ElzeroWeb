let par = document.querySelector(".scroll-par");
let width = document.querySelector(".scroll-par .width");
window.onscroll = () => {
  let scrollTop = document.documentElement.scrollTop;
  let scroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  width.style.width = `${(scrollTop / scroll) * 100}% `;
  // console.log(`${(scrollTop / scroll) * 100} %`);
};

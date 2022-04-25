const menuBarr = document.querySelector(".header-top>i");
const closeBarr = document.querySelector(".header-top ul i");

menuBarr.addEventListener("click", () => {
  document.querySelector(".header-top ul").style.transform = "translateX(0%)";
  document.querySelector(".header-top ul").style.opacity = "1";
});

closeBarr.addEventListener("click", () => {
  document.querySelector(".header-top ul").style.transform = "translateX(100%)";
  document.querySelector(".header-top ul").style.opacity = "0";
});

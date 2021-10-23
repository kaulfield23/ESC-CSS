const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navBar-menu");
const navbar = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

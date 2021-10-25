const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navBar-menu");
const navbar = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

let flickity;
window.onload = () => {
  initiateFlickity();
};
let windowWidth = window.innerWidth;
if (windowWidth > 500) {
  window.addEventListener("resize", initiateFlickity);
}

function initiateFlickity() {
  if (sizeIsLessThan500px()) {
    flickity = new Flickity(".main-carousel", {
      prevNextButtons: false,
      pageDots: false,
    });
  }
}

function sizeIsLessThan500px() {
  const horizontalWidth = window.innerWidth;
  return horizontalWidth < 500;
}

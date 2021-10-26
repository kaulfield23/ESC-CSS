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

window.addEventListener("resize", initiateFlickity);

function initiateFlickity() {
  const mainCarousel = document.querySelector(".main-carousel");
  if (sizeIsLessThan500px() && flickity === undefined) {
    console.info("created");
    mainCarousel.classList.remove("flex-me");
    flickity = new Flickity(".main-carousel", {
      prevNextButtons: false,
      pageDots: false,
    });
  } else if (!sizeIsLessThan500px()) {
    mainCarousel.classList.add("flex-me");
    flickity?.destroy();
    flickity = undefined;
  }
}

function sizeIsLessThan500px() {
  const horizontalWidth = window.innerWidth;
  return horizontalWidth < 1130;
}

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
  console.log("resizing");
  const mainCarousel = document.querySelector(".main-carousel");

  if (
    (sizeIsLessThan500px() && flickity === undefined) ||
    (sizeIsLessThan500px() && mainCarousel.classList[1] == "flex-me")
  ) {
    console.info("created");
    mainCarousel.classList.remove("flex-me");
    flickity = new Flickity(".main-carousel", {
      prevNextButtons: false,
      pageDots: false,
    });
  } else if (!sizeIsLessThan500px()) {
    mainCarousel.classList.add("flex-me");
    flickity?.destroy();
  }
}

function sizeIsLessThan500px() {
  const horizontalWidth = window.innerWidth;
  return horizontalWidth < 500;
}

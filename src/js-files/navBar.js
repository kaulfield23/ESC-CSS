const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navBar-menu");
const navbar = document.querySelector(".navBar");
const body = document.querySelector("body");
const menuName = document.querySelectorAll(".menu-name");
const closeButton = document.createElement("div");
const navBackground = document.createElement("div");

hamburger.addEventListener("click", () => {
  navBackground.setAttribute("class", "navBackground");
  menu.setAttribute("class", "phone-nav");
  closeButton.setAttribute("class", "xIcon");
  body.appendChild(navBackground);
  navBackground.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 500,
    iterations: 1,
  });

  setTimeout(() => {
    menuName.forEach((aName) => {
      aName.setAttribute("class", "aNameHover");
    });
    navBackground.appendChild(menu);
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    menu.appendChild(closeButton);
  }, 550);
});

closeButton.addEventListener("click", () => {
  menu.removeChild(closeButton);
  navBackground.removeChild(menu);
  body.removeChild(navBackground);
});

function createElement() {}

function createMenu() {}

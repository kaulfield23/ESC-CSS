const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
const navBarMenu = document.querySelector(".navBar-menu");
const menuName = document.querySelectorAll(".menu-name");

hamburger.addEventListener("click", () => {
  //create and set attribute to elements
  const navBackground = createElement("div", "navBackground");
  body.appendChild(navBackground);
  const closeButton = createElement("div", "close-button");

  //add fade in animation to navbar background
  navBackground.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    iterations: 1,
  });

  //pop up navbar after 350ms
  setTimeout(() => {
    menuName.forEach((aName) => {
      aName.setAttribute("class", "aNameHover");
    });
    //add close button when pop up nav appears
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    navBarMenu.setAttribute("class", "pop-up-nav");
    navBarMenu.appendChild(closeButton);
    navBackground.appendChild(navBarMenu);
  }, 350);

  //remove created elements
  closeButton.addEventListener("click", () => {
    navBarMenu.removeChild(closeButton);
    navBackground.removeChild(navBarMenu);
    body.removeChild(navBackground);

    //reset the navbar menu style for desktop version
    const navBar = document.querySelector(".navBar");
    navBarMenu.setAttribute("class", "navBar-menu");
    navBar.appendChild(navBarMenu);
    navBackground.removeAttribute("class");
    menuName.forEach((aName) => {
      aName.setAttribute("class", "menu-name");
    });
  });
});

//function for create element and set attribute
function createElement(elementType, className) {
  const element = document.createElement(elementType);
  element.setAttribute("class", className);
  return element;
}

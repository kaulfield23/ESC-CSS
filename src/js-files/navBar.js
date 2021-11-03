const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navBar-menu");
const navbar = document.querySelector(".navBar");
const body = document.querySelector("body");
const menuName = document.querySelectorAll(".menu-name");

hamburger.addEventListener("click", () => {
  // menu.classList.toggle("active");
  const navBackground = document.createElement("div");
  navBackground.style.backgroundColor = "rgba(226, 225, 225, 0.693)";
  navBackground.style.position = "fixed";
  navBackground.style.width = "100%";
  navBackground.style.height = "100%";
  navBackground.style.zIndex = 1;
  body.appendChild(navBackground);
  navBackground.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    iterations: 1,
  });
  setTimeout(() => {
    menu.style.cssText = `
    background-color : #011827;
    position : absolute;
    width : 95%;
    height : 95%;
    top : 2.5%;
    left : 2.5%;
    box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.4);
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    `;
    // menu.style.backgroundColor = "#011827";
    // menu.style.position = "absolute";
    // menu.style.width = "95%";
    // menu.style.height = "95%";
    // menu.style.top = "2.5%";
    // menu.style.left = "2.5%";
    // menu.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.4);";
    menuName.forEach((aName) => {
      aName.setAttribute("class", "aNameHover");
      aName.style.color = "white";
      aName.style.textDecoration = "none";
      aName.style.fontSize = "36px";
      aName.style.fontWeight = "bold";
      aName.style.margin = "15px 0";
    });
    // menu.style.display = "flex";
    // menu.style.flexDirection = "column";
    // menu.style.justifyContent = "center";
    // menu.style.alignItems = "center";

    navBackground.appendChild(menu);
  }, 350);
});

//1. make nav background div
// 2. in background div you put nav-menu.
// 3. in nav-menu, you put x icon as well

// js part - 1. make menu pops when you click the hamburger,
// and when you click the hamburger, you change the icon to x icon

//css part - trasnsition color changing slowly.

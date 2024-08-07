const menuShow = document.querySelector(
  ".main-Section .navSide .top-nav .bar-icon"
);
const topNavIcon = document.querySelector(".main-Section .navSide .top-nav ul");
const topNavLinks = document.querySelectorAll(
  ".main-Section .navSide .top-nav  ul li a"
);
const sideNavLinks = document.querySelectorAll(
  ".main-Section .navSide .navSide-link ul li a"
);

menuShow.addEventListener("click", () => {
  topNavIcon.classList.toggle("open");
});

function ToggleActiveLink(element, top) {
  if (top) {
    topNavLinks.forEach((ele) => {
      ele.classList.remove("active");
    });
    element.classList.add("active");
    topNavIcon.classList.remove("open");
  } else {
    sideNavLinks.forEach((ele) => {
      ele.classList.remove("active");
    });
    element.classList.add("active");
  }
}

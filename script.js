const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const iconCloseMenu = document.querySelector(".icon-close-menu");

hamburger.addEventListener("click", (e) => {
  navMenu.style.display = "block";
  hamburger.style.display = "none";
  iconCloseMenu.style.display = "block";
});

iconCloseMenu.addEventListener("click", (e) => {
  iconCloseMenu.style.display = "none";
  hamburger.style.display = "block";
  navMenu.style.display = "none";
});

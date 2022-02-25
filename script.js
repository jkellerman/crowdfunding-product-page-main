const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const iconCloseMenu = document.querySelector(".icon-close-menu");
const backgroundDim = document.querySelector("#background-dim");

hamburger.addEventListener("click", (e) => {
  navMenu.style.display = "block";
  hamburger.style.display = "none";
  iconCloseMenu.style.display = "block";
  backgroundDim.classList.add("background-dim");
});

iconCloseMenu.addEventListener("click", (e) => {
  iconCloseMenu.style.display = "none";
  hamburger.style.display = "block";
  navMenu.style.display = "none";
  backgroundDim.classList.remove("background-dim");
});

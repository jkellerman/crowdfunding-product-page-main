const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const iconCloseMenu = document.querySelector(".icon-close-menu");
const background = document.querySelector("#background");
const backProjectBtn = document.querySelector("#back-project-btn");
const modalMain = document.querySelector(".modal-main");
const backProjectCloseBtn = document.querySelector(".back-project-close-btn");

// Mobile navigation

hamburger.addEventListener("click", (e) => {
  navMenu.style.display = "block";
  hamburger.style.display = "none";
  iconCloseMenu.style.display = "block";
  background.classList.add("background");
});

iconCloseMenu.addEventListener("click", (e) => {
  iconCloseMenu.style.display = "none";
  hamburger.style.display = "block";
  navMenu.style.display = "none";
  background.classList.remove("background");
});

// back project event listener

backProjectBtn.addEventListener("click", (e) => {
  modalMain.style.display = "block";
  background.classList.add("background-dim");
  hamburger.classList.add("dim-nav");
});

backProjectCloseBtn.addEventListener("click", (e) => {
  modalMain.style.display = "none";
  background.classList.remove("background-dim");
  hamburger.classList.remove("dim-nav");
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
const iconCloseMenu = document.querySelector(".icon-close-menu");
const background = document.querySelector(".bg-modal");
const backgroundNav = document.querySelector(".bg-modal-nav");
const backProjectBtn = document.querySelector("#back-project-btn");
const modalMain = document.querySelector(".modal-main");
const backProjectCloseBtn = document.querySelector(".back-project-close-btn");

// Mobile navigation

hamburger.addEventListener("click", (e) => {
  navMenu.style.display = "block";
  hamburger.style.display = "none";
  iconCloseMenu.style.display = "block";
  backgroundNav.style.display = "block";
});

iconCloseMenu.addEventListener("click", (e) => {
  iconCloseMenu.style.display = "none";
  hamburger.style.display = "block";
  navMenu.style.display = "none";
  backgroundNav.style.display = "none";
});

// back project event listener

backProjectBtn.addEventListener("click", (e) => {
  modalMain.style.display = "block";
  navBar.classList.add("dim-nav");
  background.style.display = "block";
});

backProjectCloseBtn.addEventListener("click", (e) => {
  modalMain.style.display = "none";
  navBar.classList.remove("dim-nav");
  background.style.display = "none";
});

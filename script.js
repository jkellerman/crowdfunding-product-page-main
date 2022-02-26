const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
const iconCloseMenu = document.querySelector(".icon-close-menu");
const background = document.querySelector(".bg-modal");
const backgroundNav = document.querySelector(".bg-modal-nav");
const backProjectBtn = document.querySelector("#back-project-btn");
const modalMain = document.querySelector(".modal-main");
const backProjectCloseBtn = document.querySelector(".back-project-close-btn");
const bookmarkBox = document.querySelector(".bookmark-box");
const bookmarkCircle = document.querySelector(".bookmark-circle");
const bookmarkPath = document.querySelector(".bookmark-path");
const bookmarkText = document.querySelector(".bookmark-box");
const bookmarkLogo = document.querySelector(".bookmark-logo");

// Mobile navigation

hamburger.addEventListener("click", () => {
  navMenu.style.display = "block";
  hamburger.style.display = "none";
  iconCloseMenu.style.display = "block";
  backgroundNav.style.display = "block";
});

iconCloseMenu.addEventListener("click", () => {
  iconCloseMenu.style.display = "none";
  hamburger.style.display = "block";
  navMenu.style.display = "none";
  backgroundNav.style.display = "none";
});

// back project event listener

backProjectBtn.addEventListener("click", () => {
  modalMain.style.display = "block";
  navBar.classList.add("dim-nav");
  background.style.display = "block";
});

backProjectCloseBtn.addEventListener("click", () => {
  modalMain.style.display = "none";
  navBar.classList.remove("dim-nav");
  background.style.display = "none";
});

// bookmark event listener

bookmarkBox.addEventListener("click", () => {
  if (bookmarkBox.innerText === "Bookmark") {
    bookmarkText.innerText = "Bookmarked";
    bookmarkText.style.color = "var(--Dark-cyan)";
    bookmarkBox.style.background = "var(--bookmark-background)";
    bookmarkCircle.style.fill = "var(--Dark-cyan)";
    bookmarkPath.style.fill = "#FFF";
  } else {
    bookmarkText.innerText = "Bookmark";
    bookmarkText.style.color = null;
    bookmarkBox.style.background = null;
    bookmarkCircle.style.fill = null;
    bookmarkPath.style.fill = null;
  }
});

bookmarkLogo.addEventListener("click", () => {
  if (bookmarkBox.innerText === "Bookmark") {
    bookmarkText.innerText = "Bookmarked";
    bookmarkText.style.color = "var(--Dark-cyan)";
    bookmarkBox.style.background = "var(--bookmark-background)";
    bookmarkCircle.style.fill = "var(--Dark-cyan)";
    bookmarkPath.style.fill = "#FFF";
  } else {
    bookmarkText.innerText = "Bookmark";
    bookmarkText.style.color = null;
    bookmarkBox.style.background = null;
    bookmarkCircle.style.fill = null;
    bookmarkPath.style.fill = null;
  }
});

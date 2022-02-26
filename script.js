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
const bambooButton = document.querySelectorAll(".select-reward-btn")[0];
const blackEditionButton = document.querySelectorAll(".select-reward-btn")[1];
const radioInputs = document.querySelectorAll(".radio__input");

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
  mainModalPopup();
  modalMain.style.top = "-45%";
  navBar.classList.add("dim-nav");
  //   remove checked incase user clicks select reward, goes back to main screen and then clicks back project
  radioInputs.forEach((radio) => {
    radio.checked = false;
  });
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

// select reward click events

bambooButton.addEventListener("click", () => {
  mainModalPopup();
  modalMain.style.top = "275%";
  const radioButton = document.querySelector("#radio-bamboo-stand");
  radioButton.checked = true;
});

blackEditionButton.addEventListener("click", () => {
  mainModalPopup();
  modalMain.style.top = "300%";
  const radioButton = document.querySelector("#radio-black-edition-stand");
  radioButton.checked = true;
});

// When radio button is selected, display pledge container

radioInputs.forEach((radio) => {
  radio.addEventListener("click", () => {
    console.log(radio.parentElement);
  });
});

function mainModalPopup() {
  modalMain.style.display = "block";
  background.style.display = "block";
}

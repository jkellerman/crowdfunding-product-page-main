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
const pledgeContainers = document.querySelectorAll(".pledge-container");
const containers = document.querySelectorAll(".modal-container");
const pledgeInputs = document.querySelectorAll(".pledge-input");
const pledgeBtns = document.querySelectorAll(".pledge-btn");
const totalBacked = document.querySelector(".total-amount");
const totalBackers = document.querySelector(".backers-amount");

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

// Back project event listeners

backProjectBtn.addEventListener("click", () => {
  mainModalPopup();
  removeBorderColor();
  clearPledgeInputs();
  modalMain.style.top = "-45%";
  navBar.classList.add("dim-nav");
  //   remove checked incase user clicks select reward, goes back to main screen and then clicks back project
  radioInputs.forEach((radio) => {
    radio.checked = false;
  });

  removePledgeContainer();
});

backProjectCloseBtn.addEventListener("click", () => {
  modalMain.style.display = "none";
  navBar.classList.remove("dim-nav");
  background.style.display = "none";
});

// Bookmark event listener

bookmarkBox.addEventListener("click", () => {
  bookmark();
});

bookmarkLogo.addEventListener("click", () => {
  bookmark();
});

// Select reward click events

bambooButton.addEventListener("click", () => {
  mainModalPopup();
  removePledgeContainer();
  removeBorderColor();
  clearPledgeInputs();
  modalMain.style.top = "275%";
  const radioButton = document.querySelector("#radio-bamboo-stand");
  const radioPledge =
    radioButton.parentElement.parentElement.nextElementSibling;
  const editionContainer =
    radioButton.parentElement.parentElement.parentElement;
  radioButton.checked = true;
  radioPledge.style.display = "block";
  editionContainer.style.border = " 2px solid var(--Moderate-cyan)";
});

blackEditionButton.addEventListener("click", () => {
  mainModalPopup();
  removePledgeContainer();
  removeBorderColor();
  clearPledgeInputs();
  modalMain.style.top = "300%";
  const radioButton = document.querySelector("#radio-black-edition-stand");
  const radioPledge =
    radioButton.parentElement.parentElement.nextElementSibling;
  const editionContainer =
    radioButton.parentElement.parentElement.parentElement;
  radioButton.checked = true;
  radioPledge.style.display = "block";
  editionContainer.style.border = " 2px solid var(--Moderate-cyan)";
});

// When radio button is selected, display pledge container

radioInputs.forEach((radio) => {
  radio.addEventListener("click", () => {
    const pledgeContainer =
      radio.parentElement.parentElement.nextElementSibling;
    if (radio.checked === true) {
      removePledgeContainer();
      removeBorderColor();
      clearPledgeInputs();
      pledgeContainer.style.display = "block";
      const editionContainer = radio.parentElement.parentElement.parentElement;
      editionContainer.style.border = " 2px solid var(--Moderate-cyan)";
    }
  });
});

// Continue click events

// no pledge

pledgeBtns[0].addEventListener("click", () => {
  const inputField = pledgeBtns[0].previousElementSibling.children[0];
  const input = inputField.value;
  charLimit(input);
  if (!isNaN(input)) {
    newTotalBacked(input);
    newTotalBackers();
  }
});

// £25 minimum

pledgeBtns[1].addEventListener("click", () => {
  const inputField = pledgeBtns[1].previousElementSibling.children[0];
  const input = inputField.value;
  charLimit(input);
  if (!isNaN(input) && input >= 25) {
    newTotalBacked(input);
    newTotalBackers();
    let bambooEditionModal = document.querySelector(
      ".modal-bamboo-edition-amount-left"
    );
    let bambooEditionMain = document.querySelector(
      ".bamboo-edition-amount-left"
    );

    decreaseAmountLeft(bambooEditionModal, bambooEditionMain);
  }
});

// £75 minimum

pledgeBtns[2].addEventListener("click", () => {
  const inputField = pledgeBtns[2].previousElementSibling.children[0];
  const input = inputField.value;
  charLimit(input);
  if (!isNaN(input) && input >= 75) {
    newTotalBacked(input);
    newTotalBackers();
    let blackEditionModal = document.querySelector(
      ".modal-black-edition-amount-left"
    );
    let blackEditionMain = document.querySelector(".black-edition-amount-left");
    decreaseAmountLeft(blackEditionModal, blackEditionMain);
  }
});

// Functions

function mainModalPopup() {
  modalMain.style.display = "block";
  background.style.display = "block";
}

function removePledgeContainer() {
  pledgeContainers.forEach((pledge) => {
    pledge.style.display = "none";
  });
}

function bookmark() {
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
}

function removeBorderColor() {
  containers.forEach((container) => {
    container.style.border = null;
  });
}

function clearPledgeInputs() {
  pledgeInputs.forEach((input) => {
    input.value = "";
  });
}

function newTotalBacked(input) {
  // const totalBacked = document.querySelector(".total-amount");
  const totalBackedValue = totalBacked.innerText;
  const removeSign = totalBackedValue.replace(/\£/g, "");
  const totalNum = removeSign.replace(/\,/g, "");
  const newTotal = parseFloat(totalNum) + parseFloat(input);
  const roundedTotal = Math.round(newTotal);
  totalBacked.innerText = `£${roundedTotal.toLocaleString()}`;
}

function charLimit(input) {
  const max_chars = 8;
  if (input.length > max_chars) {
    input = input.substring(0, max_chars);
  }
}

function newTotalBackers() {
  const totalBackersValue = totalBackers.innerText;
  const totalNum = totalBackersValue.replace(/\,/g, "");
  const newTotal = parseInt(totalNum) + 1;
  totalBackers.innerText = `${newTotal.toLocaleString()}`;
}

function decreaseAmountLeft(edition, edition2) {
  const previousTotal = edition.innerText;
  const totalNum = parseInt(previousTotal);
  const newTotal = totalNum - 1;
  edition.innerText = newTotal;
  edition2.innerText = newTotal;
}

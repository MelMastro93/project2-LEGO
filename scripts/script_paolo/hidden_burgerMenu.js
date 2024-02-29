// HAMBURGER TOGGLE INDENTIFIER

const closeBurgerMenuBtn = document.querySelector(".burgerHiddenMenuButtonX");
const burgerMenu = document.querySelector(
  ".burger_hiddenMenu_smartphone_container"
);
const primaryBurgerToggle = document.querySelector(".burger_menu_Btn_1");
const secondaryBurgerToggle = document.querySelector("burger_menu_Btn_2");

// HAMBURGER PRIMARY MENU IDENTIFIER

const hamburgerBuyBtn = document.querySelector("#hamburger_buy_btn");
const hamburgerDiscoverBtn = document.querySelector("#hamburger_discover_btn");
const hamburgerHelpBtn = document.querySelector("#hamburger_help_btn");

const hamburgerBuyMenu = document.querySelector(".hamburger_menu_buy");
const hamburgerDiscoverMenu = document.querySelector(
  ".hamburger_menu_discover"
);
const hamburgerHelpMenu = document.querySelector(".hamburger_menu_help");

// HAMBURGER SECONDARY MENU IDENTIFIER

const getBackBtn = document.querySelector(".burgerHiddenMenuButton");
const getBackBtnSVG = document.querySelector(".burgerHiddenMenuButtonSVG");

// HAMBURGER SECONDARY MENU FUNCTION

function getBackToMenu() {
  let hamBuyMenuDisplay = hamburgerBuyMenu.style.display === "block";
  let hamDiscoverMenuDisplay = hamburgerDiscoverMenu.style.display === "block";
  let hamHelpMenuDisplay = hamburgerHelpMenu.style.display === "block";

  if (hamBuyMenuDisplay || hamDiscoverMenuDisplay || hamHelpMenuDisplay) {
    hamburgerBuyMenu.style.display = "none";
    hamburgerDiscoverMenu.style.display = "none";
    hamburgerHelpMenu.style.display = "none";
    getBackBtnSVG.style.display = "none";
  } else {
    hamburgerBuyMenu.style.display = "none";
    hamburgerDiscoverMenu.style.display = "none";
    hamburgerHelpMenu.style.display = "none";
    getBackBtnSVG.style.display = "block";
  }
}

getBackBtn.addEventListener("click", () => {
  getBackToMenu();
});

// HAMBURGER PRIMARY MENU FUNCTION

function openHamBuyMenu() {
  let hamBuyMenuDisplay = hamburgerBuyMenu.style.display === "none";
  let getBackBtnSVGDisplay = getBackBtnSVG.style.display === "none";

  if (hamBuyMenuDisplay && getBackBtnSVGDisplay) {
    hamburgerBuyMenu.style.display = "block";
    hamburgerDiscoverMenu.style.display = "none";
    hamburgerHelpMenu.style.display = "none";
    getBackBtnSVG.style.display = "block";
  } else {
    hamburgerBuyMenu.style.display = "none";
    hamburgerDiscoverMenu.style.display = "none";
    hamburgerHelpMenu.style.display = "none";
    getBackBtnSVG.style.display = "none";
  }
}

function openHamDiscoverMenu() {
  let hamDiscoverMenuDisplay = hamburgerDiscoverMenu.style.display === "none";
  let getBackBtnSVGDisplay = getBackBtnSVG.style.display === "none";

  if (hamDiscoverMenuDisplay && getBackBtnSVGDisplay) {
    hamburgerBuyMenu.style.display = "none";
    hamburgerDiscoverMenu.style.display = "block";
    hamburgerHelpMenu.style.display = "none";
    getBackBtnSVG.style.display = "block";
  } else {
    hamburgerBuyMenu.style.display = "none";
    hamburgerDiscoverMenu.style.display = "none";
    hamburgerHelpMenu.style.display = "none";
    getBackBtnSVG.style.display = "none";
  }
}

function openHamHelpMenu() {
  let hamHelpMenuDisplay = hamburgerHelpMenu.style.display === "none";
  let getBackBtnSVGDisplay = getBackBtnSVG.style.display === "none";

  if (hamHelpMenuDisplay && getBackBtnSVGDisplay) {
    hamburgerBuyMenu.style.display = "none";
    hamburgerDiscoverMenu.style.display = "none";
    hamburgerHelpMenu.style.display = "block";
    getBackBtnSVG.style.display = "block";
  } else {
    hamburgerBuyMenu.style.display = "none";
    hamburgerDiscoverMenu.style.display = "none";
    hamburgerHelpMenu.style.display = "none";
    getBackBtnSVG.style.display = "none";
  }
}

hamburgerBuyBtn.addEventListener("click", () => {
  openHamBuyMenu();
});

hamburgerDiscoverBtn.addEventListener("click", () => {
  openHamDiscoverMenu();
});

hamburgerHelpBtn.addEventListener("click", () => {
  openHamHelpMenu();
});
// HAMBURGER TOGGLE FUNCTION

function handleBurgerMenuDisplay() {
  let burgerMenuDisplay = burgerMenu.style.display === "none";

  if (burgerMenuDisplay) {
    burgerMenu.style.display = "flex";
  } else {
    burgerMenu.style.display = "none";
  }
}

primaryBurgerToggle.addEventListener("click", () => {
  handleBurgerMenuDisplay();
});

closeBurgerMenuBtn.addEventListener("click", () => {
  handleBurgerMenuDisplay();
});

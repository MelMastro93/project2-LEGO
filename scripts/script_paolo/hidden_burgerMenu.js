// HAMBURGER INDENTIFIER
const hamburgerBuyBtn = document.querySelector("#hamburger_buy_btn");
const hamburgerDiscoverBtn = document.querySelector("#hamburger_discover_btn");
const hamburgerHelpBtn = document.querySelector("#hamburger_help_btn");
const hamburgerBuyPage = document.querySelector(".hamburger_menu_buy");
const hamburgerDiscoverPage = document.querySelector(
  ".hamburger_menu_discover"
);
const hamburgerHelpPage = document.querySelector(".hamburger_menu_help");

// HAMBURGER MENU FUNCTION

function openHamburgerBuyMenu() {
  let hamburgerBuyMenu = hamburgerBuyPage.style.display === "none";

  if (hamburgerBuyMenu) {
    hamburgerBuyPage.style.display = "block";
    hamburgerDiscoverPage.style.display = "none";
    hamburgerHelpPage.style.display = "none";
  } else {
    hamburgerBuyPage.style.display = "none";
    hamburgerHelpPage.style.display = "none";
    hamburgerDiscoverPage.style.display = "none";
  }
}

function openDiscoverMenu() {
  let hamburgerDiscoverMenu = hamburgerDiscoverPage.style.display === "none";

  if (hamburgerDiscoverMenu) {
    hamburgerDiscoverPage.style.display = "block";
    hamburgerBuyPage.style.display = "none";
    hamburgerHelpPage.style.display = "none";
  } else {
    hamburgerHelpPage.style.display = "none";
    hamburgerBuyPage.style.display = "none";
    hamburgerDiscoverPage.style.display = "none";
  }
}

function openHelpMenu() {
  let hamburgerHelpMenu = hamburgerHelpPage.style.display === "none";

  if (hamburgerHelpMenu) {
    hamburgerHelpPage.style.display = "block";
    hamburgerBuyPage.style.display = "none";
    hamburgerDiscoverPage.style.display = "none";
  } else {
    hamburgerHelpPage.style.display = "none";
    hamburgerBuyPage.style.display = "none";
    hamburgerDiscoverPage.style.display = "none";
  }
}

hamburgerBuyBtn.addEventListener("click", () => {
  openBuyMenu();
});

hamburgerDiscoverBtn.addEventListener("click", () => {
  openDiscoverMenu();
});

hamburgerHelpBtn.addEventListener("click", () => {
  openHelpMenu();
});

// HAMBURGER TOGGLE INDENTIFIER

const closeBurgerMenuBtn = document.querySelector(".burgerHiddenMenuButtonX");
const burgerMenu = document.querySelector(
  ".burger_hiddenMenu_smartphone_container"
);
const primaryBurgerToggle = document.querySelector(".burger_menu_Btn_1");
const secondaryBurgerToggle = document.querySelector("burger_menu_Btn_2");

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

/*----------------------------- HIDDEN NAVBAR IDENTIFIER ------------------------------------ */
const hiddenNvb = document.querySelector(".navbar-hidden");
const hiddenNvb_close_btn = document.querySelector(".hiddenNvb_close_btn");
const buyBtn = document.querySelector("#navigation_btn1");
const discoverBtn = document.querySelector("#navigation_btn2");
const helpBtn = document.querySelector("#navigation_btn3");
const buyPage = document.querySelector(".menu-buy");
const discoverPage = document.querySelector(".menu-discover");
const helpPage = document.querySelector(".menu-help");

/*--------------------------------- BUY SUB MENU IDENTIFIER --------------------------------------*/
const setPerTemaBtn = document.querySelector("#set_per_tema");
const etaBtn = document.querySelector("#eta");
const prezziBtn = document.querySelector("#prezzi");
const merchBtn = document.querySelector("#merch");
const interessiBtn = document.querySelector("#interessi");
const pickAndBuildBtn = document.querySelector("#pickAndBuild");
const subMenu = document.querySelector(".sub-menu");
const setPerTemaMenu = document.querySelector(".theme_list_container");
const etaMenu = document.querySelector(".age_list_container");
const prezziMenu = document.querySelector(".price_list_container");
const merchMenu = document.querySelector(".merchandising_list_container");
const interessiMenu = document.querySelector(".interests_list_container");
const pickAndBuildMenu = document.querySelector(".pickAndBuild_list_container");
const logoGetBack = document.querySelector("#lego_nvb_logo");
/*------------------------------- DISCOVER SUB MENU IDENTIFIER ------------------------------- */

const ourValueBtn = document.querySelector("#ourValue");
const ourAppBtn = document.querySelector("#ourApp");
const ourMagazineBtn = document.querySelector("#ourMagazine");
const ourValueMenu = document.querySelector(".ourValue_list_container");
const ourAppMenu = document.querySelector(".ourApp_list_container");
const ourMagazineMenu = document.querySelector(".ourMagazine_list_container");

/*------------------------------- NAVIGATION BUTTONS FUNCTIONS -------------------------------*/

function closeMenu() {
  let showNvb = hiddenNvb.style.display === "flex";

  if (showNvb) {
    hiddenNvb.style.display = "none";
    hiddenNvb_close_btn.style.display = "none";
    buyPage.style.display = "none";
    discoverPage.style.display = "none";
    helpPage.style.display = "none";
  }
}

function openBuyMenu() {
  let buyMenu = buyPage.style.display === "none";

  if (buyMenu) {
    hiddenNvb.style.display = "flex";
    hiddenNvb_close_btn.style.display = "block";
    buyPage.style.display = "block";
    discoverPage.style.display = "none";
    helpPage.style.display = "none";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    merchMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
    ourValueMenu.style.display = "none";
    ourAppMenu.style.display = "none";
    ourMagazineMenu.style.display = "none";
  } else {
    hiddenNvb.style.display = "none";
    hiddenNvb_close_btn.display = "none";
    buyPage.style.display = "none";
    discoverPage.style.display = "none";
    helpPage.style.display = "none";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    merchMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
    ourValueMenu.style.display = "none";
    ourAppMenu.style.display = "none";
    ourMagazineMenu.style.display = "none";
  }
}

function openDiscoverMenu() {
  let discoverMenu = discoverPage.style.display === "none";

  if (discoverMenu) {
    hiddenNvb.style.display = "flex";
    hiddenNvb_close_btn.style.display = "block";
    buyPage.style.display = "none";
    discoverPage.style.display = "block";
    helpPage.style.display = "none";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    merchMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
    ourValueMenu.style.display = "none";
    ourAppMenu.style.display = "none";
    ourMagazineMenu.style.display = "none";
  } else {
    hiddenNvb.style.display = "none";
    hiddenNvb_close_btn.display = "none";
    buyPage.style.display = "none";
    discoverPage.style.display = "none";
    helpPage.style.display = "none";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    merchMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
    ourValueMenu.style.display = "none";
    ourAppMenu.style.display = "none";
    ourMagazineMenu.style.display = "none";
  }
}

function openHelpMenu() {
  let helpMenu = helpPage.style.display === "none";

  if (helpMenu) {
    hiddenNvb.style.display = "flex";
    hiddenNvb_close_btn.style.display = "block";
    buyPage.style.display = "none";
    discoverPage.style.display = "none";
    helpPage.style.display = "block";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    merchMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
    ourValueMenu.style.display = "none";
    ourAppMenu.style.display = "none";
    ourMagazineMenu.style.display = "none";
  } else {
    hiddenNvb.style.display = "none";
    hiddenNvb_close_btn.display = "none";
    buyPage.style.display = "none";
    discoverPage.style.display = "none";
    helpPage.style.display = "none";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    merchMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
    ourValueMenu.style.display = "none";
    ourAppMenu.style.display = "none";
    ourMagazineMenu.style.display = "none";
  }
}

buyBtn.addEventListener("click", () => {
  openBuyMenu();
});

discoverBtn.addEventListener("click", () => {
  openDiscoverMenu();
});

helpBtn.addEventListener("click", () => {
  openHelpMenu();
});

hiddenNvb_close_btn.addEventListener("click", () => {
  closeMenu();
});

logoGetBack.addEventListener("click", () => {
  closeMenu();
});
/*--------------------------------- BUY SUB-MENU FUNCTIONS ------------------------------------- */

function openThemeMenu() {
  let temaMenuDisplay = setPerTemaMenu.style.display === "none";

  if (temaMenuDisplay) {
    subMenu.style.display = "block";
    setPerTemaMenu.style.display = "block";
    etaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    merchMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
  } else {
    subMenu.style.display = "none";
    setPerTemaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    merchMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
  }
}

function openAgeMenu() {
  let ageMenuDisplay = etaMenu.style.display === "none";

  if (ageMenuDisplay) {
    subMenu.style.display = "block";
    etaMenu.style.display = "block";
    setPerTemaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    merchMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
  } else {
    subMenu.style.display = "none";
    etaMenu.style.display = "none";
    setPerTemaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    merchMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
  }
}

function openPriceMenu() {
  let priceMenuDisplay = prezziMenu.style.display === "none";

  if (priceMenuDisplay) {
    subMenu.style.display = "block";
    prezziMenu.style.display = "block";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    merchMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
  } else {
    subMenu.style.display = "none";
    prezziMenu.style.display = "none";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    merchMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
  }
}

function openMerchMenu() {
  let merchMenuDisplay = merchMenu.style.display === "none";

  if (merchMenuDisplay) {
    subMenu.style.display = "block";
    merchMenu.style.display = "block";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
  } else {
    subMenu.style.display = "none";
    merchMenu.style.display = "none";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    interessiMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
  }
}

function openInterestsMenu() {
  let interessiMenuDisplay = interessiMenu.style.display === "none";

  if (interessiMenuDisplay) {
    subMenu.style.display = "block";
    interessiMenu.style.display = "block";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    merchMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
  } else {
    subMenu.style.display = "none";
    interessiMenu.style.display = "none";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    merchMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
  }
}

function openPickMenu() {
  let pickMenuDisplay = pickAndBuildMenu.style.display === "none";

  if (pickMenuDisplay) {
    subMenu.style.display = "block";
    pickAndBuildMenu.style.display = "block";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    interessiMenu.style.display = "none";
  } else {
    subMenu.style.display = "none";
    pickAndBuildMenu.style.display = "none";
    setPerTemaMenu.style.display = "none";
    etaMenu.style.display = "none";
    prezziMenu.style.display = "none";
    interessiMenu.style.display = "none";
  }
}

setPerTemaBtn.addEventListener("click", () => {
  openThemeMenu();
});

etaBtn.addEventListener("click", () => {
  openAgeMenu();
});

prezziBtn.addEventListener("click", () => {
  openPriceMenu();
});

merchBtn.addEventListener("click", () => {
  openMerchMenu();
});

interessiBtn.addEventListener("click", () => {
  openInterestsMenu();
});

pickAndBuildBtn.addEventListener("click", () => {
  openPickMenu();
});

/*------------------------------- DISCOVER SUB MENU FUNCTIONS ------------------------------- */

function openValueMenu() {
  let ourValueMenuDisplay = ourValueMenu.style.display === "none";

  if (ourValueMenuDisplay) {
    subMenu.style.display = "block";
    ourValueMenu.style.display = "block";
    ourAppMenu.style.display = "none";
    ourMagazineMenu.style.display = "none";
    buyPage.style.display = "none";
    helpPage.style.display = "none";
  } else {
    subMenu.style.display = "none";
    ourValueMenu.style.display = "none";
    ourAppMenu.style.display = "none";
    ourMagazineMenu.style.display = "none";
    buyPage.style.display = "none";
    helpPage.style.display = "none";
  }
}

function openAppMenu() {
  let ourAppMenuDisplay = ourAppMenu.style.display === "none";

  if (ourAppMenuDisplay) {
    subMenu.style.display = "block";
    ourValueMenu.style.display = "none";
    ourAppMenu.style.display = "block";
    ourMagazineMenu.style.display = "none";
  } else {
    subMenu.style.display = "none";
    ourValueMenu.style.display = "none";
    ourAppMenu.style.display = "none";
    ourMagazineMenu.style.display = "none";
  }
}

function openMagMenu() {
  let ourMagazineMenuDisplay = ourMagazineMenu.style.display === "none";

  if (ourMagazineMenuDisplay) {
    subMenu.style.display = "block";
    ourValueMenu.style.display = "none";
    ourAppMenu.style.display = "none";
    ourMagazineMenu.style.display = "block";
  } else {
    subMenu.style.display = "none";
    ourValueMenu.style.display = "none";
    ourAppMenu.style.display = "none";
    ourMagazineMenu.style.display = "none";
  }
}

ourValueBtn.addEventListener("click", () => {
  openValueMenu();
});

ourAppBtn.addEventListener("click", () => {
  openAppMenu();
});

ourMagazineBtn.addEventListener("click", () => {
  openMagMenu();
});

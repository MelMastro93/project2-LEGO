/*----------------------------- HIDDEN NAVBAR IDENTIFIER ------------------------------------ */
const hiddenNvb = document.querySelector(".navbar-hidden");
const hiddenNvb_close_btn = document.querySelector(".hiddenNvb_close_btn");
const buyBtn = document.querySelector("#navigation_btn1");
const discoverBtn = document.querySelector("#navigation_btn2");
const helpBtn = document.querySelector("#navigation_btn3");
const buyPage = document.querySelector(".menu-buy");
const discoverPage = document.querySelector(".menu-discover");
const helpPage = document.querySelector(".menu-help");

/*--------------------------------- SUB MENU IDENTIFIER --------------------------------------*/
const setPerTemaBtn = document.querySelector("#set_per_tema");
const etaBtn = document.querySelector("#eta");
const prezziBtn = document.querySelector("#prezzi");
const merchBtn = document.querySelector("#merch");
const interessiBtn = document.querySelector("#interessi");
const pickAndBuildBtn = document.querySelector("#pickAndBuild");
const subMenu = document.querySelector(".sub-menu");
const setPerTemaMenu = document.querySelector(".theme_list");
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
  } else {
    hiddenNvb.style.display = "none";
    hiddenNvb_close_btn.display = "none";
    buyPage.style.display = "none";
    discoverPage.style.display = "none";
    helpPage.style.display = "none";
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
  } else {
    hiddenNvb.style.display = "none";
    hiddenNvb_close_btn.display = "none";
    buyPage.style.display = "none";
    discoverPage.style.display = "none";
    helpPage.style.display = "none";
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
  } else {
    hiddenNvb.style.display = "none";
    hiddenNvb_close_btn.display = "none";
    buyPage.style.display = "none";
    discoverPage.style.display = "none";
    helpPage.style.display = "none";
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

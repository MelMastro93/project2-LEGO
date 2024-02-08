// SEARCHBAR

const body = document.querySelector("body");
const searchBtn = document.querySelector(".search_btn");
const search_input = document.querySelector(".search_input");
const closeBtn = document.querySelector(".close_btn");

// HIDDEN NAVBAR

const hiddenNvb = document.querySelector(".navbar-hidden");
const hiddenNvb_close_btn = document.querySelector(".hiddenNvb_close_btn");
const buyPage = document.querySelector(".menu-buy");
const discoverPage = document.querySelector(".menu-discover");
const helpPage = document.querySelector(".menu-help");
const buyBtn = document.querySelector("#navigation_btn1");
const discoverBtn = document.querySelector("#navigation_btn2");
const helpBtn = document.querySelector("#navigation_btn3");

//SEARCHBAR'S FUNC
function changeDisplay() {
  let isShowed = search_input.style.display === "none";
  let opacity = body.classList;
  let showCloseBtn = closeBtn.style.display === "none";

  if (isShowed && opacity.value === "" && showCloseBtn) {
    search_input.style.display = "block";
    opacity.value = "bodyOpacity";
    closeBtn.style.display = "block";
  } else {
    search_input.style.display = "none";
    opacity.value = "";
    closeBtn.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  changeDisplay();
});

closeBtn.addEventListener("click", () => {
  changeDisplay();
});

//HIDDEN NAVBAR'S FUNC
function showBuyPage() {
  let isShowed = hiddenNvb.style.display === "none";
  let opacity = body.classList;
  let buy = buyPage.style.display === "none";

  if (isShowed && buy) {
    hiddenNvb.style.display = "flex";
    hiddenNvb_close_btn.style.display = "block";
    opacity.value = "bodyOpacity";
    buyPage.style.display = "block";
    discoverPage.style.display = "none";
    helpPage.style.display = "none";
  } else {
    hiddenNvb.style.display = "none";
    hiddenNvb_close_btn.display = "none";
    opacity.value = "";
    buyPage.style.display = "none";
    discoverPage.style.display = "none";
    helpPage.style.display = "none";
  }
}

function showDiscoverPage() {
  let isShowed = hiddenNvb.style.display === "none";
  let opacity = body.classList;
  let discover = discoverPage.style.display === "none";

  if (isShowed && discover) {
    hiddenNvb.style.display = "flex";
    hiddenNvb_close_btn.style.display = "block";
    opacity.value = "bodyOpacity";
    buyPage.style.display = "none";
    discoverPage.style.display = "block";
    helpPage.style.display = "none";
  } else {
    hiddenNvb.style.display = "none";
    hiddenNvb_close_btn.display = "none";
    opacity.value = "";
    buyPage.style.display = "none";
    discoverPage.style.display = "none";
    helpPage.style.display = "none";
  }
}

function showHelpPage() {
  let isShowed = hiddenNvb.style.display === "none";
  let opacity = body.classList;
  let help = helpPage.style.display === "none";

  if (isShowed && help) {
    hiddenNvb.style.display = "flex";
    hiddenNvb_close_btn.style.display = "block";
    opacity.value = "bodyOpacity";
    buyPage.style.display = "none";
    discoverPage.style.display = "none";
    helpPage.style.display = "block";
  } else {
    hiddenNvb.style.display = "none";
    hiddenNvb_close_btn.display = "none";
    opacity.value = "";
    buyPage.style.display = "none";
    discoverPage.style.display = "none";
    helpPage.style.display = "none";
  }
}

function closeHiddenNvb() {
  let isShowed = hiddenNvb.style.display === "none";
  let opacity = body.classList;

  if (isShowed) {
    hiddenNvb.style.display = "flex";
    hiddenNvb_close_btn.style.display = "block";
    opacity.value = "bodyOpacity";
  } else {
    hiddenNvb.style.display = "none";
    hiddenNvb_close_btn.display = "none";
    opacity.value = "";
  }
}

buyBtn.addEventListener("click", () => {
  showBuyPage();
});

discoverBtn.addEventListener("click", () => {
  showDiscoverPage();
});

helpBtn.addEventListener("click", () => {
  showHelpPage();
});

hiddenNvb_close_btn.addEventListener("click", () => {
  closeHiddenNvb();
});

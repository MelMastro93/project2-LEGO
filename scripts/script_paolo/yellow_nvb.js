// SEARCHBAR

const body = document.querySelector("body");
const leftElements = document.querySelector(".yellow_navbar_left");
const searchBtn = document.querySelector(".search_btn");
const search_input = document.querySelector(".search_input");
const closeBtn = document.querySelector(".close_btn");
const logo = document.querySelector("#lego_nvb_logo");

//SEARCHBAR'S FUNC
function changeDisplay() {
  let isShowed = search_input.style.display === "none";
  let opacity = body.classList;
  let showCloseBtn = closeBtn.style.display === "none";
  let desktopQueries = window.matchMedia("(min-width: 1024px)");
  let tabletQueries = window.matchMedia("(max-width: 768px)");
  let smartphoneLargeQueries = window.matchMedia("(max-width: 430px)");
  let smartphoneMediumQueries = window.matchMedia("(max-width: 380px)");
  if (
    desktopQueries.matches &&
    isShowed &&
    opacity.value === "" &&
    showCloseBtn
  ) {
    leftElements.style.marginRight = "0";
    search_input.style.display = "block";
    opacity.value = "bodyOpacity";
    closeBtn.style.display = "block";
  } else if (
    smartphoneMediumQueries.matches &&
    isShowed &&
    opacity.value === "" &&
    showCloseBtn
  ) {
    leftElements.style.marginRight = "0";
    search_input.style.display = "block";
    search_input.style.width = "200px";
    opacity.value = "bodyOpacity";
    closeBtn.style.display = "block";
    logo.style.display = "none";
  } else if (
    smartphoneLargeQueries.matches &&
    isShowed &&
    opacity.value === "" &&
    showCloseBtn
  ) {
    leftElements.style.marginRight = "0";
    search_input.style.display = "block";
    search_input.style.width = "250px";
    opacity.value = "bodyOpacity";
    closeBtn.style.display = "block";
    logo.style.display = "none";
  } else if (
    tabletQueries.matches &&
    isShowed &&
    opacity.value === "" &&
    showCloseBtn
  ) {
    leftElements.style.marginRight = "0";
    search_input.style.display = "block";
    opacity.value = "bodyOpacity";
    closeBtn.style.display = "block";
  } else {
    leftElements.style.marginRight = "inherit";
    search_input.style.display = "none";
    opacity.value = "";
    closeBtn.style.display = "none";
    logo.style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  changeDisplay();
});

closeBtn.addEventListener("click", () => {
  changeDisplay();
});

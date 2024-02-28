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
  let smartphoneQueries = window.matchMedia("(max-width: 430px)");
  let tabletQueries = window.matchMedia("(max-width: 768px)");

  if (
    smartphoneQueries.matches &&
    isShowed &&
    opacity.value === "" &&
    showCloseBtn
  ) {
    leftElements.style.marginRight = "0";
    search_input.style.display = "block";
    search_input.style.width = "255px";
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

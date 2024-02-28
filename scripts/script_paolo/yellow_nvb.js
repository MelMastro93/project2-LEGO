// SEARCHBAR

const body = document.querySelector("body");
const leftElements = document.querySelector(".yellow_navbar_left");
const searchBtn = document.querySelector(".search_btn");
const search_input = document.querySelector(".search_input");
const closeBtn = document.querySelector(".close_btn");

//SEARCHBAR'S FUNC
function changeDisplay() {
  let isShowed = search_input.style.display === "none";
  let opacity = body.classList;
  let showCloseBtn = closeBtn.style.display === "none";

  if (isShowed && opacity.value === "" && showCloseBtn) {
    leftElements.style.marginRight = "0";
    search_input.style.display = "block";
    opacity.value = "bodyOpacity";
    closeBtn.style.display = "block";
  } else {
    leftElements.style.marginRight = "inherit";
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

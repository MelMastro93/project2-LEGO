// SEARCHBAR

const body = document.querySelector("body");
const searchBtn = document.querySelector(".search_btn");
const search_input = document.querySelector(".search_input");
const closeBtn = document.querySelector(".close_btn");

// HIDDEN NAVBAR

const hiddenNvb = document.querySelector(".navbar-hidden");
const hiddenNvb_close_btn = document.querySelector(".hiddenNvb_close_btn");
const navigationBtn1 = document.querySelector("#navigation_btn1");
const navigationBtn2 = document.querySelector("#navigation_btn2");
const navigationBtn3 = document.querySelector("#navigation_btn3");

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
function showNvb() {
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

hiddenNvb_close_btn.addEventListener("click", () => {
  showNvb();
});

navigationBtn1.addEventListener("click", () => {
  showNvb();
});

navigationBtn2.addEventListener("click", () => {
  showNvb();
});

navigationBtn3.addEventListener("click", () => {
  showNvb();
});

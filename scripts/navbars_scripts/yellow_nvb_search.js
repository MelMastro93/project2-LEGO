const body = document.querySelector("body");
const searchBtn = document.querySelector(".search_btn");
const search_input = document.querySelector(".search_input");
const closeBtn = document.querySelector(".close_btn");

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
    search_input.removeAttribute("autofocus");
    opacity.value = "";
    closeBtn.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  changeDisplay();
});

closeBtn.addEventListener("click", (event) => {
  changeDisplay();
});

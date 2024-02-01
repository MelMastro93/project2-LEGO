const body = document.querySelector("body");
const searchBtn = document.querySelector(".search_btn");
const closeBtn = document.querySelector(".close_btn");
const searchInput = document.querySelectorAll(".search_input");

searchBtn.addEventListener("click", () => {
  body.classList.toggle("bodyOpacity");
});

closeBtn.addEventListener("click", (event) => {
  searchInput.classList.toggle("search_input_close");
});

searchInput.addEventListener("click", (event) => {
  searchInput.classList.toggle("search_input_close");
});

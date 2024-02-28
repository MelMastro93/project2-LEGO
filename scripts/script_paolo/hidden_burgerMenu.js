const closeBurgerMenuBtn = document.querySelector(".burgerHiddenMenuButtonX");
const burgerMenu = document.querySelector(
  ".burger_hiddenMenu_smartphone_container"
);
const primaryBurgerToggle = document.querySelector(".burger_menu_Btn_1");
const secondaryBurgerToggle = document.querySelector("burger_menu_Btn_2");

function handleBurgerMenuDisplay() {
  let burgerMenuDisplay = burgerMenu.style.display === "none";
  let opacity = body.classList;

  if (burgerMenuDisplay && opacity.value === "") {
    burgerMenu.style.display = "flex";
    opacity.value = "bodyOpacity";
  } else {
    burgerMenu.style.display = "none";
    opacity.value = "";
  }
}

primaryBurgerToggle.addEventListener("click", () => {
  handleBurgerMenuDisplay();
});

closeBurgerMenuBtn.addEventListener("click", () => {
  handleBurgerMenuDisplay();
});

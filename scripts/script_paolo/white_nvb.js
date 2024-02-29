// CLOSE BUTTON

const whiteNvb = document.querySelector(".white-navbar");
const yellowNvb = document.querySelector(".yellow_navbar");
const whiteNvb_close_btn = document.querySelector(".whiteNvb_close_btn");

function handleWhiteNvbDisplay() {
  let whiteNvbDisplay = whiteNvb.style.display === "flex";
  let yellowNvbPosition = yellowNvb.style.top === "0px";

  if (whiteNvbDisplay) {
    whiteNvb.style.display = "none";
    yellowNvb.style.top = "0px";
  }
}

whiteNvb_close_btn.addEventListener("click", () => {
  handleWhiteNvbDisplay();
});

/*------------------------STICKY NVB ON SCROLL ------------------- */

let prevScrollpos = window.scrollY;

const whiteNavbar = document.querySelector(".white-navbar");
const yellowNavbar = document.querySelector(".yellow_navbar");
window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (prevScrollpos > currentScrollPos) {
    whiteNavbar.style.top = "0";
    yellowNavbar.style.top = "0";
  } else {
    whiteNavbar.style.top = "-100px";
    yellowNavbar.style.top = "-100px"; /* Altezza della navbar */
  }

  prevScrollpos = currentScrollPos;
};

// CAROUSEL

let n_slide = 2;
let current = 1;

function nextSlide() {
  current++;

  if (current > n_slide) {
    current = 1;
  }

  for (let i = n_slide; i > 0; i--) {
    document.querySelector(
      "#slides-container span:nth-child(" + i + ")"
    ).style.display = "none";
  }

  document.querySelector(
    "#slides-container span:nth-child(" + current + ")"
  ).style.display = "block";
}

function prevSlide() {
  current--;

  if (current == 0) {
    current = n_slide;
  }

  for (let i = n_slide; i > 0; i--) {
    document.querySelector(
      "#slides-container span:nth-child(" + i + ")"
    ).style.display = "none";
  }

  document.querySelector(
    "#slides-container span:nth-child(" + current + ")"
  ).style.display = "block";
}

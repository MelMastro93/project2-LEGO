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

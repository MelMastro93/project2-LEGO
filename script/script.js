let nextBtn = document.querySelector('.backBtn');
let backBtn = document.querySelector('.nextBtn');
let dragonCarousel =document.querySelector('.dragon_carousel');

let currentIndex = 0

backBtn.addEventListener('click', ()=>{
    currentIndex = (currentIndex + 1 )  % dragonCarousel.children.length;
})

nextBtn.addEventListener('click', ()=>{
    currentIndex = (currentIndex - 1 + dragonCarousel.children.length)  % dragonCarousel.children.length;
})
const initSlider = () => {
const arrows = document.querySelectorAll('.slider-set .button');
const sliderContainer = document.querySelector('.slider-set .card-set')

const maxScrollLeft = sliderContainer.scrollWidth - sliderContainer.clientWidth;

arrows.forEach(button => {
    button.addEventListener('click', ()=> {
        const direction = button.id === "slider-left-button" ? -1 : 1;
        const scrollAmount = sliderContainer.clientWidth * direction;
        sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth'  })
    })
})

const handleSlideButtons = () => {
    arrows[0].style.display = sliderContainer.scrollLeft <= 0 ? 'none' : 'block';
    arrows[1].style.display = sliderContainer.scrollLeft >= maxScrollLeft ? 'none' : 'block';
    
}

sliderContainer.addEventListener('scroll', ()=> {
    handleSlideButtons();
})

}


window.addEventListener('load', initSlider)





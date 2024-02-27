// second carousel
const initSlider = () => {
const arrows = document.querySelectorAll('.slider-set .button');
const sliderContainer = document.querySelector('.slider-set .card-set');

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

// first carousel
const initSlider2 = () => {
    const arrows2 = document.querySelectorAll('.whole-first-sec .secondarrows');
    const weekFavsContainer = document.querySelector('.whole-first-sec .compra-ora-3images');
    const maxScrollLeft2 = weekFavsContainer.scrollWidth - weekFavsContainer.clientWidth;
    
    arrows2.forEach(arrow => {
        arrow.addEventListener('click', ()=> {
            const arrowDirection = arrow.id === "left-arrow" ? -1 : 1;
            const scroll = weekFavsContainer.clientWidth * arrowDirection;
            weekFavsContainer.scrollBy({ left: scroll, behavior: 'smooth'  })
        })
    })
    
    const handleSlideButtons2 = () => {
        arrows2[0].style.display = weekFavsContainer.scrollLeft <= 0 ? 'none' : 'block';
        arrows2[1].style.display = weekFavsContainer.scrollLeft >= maxScrollLeft2 ? 'none' : 'block';   
    }
    
    weekFavsContainer.addEventListener('scroll', ()=> {
        handleSlideButtons2();
    })
    }
    
    window.addEventListener('load', initSlider2)





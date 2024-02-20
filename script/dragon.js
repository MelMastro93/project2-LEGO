const initSlider = () => {
    const arrows = document.querySelectorAll('.container_dragon_carousel .btn');
    const sliderContainer = document.querySelector('.container_dragon_carousel .dragon_carousel')
    
    const maxScrollLeft = sliderContainer.scrollWidth - sliderContainer.clientWidth;
    
    arrows.forEach(button => {
        button.addEventListener('click', ()=> {
            const direction = button.id === "left" ? -1 : 1;
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
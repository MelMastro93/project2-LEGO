const initSlider = () => {
    const arrows = document.querySelectorAll('.container_dragon_carousel .btn');
    const dragonSliderContainer = document.querySelector('.container_dragon_carousel .dragon_carousel')
    
    const maxScrollLeft = dragonSliderContainer.scrollWidth -dragonSliderContainer.clientWidth;
    
    arrows.forEach(button => {
        button.addEventListener('click', ()=> {
            const direction = button.id === "left" ? -1 : 1;
            const scrollAmount = dragonSliderContainer.clientWidth * direction;
            dragonSliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth'  })
        })
    })
    
    const handleDragonSlideButtons = () => {
        arrows[0].style.display = dragonSliderContainer.scrollLeft <= 0 ? 'none' : 'block';
        arrows[1].style.display = dragonSliderContainer.scrollLeft >= maxScrollLeft ? 'none' : 'block';
        
    }
    
    dragonSliderContainer.addEventListener('scroll', ()=> {
        handleDragonSlideButtons();
    })
    
    }


    window.addEventListener('load', initSlider)
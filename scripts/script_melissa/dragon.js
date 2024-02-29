const initDragonSlider = () => {
    const dragon_arrows = document.querySelectorAll('.container_dragon_carousel .btn_dragon_slide');
    const dragonSliderContainer = document.querySelector('.container_dragon_carousel .dragon_carousel')
    
    const maxScrollLeft = dragonSliderContainer.scrollWidth -dragonSliderContainer.clientWidth;
    
    dragon_arrows.forEach(button => {
        button.addEventListener('click', ()=> {
            const direction = button.id === "prev_slide_dragon" ? -1 : 1;
            const scrollAmount = dragonSliderContainer.clientWidth * direction;
            dragonSliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth'  })
        })
    })
    
    const handleDragonSlideButtons = () => {
        dragon_arrows[0].style.display = dragonSliderContainer.scrollLeft <= 0 ? 'none' : 'block';
        dragon_arrows[1].style.display = dragonSliderContainer.scrollLeft >= maxScrollLeft ? 'none' : 'block';
        
    }
    
    dragonSliderContainer.addEventListener('scroll', ()=> {
        handleDragonSlideButtons();
    })
    
    }


    window.addEventListener('load', initDragonSlider)
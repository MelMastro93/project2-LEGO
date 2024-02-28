const initSliderone = () => {
    const chevron = document.querySelectorAll('.carousel .chevron');
    const container = document.querySelector('.carousel .cards-container');
    
    const maxScrollLeft = container.scrollWidth -container.clientWidth;
    
    chevron.forEach(button => {
        button.addEventListener('click', ()=> {
            const direction = button.id === "left-chevron" ? -1 : 1;
            const scrollAmount = container.clientWidth * direction;
            console.log(direction)
            container.scrollBy({ left: scrollAmount, behavior: 'smooth'  })
        })
    })
    
    const handleSlideButtons = () => {
        chevron[0].style.display = container.scrollLeft <= 0 ? 'none' : 'block';
        chevron[1].style.display = container.scrollLeft >= maxScrollLeft ? 'none' : 'block';   
    }
    
    container.addEventListener('scroll', ()=> {
        handleSlideButtons();
    })
    }
    
    window.addEventListener('load', initSliderone)
    
    
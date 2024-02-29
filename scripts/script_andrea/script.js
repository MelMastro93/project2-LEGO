document.addEventListener('DOMContentLoaded', () => {
    const initSliderone = () => {
        const chevron = document.querySelectorAll('.carousel .chevron');
        const container = document.querySelector('.carousel');
        
        const maxScrollLeft = container.scrollWidth -container.clientWidth;
        
        chevron.forEach(button => {
            button.addEventListener('click', ()=> {
                const direction = button.id === "left-chevron" ? -1 : 1;
                const scrollAmount = container.clientWidth * direction + 50;
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


        const initSliderone2 = () => {
            const botChevron = document.querySelectorAll('.bot-slider-outer-container .bot-chevron');
            const botContainer = document.querySelector('.bot-slider-outer-container');
            const maxScrollLeft = botContainer.scrollWidth - botContainer.clientWidth;
            
            botChevron.forEach(button => {
                button.addEventListener('click', () => {
                    const direction = button.id === "cinema-left-chevron" ? -1 : 1;
                    const scrollAmount = botContainer.clientWidth * direction;
                    botContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                });
            });
        
            const handleSlideButtons = () => {
                botChevron[0].style.display = botContainer.scrollLeft <= 0 ? 'none' : 'block';
                botChevron[1].style.display = botContainer.scrollLeft >= maxScrollLeft ? 'none' : 'block';   
            }
            
        
            botContainer.addEventListener('scroll', () => {
                handleSlideButtons();
            });
        };
        
        window.addEventListener('load', initSliderone2);

});
const initSliderButton = () => {
    const slideButtons = document.querySelectorAll('.readAll_container_cards .readAll_button');
    const containerSlider = document.querySelector('.readAll_container_cards .readAll_wrapper');
    const maxScrollLeft = containerSlider.scrollWidth - containerSlider.clientWidth;


    slideButtons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.id === 'prev_slide' ? -1 : 1;
            const scrollAmount = containerSlider.clientWidth * direction;
            containerSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        })
    })

    const handleSlideButtons = () => {
        slideButtons[0].style.display = containerSlider.scrollLeft <= 0 ? 'none' : 'block';
        slideButtons[1].style.display = containerSlider.scrollLeft >= maxScrollLeft ? 'none' : 'block';
    }

    containerSlider.addEventListener('scroll', () => {
        handleSlideButtons()
    })
}

window.addEventListener('load', initSliderButton);


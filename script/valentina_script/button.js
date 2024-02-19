// const initSlider = () => {
//     const slideButtons = document.querySelectorAll('.readAll .slide_button')
//     const containerSlider = document.querySelector('.readAll .readAll_container_cards')

//     const maxScrollLeft = containerSlider.scrollWidth - containerSlider.clientWidth

//     slideButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const direction = button.id === 'prev-slide' ? -1 : 1;
//             // console.log(direction)
//             const scrollAmount = containerSlider.clientWidth * direction;
//             containerSlider.scrollBy({left: scrollAmount, behavior: 'smooth'})
//             // console.log(containerSlider)
//         })
//     })
// }
// window.addEventListener('load', initSlider);
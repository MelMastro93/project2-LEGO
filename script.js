const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    btn.classList.toggle('change')
})

const h3 = document.getElementsByClassName('.footer_h3')

h3.addEventListener('click', () => {
    const ul = document.getElementsByClassName('.footer_dropdown')
    ul.classList.toggle('hideShow')
    console.log(ul)
})
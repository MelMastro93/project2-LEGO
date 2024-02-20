const chiSiamo = document.querySelector('#chiSiamo')

chiSiamo.addEventListener('click', () => {
    const chiSiamoul = document.querySelector('#chiSiamoUl')
    chiSiamoul.classList.toggle('hideShow')

    const arrow = document.getElementById('arrow1')
    arrow.classList.toggle('footer_arrow_transform')
})

const supporto = document.querySelector('#supporto')

supporto.addEventListener('click', () => {
    const supportoUl = document.querySelector('#supportoUl')
    supportoUl.classList.toggle('hideShow')
    const arrow = document.getElementById('arrow2')
    arrow.classList.toggle('footer_arrow_transform')
})

const attrazioni = document.querySelector('#attrazioni')

attrazioni.addEventListener('click', () => {
    const attrazioniUl = document.querySelector('#attrazioniUl')
    attrazioniUl.classList.toggle('hideShow')
    const arrow = document.getElementById('arrow3')
    arrow.classList.toggle('footer_arrow_transform')
})

const info = document.querySelector('#info')

info.addEventListener('click', () => {
    const infoUl = document.querySelector('#infoUl')
    infoUl.classList.toggle('hideShow')
    const arrow = document.getElementById('arrow4')
    arrow.classList.toggle('footer_arrow_transform')
})
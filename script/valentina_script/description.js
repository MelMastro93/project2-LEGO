
const readMoreLess = document.querySelector('.readMore_Less')

readMoreLess.addEventListener('click', () => {

    const span_mostrameno = document.querySelector('.span_mostrameno')

    if (readMoreLess.innerText === 'Leggi di Più') {
        readMoreLess.innerText = 'Mostra di meno'
        span_mostrameno.style.display = 'inline'

    } else if(readMoreLess.innerText === 'Mostra di meno') {
        readMoreLess.innerText = 'Leggi di Più'
        span_mostrameno.style.display = 'none'
    }

})



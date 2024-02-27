
const readMoreLess = document.querySelector('.readMore_Less')

readMoreLess.addEventListener('click', () => {

    const description_span = document.querySelector('.description_span')

    if (readMoreLess.innerText === 'Leggi di Più') {
        readMoreLess.innerText = 'Mostra di meno'
        description_span.style.display = 'inline'

    } else if(readMoreLess.innerText === 'Mostra di meno') {
        readMoreLess.innerText = 'Leggi di Più'
        description_span.style.display = '-webkit-box'
    }

})



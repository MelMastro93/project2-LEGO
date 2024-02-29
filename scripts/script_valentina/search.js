const search = document.querySelector('.footer_input')
const spanSearch = document.querySelector('.footer_input_search_span')

search.addEventListener('click', () => {
    spanSearch.classList.toggle('spanTransition')
    // spanSearch.style.marginBottom = '14px'
    search.classList.toggle('searchTransition')
})



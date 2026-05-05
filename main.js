const scroll = document.querySelector('#scroll')

scroll.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
} )
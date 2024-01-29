const accordionMenu = () => {
    const accordionBlock = document.querySelectorAll('.accordion-block')
        accordionBlock.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active')
            })
        })
}

accordionMenu()

var currentSlide = 1

function switchView(viewNumber) {
    var projectCarousel = document.getElementById(`projectCarousel`)

    projectCarousel.classList.remove(`slideTo${currentSlide}`)
    projectCarousel.classList.add(`slideTo${viewNumber}`)

    currentSlide = viewNumber
}
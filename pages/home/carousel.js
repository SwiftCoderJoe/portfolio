var currentSlide = 1

let currentText = 0;
let texts = ["iOS Developer", "Web Designer", "Frontend Engineer", "JavaScript Programmer", "Computer Technician", "Backend Engineer", "Web Developer", "SysAdmin", "Swift Programmer", ""]

function switchView(viewNumber) {
    var projectCarousel = document.getElementById(`projectCarousel`)

    projectCarousel.classList.remove(`slideTo${currentSlide}`)
    projectCarousel.classList.add(`slideTo${viewNumber}`)

    currentSlide = viewNumber
}

window.addEventListener("load", () => {

    let switchingText = document.getElementById(`mainSwitch`)

    console.log(switchingText)
    
    setInterval(updateSwitch, 2000)

    function updateSwitch() {
        switchingText.classList.add(`invisible`)
        setTimeout(() => {
            switchingText.innerText = texts[currentText++ % texts.length]
            switchingText.classList.remove(`invisible`)
        }, 300)
        
    }

})
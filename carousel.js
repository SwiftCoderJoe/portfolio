let currentSlide = 1

let currentText = 0;
let texts = ["iOS Developer", "Web Designer", "Frontend Engineer", "JavaScript Programmer", "Computer Technician", "Backend Engineer", "Web Developer", "SysAdmin", "Swift Programmer", "Content Creator", "Pretty Cool Guy"]

function negativeModFix(n, m) {
    return ((n % m) + m) % m;
}

function switchView(viewNumber) {
    console.log(viewNumber)

    var projectCarousel = document.getElementById(`projectCarousel`)

    projectCarousel.classList.remove(`slideTo${currentSlide}`)
    projectCarousel.classList.add(`slideTo${viewNumber}`)

    currentSlide = viewNumber
}

window.addEventListener("load", () => {

    let switchingText = document.getElementById(`mainSwitch`)
    
    setInterval(updateSwitch, 2000)

    function updateSwitch() {
        switchingText.classList.add(`invisible`)
        setTimeout(() => {
            switchingText.innerText = texts[currentText++ % texts.length]
            switchingText.classList.remove(`invisible`)
        }, 300)
        
    }

})
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides[currentSlide].classList.remove('mostrar');
    currentSlide = slideIndex;
    slides[currentSlide].classList.add('mostrar');
}

function nextSlide() {
    let nextIndex = currentSlide + 1;
    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }
    showSlide(nextIndex);
}

setInterval(nextSlide, 4000);

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const slideCount = slides.length;

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        slideIndex = slideCount - 1;
    } else if (slideIndex >= slideCount) {
        slideIndex = 0;
    }

    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.transform = 'translateX(0)';
        } else {
            slide.style.transform = 'translateX(100%)';
        }
    });

    currentSlide = slideIndex;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 5000);

showSlide(currentSlide);

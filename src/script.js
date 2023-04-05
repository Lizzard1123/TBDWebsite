let currentSlide = 0;
const slides = document.querySelectorAll(".slideshow img");
const slideCount = slides.length;

function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slideCount) % slideCount;
    slides[currentSlide].classList.add("active");
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 5000); // change slide every 5 seconds

const animatePlane = () => {
    const plane = document.querySelector('.animate-plane');
    const planeBack = document.querySelector('.planeBackground');
    const container = document.querySelector('.plane-container');
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const containerBottom = containerTop + containerHeight;
    const planePosition = plane.getBoundingClientRect().top + plane.offsetHeight / 2;

    if (planePosition >= containerTop && planePosition <= containerBottom) {
        plane.classList.add('move');
        planeBack.classList.remove('fade-in');
    } else {
        plane.classList.remove('move');
        planeBack.classList.add('fade-in');
    }
}

window.addEventListener('scroll', animatePlane);
const Slider = (function () {
    const slides = document.getElementsByTagName('li');
    let currentSlide = 0;

    const next = function () {
        slides[currentSlide].classList.toggle('visible');
        if (currentSlide < slides.length - 1) {
            currentSlide += 1;
        } else {
            currentSlide = 0;
        }
        slides[currentSlide].classList.toggle('visible');
    };

    const prev = function () {
        slides[currentSlide].classList.toggle('visible');
        if (currentSlide > 0) {
            currentSlide -= 1;
        } else {
            currentSlide = slides.length - 1;
        }
        slides[currentSlide].classList.toggle('visible');
    };

    return {
        next,
        prev,
    };
}());

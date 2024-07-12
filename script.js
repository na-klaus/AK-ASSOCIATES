let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const videoElements = document.querySelectorAll('video');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'block' : 'none';
    });

    videoElements.forEach((video, index) => {
        if (index === currentIndex) {
            video.play();
            setTimeout(() => {
                video.pause();
            }, 5000); // Play for 5 seconds
        } else {
            video.pause();
        }
    });

    currentIndex = (currentIndex + 1) % slides.length;
}

setInterval(showSlides, 2000); // Change slide every 2 seconds
showSlides(); // Show the first slide immediately

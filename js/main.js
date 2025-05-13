// Background image changer
const backgroundSlider = document.querySelector('.background-slider');
const backgrounds = [
    'bg-transition-1',
    'bg-transition-2',
    'bg-transition-3'
];
let currentBg = 0;

function changeBackground() {
    backgroundSlider.classList.remove(backgrounds[currentBg]);
    currentBg = (currentBg + 1) % backgrounds.length;
    backgroundSlider.classList.add(backgrounds[currentBg]);
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Initialize first background
backgroundSlider.classList.add(backgrounds[0]);

// Animate progress bars when they come into view
const progressBars = document.querySelectorAll('.progress-fill');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const percent = bar.parentElement.previousElementSibling.lastElementChild.textContent;
        bar.style.width = percent;
    });
}

// Run once on page load
animateProgressBars();
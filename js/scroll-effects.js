// Enhanced scroll effects with background changes
const backgroundSlider = document.querySelector('.background-slider');
const backgrounds = [
    'url("assets/images/bg1.jpg")',
    'url("assets/images/bg2.jpg")',
    'url("assets/images/bg3.jpg")',
    'url("assets/images/bg4.jpg")'
];
let lastScrollPosition = 0;
let currentBgIndex = 0;

// Scroll-triggered background changes
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const scrollDirection = scrollPosition > lastScrollPosition ? 'down' : 'up';
    lastScrollPosition = scrollPosition;
    
    // Change background every 500px of scrolling
    if (scrollPosition % 500 < 50) { // Threshold to prevent rapid changes
        if (scrollDirection === 'down') {
            currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
        } else {
            currentBgIndex = (currentBgIndex - 1 + backgrounds.length) % backgrounds.length;
        }
        backgroundSlider.style.backgroundImage = backgrounds[currentBgIndex];
    }
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('.section');
const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Animate progress bars when skills section is visible
            if (entry.target.id === 'skills') {
                const progressBars = entry.target.querySelectorAll('.progress-fill');
                progressBars.forEach(bar => {
                    const percent = bar.getAttribute('data-percent');
                    bar.style.width = percent;
                    bar.style.opacity = 1;
                });
            }
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
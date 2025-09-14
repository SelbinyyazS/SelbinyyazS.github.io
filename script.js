// Fade-in animation on scroll
const animatedElements = document.querySelectorAll('.anim-fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

animatedElements.forEach(el => observer.observe(el));
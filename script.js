// --- HEADER SCROLL EFFECT ---
const header = document.getElementById('main-header');

// Add 'scrolled' class to header when user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // 50px from the top
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// --- FADE-IN ANIMATION ON SCROLL ---
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
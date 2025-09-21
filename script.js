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


// --- DYNAMICALLY BUILD THE UNIVERSITY LIST ---

// First, check if the container element exists on the current page
const uniListContainer = document.getElementById('university-list-container');

if (uniListContainer) {
    let currentCity = "";
    let cityHtml = "";

    // 1. Sort the universities array by city name
    universities.sort((a, b) => a.city.localeCompare(b.city));

    // 2. Loop through the sorted array to build the HTML
    universities.forEach(uni => {
        // If we encounter a new city, create a heading for it
        if (uni.city !== currentCity) {
            if (currentCity !== "") {
                cityHtml += `</div>`; // Close the previous city's div
            }
            currentCity = uni.city;
            cityHtml += `<div class="city-group">
                           <h2 class="city-name">${currentCity}</h2>`;
        }
        
        // Add the university item
        cityHtml += `<a href="${uni.link}" target="_blank" class="uni-item">
                       <span class="uni-name">${uni.name}</span>
                       <span class="uni-arrow">→</span>
                     </a>`;
    });

    cityHtml += `</div>`; // Close the very last city's div

    // 3. Inject the final HTML into the page
    uniListContainer.innerHTML = cityHtml;
}
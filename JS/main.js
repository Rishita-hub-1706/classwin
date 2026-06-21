// JS/main.js

document.addEventListener("DOMContentLoaded", () => {
    
    // Select the middle banner element
    const banner = document.querySelector(".mid-banner");

    // Configure the observer options
    const observerOptions = {
        root: null,         // Uses the browser viewport window
        rootMargin: "0px",
        threshold: 0.01     // Triggers as soon as 1% of the image is visible
    };

    // Create the intersection observer engine
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the element is scrolling into view
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observer.unobserve(entry.target); // Stop tracking once animated
                console.log("Banner animated successfully!");
            }
        });
    }, observerOptions);

    // Track the banner if it exists on the current page
    if (banner) {
        scrollObserver.observe(banner);
    } else {
        console.warn("Scroll animation: '.mid-banner' element not found on this page.");
    }

});
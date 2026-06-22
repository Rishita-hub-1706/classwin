// JS/main.js

document.addEventListener("DOMContentLoaded", () => {
    
    // Select both the image banner and the accompanying text content block
    const animatedElements = document.querySelectorAll(".mid-banner, .banner-content");

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
                
            }
        });
    }, observerOptions);

    // Check if we found any elements on the current page before observing
    if (animatedElements.length > 0) {
        animatedElements.forEach(element => {
            scrollObserver.observe(element);
        });
    } else {
        console.warn("Scroll animation: No target elements found on this page.");
    }

});
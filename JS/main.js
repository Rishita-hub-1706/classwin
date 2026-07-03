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

document.addEventListener("DOMContentLoaded", () => {
    const statsSection = document.querySelector(".stats-banner-section");
    const counters = document.querySelectorAll(".stat-number");
    
    const countUp = (element) => {
        const target = +element.getAttribute("data-target");
        const duration = 2000; 
        const frameRate = 1000 / 60; 
        const totalFrames = Math.round(duration / frameRate);
        let currentFrame = 0;

        const animate = () => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            const currentValue = Math.round(target * progress);

            if (currentFrame < totalFrames) {
                element.innerText = currentValue + "+";
                requestAnimationFrame(animate);
            } else {
                element.innerText = target + "+";
            }
        };

        requestAnimationFrame(animate);
    };

    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => countUp(counter));
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");

            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));

            button.classList.add("active");
            
            const activePane = document.getElementById(targetTab);
            if (activePane) {
                activePane.classList.add("active");
            }
        });
    });
});
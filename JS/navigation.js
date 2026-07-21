document.addEventListener("DOMContentLoaded", () => {
    
    // --- STEP 1: AUTOMATIC CURRENT PAGE DETECTION & HIGHLIGHTING ---
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");

    // Clear any hardcoded active states first
    document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        
        // Find the matching link
        if (linkHref === currentPath) {
            // Find the closest parent <li> (the .nav-item) and mark it active
            const parentItem = link.closest(".nav-item");
            if (parentItem) {
                parentItem.classList.add("active");
                
                // If it's a dropdown child, also keep the parent dropdown item active
                const parentDropdown = parentItem.closest(".has-dropdown");
                if (parentDropdown) {
                    parentDropdown.classList.add("active");
                }
            }
        }
    });
    
    // Fallback: If path is blank or index.html, highlight the Home item wrapper
    if (currentPath === "" || currentPath === "index.html" || currentPath === "home.html") {
        const homeLink = document.querySelector('.nav-links a[href="home.html"]');
        if (homeLink) {
            const homeItem = homeLink.closest(".nav-item");
            if (homeItem) homeItem.classList.add("active");
        }
    }

    // --- STEP 2: DYNAMIC GLASS PILL INTERACTION MECHANICS ---
    const navContainer = document.querySelector(".nav-links-container");
    const navItems = document.querySelectorAll(".nav-item");
    const glassPill = document.querySelector(".sliding-glass-pill");

    function positionPill(element) {
        if (!element || !navContainer || !glassPill) return;
        
        const containerRect = navContainer.getBoundingClientRect();
        const itemRect = element.getBoundingClientRect();

        const calculatedLeft = itemRect.left - containerRect.left;
        const calculatedWidth = itemRect.width;

        // Apply hardware-accelerated tracking placement
        glassPill.style.opacity = "1";
        glassPill.style.left = `${calculatedLeft}px`;
        glassPill.style.width = `${calculatedWidth}px`;
    }

    // Instantly snap the pill to whichever page was flagged active above
    const activeItem = document.querySelector(".nav-item.active");
    if (activeItem) {
        // Subtle timeout ensures browser handles bounding box rendering first
        setTimeout(() => positionPill(activeItem), 50);
    }

    // Slide to the element the mouse is hovering over
    navItems.forEach(item => {
        item.addEventListener("mouseenter", () => positionPill(item));
    });

    // Smoothly glide back to the current page's link when mouse leaves the navbar
    if (navContainer) {
        navContainer.addEventListener("mouseleave", () => {
            const currentActive = document.querySelector(".nav-item.active");
            if (currentActive) {
                positionPill(currentActive);
            } else {
                glassPill.style.opacity = "0"; // Fade out gracefully if on an unlinked page
            }
        });
    }
    
    let resizeTimeout;

window.addEventListener("resize", () => {

    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {

        const currentActive =
            document.querySelector(".nav-item.active");

        if(currentActive){

            positionPill(currentActive);

        }

    },150);

});



const menuBtn=document.querySelector(".menu-toggle");
const navMenu=document.querySelector(".nav-links-container");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

    menuBtn.textContent=

    navMenu.classList.contains("active")

    ?"✕":"☰";
    
       });

}  

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


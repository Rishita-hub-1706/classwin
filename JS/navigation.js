document.addEventListener("DOMContentLoaded", () => {
    //to highlight the current page in the navigation bar
    const currentPath = window.location.pathname.split("/").pop();
    
    //to select all the navigation links and loop through them to find a match with the current path
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        // Clear out any old active classes just in case
        link.classList.remove("active");
        
        //to get the href attribute of the link
        const linkHref = link.getAttribute("href");

        //to check if the link's href matches the current path
        if (linkHref === currentPath) {
            link.classList.add("active");
        }
    });
    
    //if the current path is empty or index.html, highlight the home link
    if (currentPath === "" || currentPath === "index.html") {
        const homeLink = document.querySelector('.nav-links a[href="home.html"]');
        if (homeLink) homeLink.classList.add("active");
    }
});
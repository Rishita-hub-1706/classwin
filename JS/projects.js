document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("galleryTrack");
    const prevBtn = document.getElementById("galleryPrev");
    const nextBtn = document.getElementById("galleryNext");

    if (track && prevBtn && nextBtn) {
        // Defines distance jump per button tap: width of one card + spacing gap
        const scrollAmount = 344; 

        nextBtn.addEventListener("click", () => {
            track.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });

        prevBtn.addEventListener("click", () => {
            track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });
    }
});
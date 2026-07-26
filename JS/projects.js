document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("galleryTrack");
    const prevBtn = document.getElementById("galleryPrev");
    const nextBtn = document.getElementById("galleryNext");

    console.log(track, prevBtn, nextBtn);

    nextBtn.addEventListener("click", () => {
        console.log("NEXT CLICKED");
        track.scrollBy({
            left: 344,
            behavior: "smooth"
        });
    });

    prevBtn.addEventListener("click", () => {
        console.log("PREV CLICKED");
        track.scrollBy({
            left: -344,
            behavior: "smooth"
        });
    });
});
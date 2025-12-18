/**
 * scrollOperations.js
 * Manages both Back-to-Top and Go-to-Bottom visibility and logic.
 */

let backToTopBtn;
let goToBottomBtn;

window.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize button references
    backToTopBtn = document.getElementById("btn-back-to-top");
    goToBottomBtn = document.getElementById("btn-go-to-bottom");

    // 2. Back to Top Click Event
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 3. Go to Bottom Click Event
    if (goToBottomBtn) {
        goToBottomBtn.addEventListener("click", () => {
            const footer = document.getElementById('main-footer');
            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// 4. Combined Scroll Listener
window.onscroll = () => {
    const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
    const isAtBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 50;

    // Logic for Back to Top (Show when scrolled down 150px)
    if (backToTopBtn) {
        backToTopBtn.style.display = (scrollPos > 150) ? "block" : "none";
    }

    // Logic for Go to Bottom (Hide when already at the footer)
    if (goToBottomBtn) {
        goToBottomBtn.style.display = (scrollPos > 50 && !isAtBottom) ? "block" : "none";
    }
};
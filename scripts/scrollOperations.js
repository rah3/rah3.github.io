/**
 * scrollOperations.js
 * Manages Back-to-Top and Go-to-Bottom visibility and smooth scrolling.
 * Matched to resume.js / home.js / footer.js IDs
 */

let backToTopBtn;
let goToBottomBtn;

function initScrollButtons() {
    backToTopBtn = document.getElementById("btn-back-to-top");
    goToBottomBtn = document.getElementById("btn-go-to-bottom");

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    if (goToBottomBtn) {
        goToBottomBtn.addEventListener("click", () => {
            // Scroll to your actual footer container
            const footer = document.getElementById('main-footer') || document.getElementById('honors-container');
            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
        });
    }

    updateButtonVisibility();
}

function updateButtonVisibility() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const isNearBottom = viewportHeight + scrollY >= fullHeight - 100;

    if (backToTopBtn) {
        // Show after 200px, same as rajnasit.dev portfolio pattern
        backToTopBtn.style.display = scrollY > 200 ? "block" : "none";
        backToTopBtn.style.opacity = scrollY > 200 ? "1" : "0";
    }

    if (goToBottomBtn) {
        // Show when scrolled a bit, hide when at bottom
        const shouldShow = scrollY > 100 && !isNearBottom;
        goToBottomBtn.style.display = shouldShow ? "block" : "none";
        goToBottomBtn.style.opacity = shouldShow ? "1" : "0";
    }
}

// Use addEventListener instead of window.onscroll (which overwrites other listeners)
let ticking = false;
function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateButtonVisibility();
            ticking = false;
        });
        ticking = true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initScrollButtons();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateButtonVisibility, { passive: true });
});

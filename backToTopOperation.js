// 1. Handle the scroll event
window.onscroll = () => {
    scrollFunction();
};

function scrollFunction() {
    // We fetch the button inside the function to ensure it's not null
    let mybutton = document.getElementById("btn-back-to-top");

    if (mybutton) { // Only try to change style if the button actually exists
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

// 2. Add the click listener after the page loads
window.addEventListener('DOMContentLoaded', (event) => {
    let mybutton = document.getElementById("btn-back-to-top");
    if (mybutton) {
        mybutton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
function renderHomePage() {
    const container = document.getElementById('top');
    if (!container) return;

    // Create the main structure using template literals
    container.innerHTML = `
        <div class="container my-3" id="top">
            <h1 class="display-6 fw-bold mb-3 text-center"><u>Home</u></h1>
            <div class="row align-items-center py-4">
                <div class="col-md-8">
                    <h2 class="mb-5 fw-bold text-primary">Welcome to my Portfolio</h2>
                    <p class="fs-5">
                        I am <strong>Rahie Datta</strong>, a Computer Science student at Carleton University 
                        with a passion for mastering algorithms and developing efficient software solutions. 
                        I specialize in <strong>JavaScript, Python, and Java</strong>.
                    </p>
                    <p class="text-muted">
                        Currently seeking opportunities to apply my technical background and problem-solving mindset to real-world challenges.
                    </p>
                </div>

                <div class="col-md-4">
                    <div class="card border-primary shadow-sm">
                        <div class="card-body text-center">
                            <h6 class="text-uppercase text-muted small">Current Academic Standing</h6>
                            <h2 class="text-primary mb-0">9.26</h2>
                            <p class="small mb-0">Carleton University CGPA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Run the render function when the script loads
document.addEventListener('DOMContentLoaded', renderHomePage);
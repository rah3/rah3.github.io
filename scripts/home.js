function renderHomePage() {
    const container = document.getElementById('top');
    if (!container) return;

    // We must escape internal backticks using \ to avoid the Uncaught TypeError
    container.innerHTML = `
        <div class="container my-3" id="top">
            <h1 class="display-6 fw-bold mb-3 text-center"><u>Home</u></h1>
            <div class="row align-items-center py-4">
                <div class="col-md-8">
                    <h2 class="mb-5 fw-bold text-primary">Welcome to my Portfolio</h2>
                    <p class="fs-5">
                        I am <strong>Rahie Datta</strong>, a <strong>Fourth Year</strong> Computer Science student at Carleton University 
                        with a Minor in Mathematics. I am dedicated to building functional, high-quality software solutions 
                        through a philosophy of "Practice, Practice, Practice."
                    </p>
                    <p class="text-muted">
                        I specialize in <strong>C++ and SQL</strong>, with a current focus on implementing 
                        the Boundary-Control-Entity architecture for robust data persistence.
                    </p>
                </div>

                <div class="col-md-4">
                    <div class="card border-primary shadow-sm">
                        <div class="card-body text-center">
                            <h6 class="text-uppercase text-muted small">Current Academic Standing</h6>
                            <h2 class="text-primary mb-0">9.34</h2>
                            <p class="small mb-0">Carleton University CGPA</p>
                            <p class="text-muted extra-small">Fourth Year Standing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', renderHomePage);
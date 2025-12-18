function renderContactPage() {
    const contactContainer = document.getElementById('contact');
    if (!contactContainer) return;

    contactContainer.innerHTML = `
        <div class="container my-5 py-4 border-top">
            <h1 class="display-6 fw-bold mb-5 text-center"><u>Contact Me</u></h1>
            <div class="row justify-content-center text-center g-4">
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-primary fw-bold">Email</h5>
                            <p class="card-text text-muted small">The best way to reach me for professional inquiries.</p>
                            <a href="mailto:rahiedatta@gmail.com" class="btn btn-outline-primary">rahiedatta@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-primary fw-bold">LinkedIn</h5>
                            <p class="card-text text-muted small">Connect with me for professional updates and networking.</p>
                            <a href="https://www.linkedin.com/in/rahiedatta" target="_blank" class="btn btn-outline-primary">View Profile</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title text-primary fw-bold">GitHub</h5>
                            <p class="card-text text-muted small">Explore my source code and technical projects.</p>
                            <a href="https://github.com/rah3" target="_blank" class="btn btn-outline-primary">Visit GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', renderContactPage);
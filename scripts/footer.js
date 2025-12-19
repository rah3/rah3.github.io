function renderFooter() {
    const footer = document.getElementById('main-footer');
    if (!footer) return;

    const currentYear = new Date().getFullYear();

    footer.innerHTML = `
        <div class="bg-dark text-white pt-5 pb-3 mt-5">
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <h6 class="text-uppercase fw-bold mb-3">Contact</h6>
                        <p class="small mb-1"><a href="mailto:rahiedatta@gmail.com" class="text-white-50 text-decoration-none">Email</a></p>
                        <p class="small"><a href="https://www.linkedin.com/in/rahiedatta" target="_blank" class="text-white-50 text-decoration-none">LinkedIn Profile</a></p>
                    </div>

                    <div class="col-md-4 mb-4">
                        <h5 class="fw-bold text-primary">Rahie Datta</h5>
                        <p class="small text-white-50">Computer Science Student at Carleton University</p>
                    </div>

                    <div class="col-md-4 mb-4">
                        <h6 class="text-uppercase fw-bold mb-3">Navigation</h6>
                        <ul class="list-unstyled small">
                            <li><a href="#name-header" class="text-white-50 text-decoration-none">Back to Top</a></li>
                            <li><a href="#education" class="text-white-50 text-decoration-none">Education</a></li>
                            <li><a href="#experience" class="text-white-50 text-decoration-none">Experience</a></li>
                        </ul>
                    </div>
                </div>
                <hr class="my-4 border-secondary">
                <p class="small text-white-50 mb-0">
                    &copy; ${currentYear} Rahie Datta. Built with JavaScript and Bootstrap.
                </p>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    renderFooter();
});
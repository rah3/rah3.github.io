function renderFooter() {
    const footer = document.getElementById('main-footer');
    if (!footer) return;

    const currentYear = new Date().getFullYear();

    footer.innerHTML = `
        <div class="bg-dark text-white pt-5 pb-3 mt-5">
            <div class="container text-center">
                <div class="row text-start text-md-center">

                    <!-- Professional Links -->
                    <div class="col-md-4 mb-4">
                        <h6 class="text-uppercase fw-bold mb-3">Professional Links</h6>
                        <p class="small mb-1">
                            <a href="mailto:rahiedatta@gmail.com" class="text-white-50 text-decoration-none">
                                rahiedatta@gmail.com
                            </a>
                        </p>
                        <p class="small mb-1">
                            <a href="https://www.linkedin.com/in/rahiedatta" target="_blank"
                               class="text-white-50 text-decoration-none">
                                linkedin.com/in/rahiedatta
                            </a>
                        </p>
                        <p class="small">
                            <a href="https://github.com/rah3" target="_blank"
                               class="text-white-50 text-decoration-none">
                                github.com/rah3
                            </a>
                        </p>
                        <p class="small text-white-50 mt-2">Ottawa, ON | 343-551-3518</p>
                    </div>

                    <!-- Identity Block -->
                    <div class="col-md-4 mb-4">
                        <h5 class="fw-bold text-primary">Rahie Datta</h5>
                        <p class="small text-white-50 mb-1">
                            Fourth-Year BCS, Minor in Mathematics<br>Carleton University
                        </p>
                        <p class="small text-white-50">
                            FSWEP / EOSD — Software Engineering,<br>Database Systems, Data Integrity
                        </p>
                    </div>

                    <!-- Navigation - matched to your actual IDs -->
                    <div class="col-md-4 mb-4">
                        <h6 class="text-uppercase fw-bold mb-3">Navigation</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-1">
                                <a href="#top" class="text-white-50 text-decoration-none">
                                    Back to Top
                                </a>
                            </li>
                            <li class="mb-1">
                                <a href="#objective-container" class="text-white-50 text-decoration-none">
                                    Objective
                                </a>
                            </li>
                            <li class="mb-1">
                                <a href="#projects-container" class="text-white-50 text-decoration-none">
                                    Projects
                                </a>
                            </li>
                            <li class="mb-1">
                                <a href="#skills-container" class="text-white-50 text-decoration-none">
                                    Technical Skills
                                </a>
                            </li>
                            <li class="mb-1">
                                <a href="#experience-container" class="text-white-50 text-decoration-none">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#education-container" class="text-white-50 text-decoration-none">
                                    Education
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <hr class="my-4 border-secondary">

                <p class="small text-white-50 mb-0">
                    &copy; ${currentYear} Rahie Datta. Built with modular JavaScript and Bootstrap. Matches LaTeX resume.
                </p>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    renderFooter();
});

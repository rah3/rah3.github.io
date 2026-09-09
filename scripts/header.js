/**
 * header.js
 * Renders sticky navbar header - matches footer.js pattern
 */
function loadHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    header.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center fw-bold" href="#top">
                    <img src="images/logo.png" alt="Logo" width="32" height="32" class="me-2 rounded-circle" onerror="this.style.display='none'">
                    Rahie Datta
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#top">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#objective-container">Objective</a></li>
                        <li class="nav-item"><a class="nav-link" href="#education-container">Education</a></li>
                        <li class="nav-item"><a class="nav-link" href="#skills-container">Skills</a></li>
                        <li class="nav-item"><a class="nav-link" href="#experience-container">Experience</a></li>
                        <li class="nav-item"><a class="nav-link" href="#projects-container">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="#honors-container">Honors</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact-container">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    // Close mobile menu when clicking a link
    header.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const collapse = document.getElementById('navbarNav');
            if (collapse && collapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(collapse) || new bootstrap.Collapse(collapse);
                bsCollapse.hide();
            }
        });
    });

    // Highlight active link on scroll
    const sections = ['top','objective-container','education-container','skills-container','experience-container','projects-container','honors-container','contact-container'];
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el && window.scrollY >= el.offsetTop - 120) current = id;
        });
        header.querySelectorAll('.nav-link').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });
}

document.addEventListener('DOMContentLoaded', loadHeader);
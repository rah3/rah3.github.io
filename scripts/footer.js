// footer.js - Unified footer with navigation, matches header nav anchors
export function renderFooter(rootId) {
    const root = document.getElementById(rootId);
    if (!root) return;
    const year = new Date().getFullYear();
    root.innerHTML = `
        <footer class="site-footer">
            <nav class="footer-nav" aria-label="Footer navigation">
                <a href="#objective-container">Objective</a>
                <a href="#education-container">Education</a>
                <a href="#skills-container">Skills</a>
                <a href="#experience-container">Experience</a>
                <a href="#projects-container">Projects</a>
                <a href="#awards-container">Awards</a>
                <a href="#contact-container">Contact</a>
            </nav>
            <div class="footer-meta">
                <div>© ${year} Rahie Datta — Built with modular JavaScript and unified CSS architecture.</div>
                <div class="footer-links">
                    <span>FSWEP & EOSD Candidate • Carleton University</span>
                    <span>•</span>
                    <a href="https://linkedin.com/in/rahiedatta/" target="_blank" rel="noopener">LinkedIn</a>
                    <span>•</span>
                    <a href="https://github.com/rah3/" target="_blank" rel="noopener">GitHub</a>
                    <span>•</span>
                    <a href="mailto:rahiedatta@gmail.com">Email</a>
                </div>
            </div>
        </footer>
    `;
}

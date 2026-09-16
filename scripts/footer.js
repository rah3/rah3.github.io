// footer.js - Unified footer, regulatory alignment, documentation accuracy
export function renderFooter(rootId) {
    const root = document.getElementById(rootId);
    if (!root) return;
    const year = new Date().getFullYear();
    root.innerHTML = `
        <footer class="site-footer">
            <div>© ${year} Rahie Datta — Built with modular JavaScript and unified CSS architecture.</div>
            <div style="margin-top:6px">
                FSWEP & EOSD Candidate • Carleton University • 
                <a href="https://linkedin.com/in/rahiedatta/" target="_blank">LinkedIn</a> • 
                <a href="https://github.com/rah3/" target="_blank">GitHub</a>
            </div>
        </footer>
    `;
}

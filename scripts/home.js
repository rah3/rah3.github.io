// home.js - Landing content, logic-first design
export function renderHome(rootId) {
    const root = document.getElementById(rootId);
    if (!root) return;
    root.innerHTML = `
        <div class="home-hero" id="objective">
            <div class="home-label">FSWEP 2026 • Fourth-Year Computer Science</div>
            <h2 class="home-title">Focused on software engineering, database systems, and data integrity.</h2>
            <p class="home-subtitle">
                Portfolio rebuilt to match my official FSWEP resume format — structured workflows, clear documentation, 
                and deterministic rendering across devices. Currently seeking roles supporting public safety, regulatory systems, 
                IT operations, and scientific informatics.
            </p>
        </div>
    `;
}

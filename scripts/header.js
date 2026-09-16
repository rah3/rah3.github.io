// header.js - uses images/ folder: logo.png + profile.jpg
export function renderHeader(rootId) {
    const root = document.getElementById(rootId);
    if (!root) return;
    root.innerHTML = `
        <header class="site-header">
            <div class="header-top">
                <img src="./images/logo.png" alt="RD logo" class="header-logo" />
                <img src="./images/profile.jpg" alt="Rahie Datta" class="header-profile" onerror="this.style.display='none'" />
            </div>
            <h1 class="site-title">Rahie Datta</h1>
            <div class="contact-line">
                <span>Ottawa, Ontario</span>
                <span>•</span>
                <span>343-551-3518</span>
                <span>•</span>
                <a href="mailto:rahiedatta@gmail.com">rahiedatta@gmail.com</a>
            </div>
            <div class="contact-line" style="margin-top:4px">
                <a href="https://linkedin.com/in/rahiedatta/" target="_blank" rel="noopener">linkedin.com/in/rahiedatta</a>
                <span>•</span>
                <a href="https://github.com/rah3/" target="_blank" rel="noopener">github.com/rah3</a>
            </div>
        </header>
    `;
}

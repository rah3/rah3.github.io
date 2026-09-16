// contact.js - Contact module with #contact-container anchor
export function renderContact(rootId) {
    const root = document.getElementById(rootId);
    if (!root) return;
    root.innerHTML = `
        <div class="resume-section" id="contact-container">
            <h2 class="resume-section-header">Contact</h2>
            <div class="resume-body">
                <div class="contact-card">
                    <div><strong>Email:</strong> <a href="mailto:rahiedatta@gmail.com">rahiedatta@gmail.com</a></div>
                    <div><strong>Phone:</strong> <a href="tel:3435513518">343-551-3518</a></div>
                    <div><strong>Location:</strong> Ottawa, Ontario — open to remote / asynchronous</div>
                    <div><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/rahiedatta/" target="_blank">linkedin.com/in/rahiedatta</a></div>
                    <div><strong>GitHub:</strong> <a href="https://github.com/rah3/" target="_blank">github.com/rah3</a></div>
                    <div style="margin-top:8px; font-size:13px; color:#57534e;">
                        Strong preference for structured workflows, clear documentation, and remote or asynchronous environments.
                    </div>
                </div>
            </div>
        </div>
    `;
}

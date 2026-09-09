function loadContact() {
    const container = document.getElementById('contact-container');
    if (!container) return;
    container.innerHTML = `
        <div class="p-3 bg-white border-start border-primary border-4 shadow-sm small">
            <p class="mb-1"><strong>Email:</strong> <a href="mailto:rahiedatta@gmail.com">rahiedatta@gmail.com</a></p>
            <p class="mb-1"><strong>Phone:</strong> 343-551-3518</p>
            <p class="mb-1"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rahiedatta" target="_blank">linkedin.com/in/rahiedatta</a></p>
            <p class="mb-0"><strong>GitHub:</strong> <a href="https://github.com/rah3" target="_blank">github.com/rah3</a></p>
        </div>
    `;
}
document.addEventListener('DOMContentLoaded', loadContact);

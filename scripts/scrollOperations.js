// scrollOperations.js - Custom scroll operations and modular layout performance
// Enhances navigation performance, implements active tracking and smooth scroll

export function initScrollOperations() {
    const nav = document.getElementById('main-nav');
    const buttons = nav ? [...nav.querySelectorAll('button')] : [];
    const sectionMap = {
        objective: document.getElementById('objective'),
        education: document.getElementById('section-education'),
        skills: document.getElementById('section-skills'),
        experience: document.getElementById('section-experience'),
        projects: document.getElementById('section-projects'),
        awards: document.getElementById('section-awards'),
        contact: document.getElementById('section-contact')
    };

    // Smooth scroll
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            const el = sectionMap[target];
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Active observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id.replace('section-','');
                // special case objective
                const key = entry.target.id === 'objective' ? 'objective' : id;
                buttons.forEach(b => b.classList.toggle('active', b.dataset.target === key));
            }
        });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    Object.values(sectionMap).forEach(sec => {
        if (sec) observer.observe(sec);
    });

    // Nav shadow on scroll
    let lastY = window.scrollY;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (nav) {
            nav.style.boxShadow = y > 10 ? '0 4px 12px rgba(0,0,0,0.06)' : 'none';
        }
        lastY = y;
    }, { passive: true });
}

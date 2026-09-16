// scrollOperations.js - Custom scroll operations for #*-container anchors
// Handles direct links like https://rah3.github.io/#education-container, smooth scroll, active nav

export function initScrollOperations() {
    const nav = document.getElementById('main-nav');
    const navLinks = nav ? [...nav.querySelectorAll('a[data-target]')] : [];
    
    const sectionIds = [
        'objective-container',
        'education-container',
        'skills-container',
        'experience-container',
        'projects-container',
        'awards-container',
        'contact-container'
    ];

    const getSections = () => sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    // Smooth scroll with hash update
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            const target = document.getElementById(targetId);
            if (target) {
                history.pushState(null, '', `#${targetId}`);
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Handle initial hash on page load (e.g. /#education-container)
    function scrollToHash() {
        const hash = window.location.hash.replace('#','');
        if (hash) {
            const target = document.getElementById(hash);
            if (target) {
                setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
            }
        }
    }
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    // Active observer for both nav and footer
    const allNavLinks = document.querySelectorAll('nav a[data-target], .footer-nav a');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                // Highlight in main nav
                navLinks.forEach(a => {
                    a.classList.toggle('active', a.dataset.target === id);
                });
            }
        });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

    getSections().forEach(sec => observer.observe(sec));

    // Also observe lazily in case resume renders after
    const mo = new MutationObserver(() => {
        getSections().forEach(sec => {
            try { observer.observe(sec); } catch {}
        });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Nav shadow
    window.addEventListener('scroll', () => {
        if (nav) {
            nav.style.boxShadow = window.scrollY > 10 ? '0 4px 12px rgba(0,0,0,0.06)' : 'none';
        }
    }, { passive: true });
}

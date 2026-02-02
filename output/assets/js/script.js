document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Date
    const dateEl = document.getElementById('last-updated');
    if (dateEl) {
        const now = new Date();
        dateEl.textContent = now.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Smooth Scroll
    document.querySelectorAll('[data-scroll-target]').forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = button.getAttribute('data-scroll-target');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // Add visible class styling dynamically since we're manipulating style directly above
    const style = document.createElement('style');
    style.textContent = `
        .card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

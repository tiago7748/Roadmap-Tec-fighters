// Smooth scroll and update active navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#main-nav a');
    const sections = document.querySelectorAll('main section[id]');
    
    // Handle smooth scroll on nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
});

// Update active navigation link based on scroll position
function updateActiveNav() {
    const navLinks = document.querySelectorAll('#main-nav a');
    const sections = document.querySelectorAll('main section[id]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            currentSection = section.id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

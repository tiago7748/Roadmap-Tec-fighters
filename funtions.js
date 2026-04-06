// Dynamic Navigation
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const sections = document.querySelectorAll('main section[id]');
    
    // Populate navigation from sections
    sections.forEach(section => {
        const link = document.createElement('a');
        link.href = `#${section.id}`;
        link.textContent = section.querySelector('h2')?.textContent || section.id;
        link.onclick = (e) => {
            e.preventDefault();
            smoothScroll(section);
        };
        nav.appendChild(link);
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
});

// Smooth scroll to section
function smoothScroll(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateActiveNav();
}

// Update active navigation link
function updateActiveNav() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('#main-nav a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.id;
        }
    });
    
    // Update active states
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Mobile menu toggle (optional: add hamburger menu on small screens)
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    
    // Create hamburger button for mobile
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.innerHTML = '☰';
    
    // Toggle menu on mobile
    if (window.innerWidth <= 650) {
        nav.parentElement.insertBefore(hamburger, nav);
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', nav.classList.contains('active'));
        });
    }
});

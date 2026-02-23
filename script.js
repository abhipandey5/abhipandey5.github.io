// --- Publication Filtering ---
function filterPubs(category) {
    const items = document.querySelectorAll('.pub-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update button active state
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else if (item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// --- Active Nav Link Highlighting ---
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html'; // Get current file name

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Activate first filter button if on publications page
    if (currentPath === 'publications.html') {
        document.querySelector('.filter-btn').click(); 
    }
});

// --- Smooth Scrolling for Anchor Links (Optional) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
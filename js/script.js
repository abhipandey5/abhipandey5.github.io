document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. Active Navbar Link Highlighter ---
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentLocation = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        // Handle index.html being the root
        if ((currentLocation === "" || currentLocation === "index.html") && link.getAttribute('href') === 'index.html') {
             link.classList.add('active');
        } else if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // --- 2. Typing Text Animation (for Homepage) ---
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        const textArray = ["Cybersecurity.", "Machine Learning.", "Healthcare Informatics.", "Cryptography."];
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typingTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Typing speed
            } else {
                setTimeout(erase, 2000); // Pause before erasing
            }
        }

        function erase() {
            if (charIndex > 0) {
                typingTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50); // Erasing speed
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, 500); // Pause before typing next word
            }
        }
        
        type();
    }

    // --- 3. Scroll-to-Top Button ---
    const scrollTopBtn = document.querySelector('.scroll-to-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) { // Show button after 300px of scroll
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
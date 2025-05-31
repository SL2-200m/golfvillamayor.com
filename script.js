document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar ---
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile navigation
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile nav when a link is clicked
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });
    }
    
    // Change navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Solid white
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Semi-transparent
        }
    });

    // --- Smooth Scrolling for anchor links (redundant if CSS scroll-behavior is well supported) ---
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         if (this.getAttribute('href') !== "#" && document.querySelector(this.getAttribute('href'))) {
    //             e.preventDefault();
    //             document.querySelector(this.getAttribute('href')).scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });

    // --- Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Optional: stop observing once animated
            }
        });
    }, {
        rootMargin: '0px', // How far from the viewport edge to trigger
        threshold: 0.1   // What percentage of the element must be visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- Contact Form (Basic: just logs to console, prevent default) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => data[key] = value);
            
            console.log('Form Submitted:', data);
            alert('Thank you for your message! (This is a demo, data not actually sent)');
            contactForm.reset();
        });
    }

    // --- Footer: Current Year ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Effect
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Hero Slider (Mock logic since we only have one image, but structured for multiple)
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    const numbers = document.querySelectorAll('.slide-numbers span');
    let currentSlide = 0;

    function goToSlide(index) {
        // Remove active class from current slide and number
        slides[currentSlide].classList.remove('active');
        numbers[currentSlide].classList.remove('active-num');
        
        // Update currentSlide index with wrapping
        currentSlide = index;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        if (currentSlide >= slides.length) currentSlide = 0;
        
        // Add active class to new slide and number
        slides[currentSlide].classList.add('active');
        numbers[currentSlide].classList.add('active-num');
    }

    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });

    // 3. Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // 4. Portfolio Fullscreen Hover Effect
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    const portfolioBgs = document.querySelectorAll('.portfolio-bg');

    if (portfolioLinks.length > 0 && portfolioBgs.length > 0) {
        portfolioLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                const targetId = link.getAttribute('data-target');
                
                // Remove active class from all backgrounds
                portfolioBgs.forEach(bg => bg.classList.remove('active'));
                
                // Add active class to target background
                const targetBg = document.getElementById(targetId);
                if (targetBg) {
                    targetBg.classList.add('active');
                }
            });
        });
    }
});

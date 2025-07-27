document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');
    
    mobileMenuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
        mobileMenuBtn.innerHTML = navbar.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
            
            // Close other open items
            faqQuestions.forEach(q => {
                if (q !== this && q.parentElement.classList.contains('active')) {
                    q.parentElement.classList.remove('active');
                }
            });
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll animations using Intersection Observer
    const animateElements = document.querySelectorAll('.animate__animated');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Determine animation type based on element class
                if (element.classList.contains('service-card')) {
                    element.classList.add('animate__fadeInUp');
                } else if (element.classList.contains('gallery-item')) {
                    element.classList.add('animate__zoomIn');
                } else if (element.classList.contains('testimonial-card')) {
                    element.classList.add('animate__flipInX');
                } else if (element.classList.contains('faq-item')) {
                    element.classList.add('animate__fadeInRight');
                } else if (element.classList.contains('blog-card')) {
                    element.classList.add('animate__fadeInLeft');
                } else if (element.classList.contains('certification-item')) {
                    element.classList.add('animate__fadeInUp');
                } else {
                    element.classList.add('animate__fadeIn');
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Form submission
    const estimateForm = document.getElementById('estimateForm');
    if (estimateForm) {
        estimateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your request! We will contact you shortly.');
            this.reset();
        });
    }
    
    // Sticky header on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add wave animation to hero section
    const heroWaves = document.querySelector('.hero-waves svg path');
    let waveX = 0;
    
    function animateWaves() {
        waveX += 0.5;
        heroWaves.setAttribute('d', `M0,192L48,${197 + Math.sin(waveX * 0.02) * 10}C96,203,192,${213 + Math.sin(waveX * 0.03) * 10},288,${229 + Math.sin(waveX * 0.04) * 10}C384,245,480,${267 + Math.sin(waveX * 0.05) * 10},576,${250 + Math.sin(waveX * 0.06) * 10}C672,235,768,${181 + Math.sin(waveX * 0.07) * 10},864,${181 + Math.sin(waveX * 0.08) * 10}C960,181,1056,${235 + Math.sin(waveX * 0.09) * 10},1152,${234 + Math.sin(waveX * 0.1) * 10}C1248,235,1344,${181 + Math.sin(waveX * 0.11) * 10},1392,${154 + Math.sin(waveX * 0.12) * 10}L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z`);
        requestAnimationFrame(animateWaves);
    }
    
    animateWaves();
});
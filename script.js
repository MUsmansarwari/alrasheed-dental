// ===== TESTIMONIALS DATA =====
const testimonialsData = [
    {
        quote: "The support team is exceptional, guiding us through treatment options and providing ongoing assistance, ensuring complete satisfaction.",
        name: "Mohammad Ali",
        title: "Customer Support Lead",
        avatar: "MA"
    },
    {
        quote: "This dental clinic revolutionized my smile! The root canal treatment was completely painless and the staff was incredibly supportive throughout the process.",
        name: "Aisha Khan",
        title: "Marketing Manager",
        avatar: "AK"
    },
    {
        quote: "I had a fantastic experience at this clinic. The dentists are highly skilled, and the entire team made me feel comfortable and well-cared for.",
        name: "Usman Tariq",
        title: "Software Engineer",
        avatar: "UT"
    },
    {
        quote: "The best dental care I've ever received! From the friendly reception to the thorough examination, everything was top-notch.",
        name: "Fatima Zahra",
        title: "HR Director",
        avatar: "FZ"
    },
    {
        quote: "Highly recommend this clinic for anyone seeking professional and compassionate dental services. They truly care about their patients.",
        name: "Ali Hassan",
        title: "Financial Analyst",
        avatar: "AH"
    },
    {
        quote: "My fear of dentists is gone! The team here is incredibly gentle and understanding. I actually look forward to my appointments now.",
        name: "Sana Malik",
        title: "Project Manager",
        avatar: "SM"
    },
    {
        quote: "State-of-the-art equipment and a very knowledgeable staff. I'm impressed with the quality of service and the results of my treatment.",
        name: "Imran Ahmed",
        title: "Operations Manager",
        avatar: "IA"
    },
    {
        quote: "A truly pleasant experience from start to finish. The clinic is clean, modern, and the staff is exceptionally friendly and professional.",
        name: "Zara Begum",
        title: "Art Director",
        avatar: "ZB"
    },
    {
        quote: "I appreciate the detailed explanations and personalized treatment plan. I felt fully informed and confident in my dental care decisions.",
        name: "Hamza Nadeem",
        title: "Business Consultant",
        avatar: "HN"
    }
];

// Split testimonials into columns
const firstColumn = testimonialsData.slice(0, 3);
const secondColumn = testimonialsData.slice(3, 6);
const thirdColumn = testimonialsData.slice(6, 9);

// ===== POPULATE TESTIMONIALS =====
const populateTestimonials = () => {
    const columns = document.querySelectorAll('.testimonials-column');
    const columnData = [firstColumn, secondColumn, thirdColumn];
    
    columns.forEach((column, index) => {
        const track = column.querySelector('.testimonials-track');
        const data = columnData[index] || [];
        
        // Create two sets for seamless looping
        const testimonialSets = [data, data];
        
        testimonialSets.forEach(set => {
            set.forEach((testimonial, i) => {
                const card = document.createElement('div');
                card.className = 'testimonial-card';
                card.style.animationDelay = `${i * 0.1}s`;
                
                card.innerHTML = `
                    <div class="testimonial-content">
                        "${testimonial.quote}"
                    </div>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">${testimonial.avatar}</div>
                        <div class="testimonial-info">
                            <div class="testimonial-name">${testimonial.name}</div>
                            <div class="testimonial-title">${testimonial.title}</div>
                            <div class="testimonial-rating">
                                ${'★'.repeat(5)}
                            </div>
                        </div>
                    </div>
                `;
                track.appendChild(card);
            });
        });
    });
};

// Initialize testimonials when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    populateTestimonials();
    
    // Get DOM elements after testimonials are populated
    window.navbar = document.querySelector('.navbar');
    window.navLinks = document.querySelectorAll('.nav-link');
    window.mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    window.heroContent = document.querySelector('.hero-content');
    window.heroTitle = document.querySelector('.hero-title');
    window.heroCta = document.querySelector('.hero-cta');
    window.heroSection = document.querySelector('.hero');
    window.serviceCards = document.querySelectorAll('.service-card');
    window.aboutSection = document.querySelector('.about');
    window.reviewCards = document.querySelectorAll('.testimonial-card');
    window.reviewsSection = document.querySelector('.reviews');
    window.appointmentForm = document.getElementById('appointmentForm');
    window.backToTopBtn = document.getElementById('backToTop');
    window.contactCards = document.querySelectorAll('.contact-card');
    
    // Setup mobile menu functionality
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const closeButton = document.querySelector('.mobile-menu-close');
    const links = document.querySelectorAll('.mobile-menu-nav .nav-link');

    if (toggle && menu && overlay) {
        // Toggle menu
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const isOpen = menu.classList.contains('active');
            
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
            overlay.classList.toggle('active');
            
            if (!isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking overlay
        overlay.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close menu when clicking close button
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Close menu when clicking links
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                // Close menu
                toggle.classList.remove('active');
                menu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
                
                // Smooth scroll to section
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    setTimeout(() => {
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }, 300);
                }
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('active')) {
                toggle.classList.remove('active');
                menu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Setup observer after DOM is ready
    setupObserver();
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== SMOOTH SCROLL FOR NAVIGATION =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Check if mobile (no header) or desktop (header present)
            const isMobile = window.innerWidth <= 768;
            const offsetTop = targetSection.offsetTop - (isMobile ? 0 : 80);
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


// ===== ANIMATE COUNTERS =====
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    // Clear any existing timer
    if (element.timer) {
        clearInterval(element.timer);
    }
    
    element.timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(element.timer);
        }
        
        // Format number with commas for thousands
        if (target >= 1000) {
            element.textContent = Math.floor(current).toLocaleString();
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const setupObserver = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                                
                // Animate service cards
                if (element.classList.contains('service-card')) {
                    element.style.animation = 'slideUp 0.6s ease-out forwards';
                }
                
                // Animate about section
                if (element.classList.contains('about-visual')) {
                    element.style.animation = 'slideUp 0.8s ease-out forwards';
                }
                
                // Animate review cards
                if (element.classList.contains('review-card')) {
                    element.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
                
                // Animate contact cards
                if (element.classList.contains('contact-card')) {
                    element.style.animation = 'slideUp 0.6s ease-out forwards';
                }
            }
        });
    }, observerOptions);

        serviceCards.forEach(card => observer.observe(card));
    if (aboutSection) {
        const aboutVisual = aboutSection.querySelector('.about-visual');
        if (aboutVisual) observer.observe(aboutVisual);
    }
    reviewCards.forEach(card => observer.observe(card));
    document.querySelectorAll('.contact-card').forEach(card => observer.observe(card));
};

// ===== HERO ANIMATION ON LOAD =====
window.addEventListener('load', () => {
    
    // Animate hero content
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Animate hero title letter by letter
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        text.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.display = 'inline-block';
            span.style.transition = `all 0.5s ease-out ${index * 0.05}s`;
            heroTitle.appendChild(span);
            
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, 500 + index * 50);
        });
    }
    
    // Animate hero CTA buttons
    if (heroCta) {
        const buttons = heroCta.querySelectorAll('.btn');
        buttons.forEach((btn, index) => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                btn.style.transition = 'all 0.6s ease-out';
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, 1000 + index * 200);
        });
    }
});

// ===== FORM HANDLING =====
if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(appointmentForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = appointmentForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Booking...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        submitBtn.style.background = 'var(--gradient)';
        submitBtn.style.color = 'white';
        
        // Simulate API call
        setTimeout(() => {
            // Show success message
            showNotification('Appointment booked successfully! We will contact you soon.', 'success');
            
            // Reset form
            appointmentForm.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            submitBtn.style.background = '';
            submitBtn.style.color = '';
        }, 2000);
    });
}

// ===== FORM BUTTON STYLING FIX =====
const formButtons = document.querySelectorAll('#appointmentForm button[type="submit"]');
formButtons.forEach(btn => {
    btn.style.background = 'var(--gradient)';
    btn.style.color = 'white';
    btn.style.border = 'none';
    
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px)';
        btn.style.boxShadow = 'var(--shadow-medium)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
        btn.style.boxShadow = '';
    });
});

// ===== NOTIFICATION SYSTEM =====
const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            max-width: 400px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }
        
        .notification-success {
            background: linear-gradient(135deg, #06D6A0, #05a67f);
        }
        
        .notification-error {
            background: linear-gradient(135deg, #e63946, #d62828);
        }
        
        .notification-info {
            background: linear-gradient(135deg, #0077B6, #005f8a);
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
};

// ===== HERO MOUSE ANIMATION =====
if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { width, height } = heroSection.getBoundingClientRect();
        const x = (clientX / width) * 100;
        const y = (clientY / height) * 100;
        
        // Update gradient position based on mouse movement
        heroSection.style.background = `radial-gradient(circle at ${x}% ${y}%, #00B4D8 0%, #0077B6 50%, #03045E 100%)`;
    });
    
    // Reset gradient on mouse leave
    heroSection.addEventListener('mouseleave', () => {
        heroSection.style.background = 'var(--gradient)';
    });
}

// ===== BACK TO TOP BUTTON =====
window.addEventListener('scroll', () => {
    // Don't show back to top button on mobile devices
    if (window.innerWidth <= 768) {
        backToTopBtn.classList.remove('visible');
        return;
    }
    
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== CONTACT CARDS CLICK HANDLING =====
contactCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Prevent default if it's already a link
        if (card.tagName === 'A') {
            return;
        }
        
        // Add click feedback
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    });
});

// ===== SERVICE CARD HOVER EFFECT =====
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== DOCTOR CARD FLOAT ANIMATION =====
const doctorCard = document.querySelector('.hero-doctor-card');
if (doctorCard) {
    let floatDirection = 1;
    let currentPosition = 0;
    
    setInterval(() => {
        currentPosition += 0.5 * floatDirection;
        
        if (currentPosition >= 10 || currentPosition <= -10) {
            floatDirection *= -1;
        }
        
        doctorCard.style.transform = `translateY(${currentPosition}px)`;
    }, 50);
}

// ===== FORM INPUT ANIMATIONS =====
document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
    
    // Check initial state
    if (input.value) {
        input.parentElement.classList.add('focused');
    }
});

// ===== WHATSAPP BUTTON HOVER EFFECT =====
const whatsappBtn = document.querySelector('.whatsapp-btn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('mouseenter', () => {
        whatsappBtn.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    whatsappBtn.addEventListener('mouseleave', () => {
        whatsappBtn.style.transform = 'scale(1) rotate(0deg)';
    });
}

// ===== LAZY LOADING FOR IMAGES (if any are added later) =====
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));


// ===== PERFORMANCE OPTIMIZATION =====
// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
        // Scroll-based animations here
    }, 16);
});

// ===== CONSOLE MESSAGE =====
console.log('%c🦷 Al-Rasheed Dental Clinic - Premium Dental Care in Lahore', 'font-size: 20px; font-weight: bold; color: #0077B6;');
console.log('%cWebsite designed and developed with modern 2025 standards', 'font-size: 14px; color: #00B4D8;');

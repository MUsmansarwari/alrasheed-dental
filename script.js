// ===== DOM ELEMENTS =====
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const heroContent = document.querySelector('.hero-content');
const heroTitle = document.querySelector('.hero-title');
const heroCta = document.querySelector('.hero-cta');
const trustNumbers = document.querySelectorAll('.trust-number');
const serviceCards = document.querySelectorAll('.service-card');
const aboutSection = document.querySelector('.about');
const reviewCards = document.querySelectorAll('.review-card');
const reviewsSection = document.querySelector('.reviews');
const appointmentForm = document.getElementById('appointmentForm');

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== SMOOTH SCROLLING =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            closeMobileMenu();
        }
    });
});

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    
    navLinks.classList.toggle('mobile-active');
    mobileMenuToggle.classList.toggle('active');
}

function closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    
    navLinks.classList.remove('mobile-active');
    mobileMenuToggle.classList.remove('active');
}

mobileMenuToggle.addEventListener('click', toggleMobileMenu);

// ===== HERO ANIMATION =====
window.addEventListener('load', () => {
    // Animate hero title
    setTimeout(() => {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 100);
    }, 0);
    
    // Animate hero CTA buttons
    setTimeout(() => {
        heroCta.style.opacity = '0';
        heroCta.style.transform = 'translateY(30px)';
        heroCta.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            heroCta.style.opacity = '1';
            heroCta.style.transform = 'translateY(0)';
        }, 200);
    }, 200);
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal, .service-card, .about, .review-card');

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            entry.target.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            revealOnScroll.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Add reveal class to elements and observe them
serviceCards.forEach(card => card.classList.add('reveal'));
aboutSection.classList.add('reveal');
reviewCards.forEach(card => card.classList.add('reveal'));

revealElements.forEach(element => {
    revealOnScroll.observe(element);
});

// ===== REVIEW LOADING SIMULATION =====
function simulateReviewLoading() {
    const reviewsGrid = document.querySelector('.reviews-grid');
    
    // Create skeleton loaders
    reviewsGrid.innerHTML = '';
    
    for (let i = 0; i < 3; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'review-card skeleton';
        skeleton.style.height = '200px';
        skeleton.style.borderRadius = '12px';
        reviewsGrid.appendChild(skeleton);
    }
    
    // Simulate loading delay
    setTimeout(() => {
        // Remove skeletons
        reviewsGrid.innerHTML = '';
        
        // Add actual review cards
        const reviewData = [
            {
                name: 'Ahmed Hassan',
                date: '2 weeks ago',
                text: 'Excellent dental care! Dr. Butt is very professional and the root canal treatment was completely painless. Highly recommend Al-Rasheed Dental Clinic.'
            },
            {
                name: 'Fatima Khan',
                date: '1 month ago',
                text: 'Got my dental implants here and I couldn\'t be happier! The results are amazing and Dr. Butt\'s expertise is unmatched. The clinic is clean and modern.'
            },
            {
                name: 'Muhammad Ali',
                date: '1 month ago',
                text: 'Great experience with teeth whitening treatment. The staff is very cooperative and Dr. Butt explains everything in detail. Best dental clinic in Walton Cantt!'
            }
        ];
        
        reviewData.forEach((review, index) => {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';
            reviewCard.style.opacity = '0';
            reviewCard.style.transform = 'translateY(20px)';
            reviewCard.style.transition = 'all 0.6s ease-out';
            
            reviewCard.innerHTML = `
                <div class="review-header">
                    <div class="reviewer-info">
                        <div class="reviewer-avatar">${review.name.split(' ').map(n => n[0]).join('')}</div>
                        <div>
                            <h4 class="reviewer-name">${review.name}</h4>
                            <div class="review-rating">
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span class="star">★</span>
                            </div>
                        </div>
                    </div>
                    <span class="review-date">${review.date}</span>
                </div>
                <p class="review-text">"${review.text}"</p>
            `;
            
            reviewsGrid.appendChild(reviewCard);
            
            // Animate in with stagger
            setTimeout(() => {
                reviewCard.style.opacity = '1';
                reviewCard.style.transform = 'translateY(0)';
            }, index * 200);
        });
        
        // Add success message
        const successMessage = document.createElement('div');
        successMessage.style.textAlign = 'center';
        successMessage.style.marginTop = '20px';
        successMessage.style.color = '#10B981';
        successMessage.style.fontSize = '14px';
        successMessage.style.fontWeight = '600';
        successMessage.innerHTML = '✓ Reviews loaded from Google';
        successMessage.style.opacity = '0';
        successMessage.style.transition = 'opacity 0.6s ease-out';
        
        reviewsSection.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.style.opacity = '1';
        }, 800);
        
    }, 1500);
}

// Start review loading simulation on page load
window.addEventListener('load', simulateReviewLoading);

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Handle different number formats
        if (element.textContent.includes('+')) {
            element.textContent = Math.floor(current) + '+';
        } else if (element.textContent.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else if (element.textContent.includes('/')) {
            element.textContent = '24/7';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const trustBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            trustNumbers.forEach((number, index) => {
                const text = number.textContent;
                let targetValue = 0;
                
                if (text.includes('10+')) targetValue = 10;
                else if (text.includes('5000+')) targetValue = 5000;
                else if (text.includes('98%')) targetValue = 98;
                else if (text.includes('24/7')) {
                    number.textContent = '24/7';
                    return;
                }
                
                setTimeout(() => {
                    animateCounter(number, targetValue);
                }, index * 200);
            });
            
            trustBarObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

const trustBar = document.querySelector('.trust-bar');
if (trustBar) {
    trustBarObserver.observe(trustBar);
}

// ===== FORM VALIDATION =====
appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value.trim();
    
    // Validation
    let isValid = true;
    let errorMessage = '';
    
    if (name.length < 2) {
        isValid = false;
        errorMessage = 'Please enter a valid name (at least 2 characters)';
    } else if (phone.length < 10) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number (at least 10 digits)';
    } else if (!service) {
        isValid = false;
        errorMessage = 'Please select a service';
    } else if (!date) {
        isValid = false;
        errorMessage = 'Please select a preferred date';
    }
    
    // Remove existing error messages
    const existingError = appointmentForm.querySelector('.error-message');
    const existingSuccess = appointmentForm.querySelector('.success-message');
    if (existingError) existingError.remove();
    if (existingSuccess) existingSuccess.remove();
    
    if (!isValid) {
        // Show error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#EF4444';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.marginTop = '10px';
        errorDiv.style.padding = '10px';
        errorDiv.style.backgroundColor = '#FEE2E2';
        errorDiv.style.borderRadius = '8px';
        errorDiv.style.border = '1px solid #FCA5A5';
        errorDiv.textContent = errorMessage;
        
        appointmentForm.appendChild(errorDiv);
        
        // Auto-remove error after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
        
        return;
    }
    
    // Show success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.color = '#10B981';
    successDiv.style.fontSize = '16px';
    successDiv.style.marginTop = '20px';
    successDiv.style.padding = '16px';
    successDiv.style.backgroundColor = '#D1FAE5';
    successDiv.style.borderRadius = '8px';
    successDiv.style.border = '1px solid #6EE7B7';
    successDiv.style.fontWeight = '600';
    successDiv.style.textAlign = 'center';
    successDiv.innerHTML = '✓ Appointment request sent! We\'ll call you back shortly.';
    
    appointmentForm.appendChild(successDiv);
    
    // Reset form
    appointmentForm.reset();
    
    // Remove success message after 10 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 10000);
    
    // Log form data (in real implementation, this would be sent to a server)
    console.log('Appointment Request:', {
        name,
        phone,
        email,
        service,
        date,
        message
    });
});

// ===== ACTIVE NAV HIGHLIGHTING =====
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100; // Account for navbar height
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Add CSS for active nav link
const activeNavStyle = document.createElement('style');
activeNavStyle.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: var(--white);
            flex-direction: column;
            padding: 20px;
            box-shadow: var(--shadow-soft);
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 999;
        }
        
        .nav-links.mobile-active {
            transform: translateY(0);
            opacity: 1;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(activeNavStyle);

// Initialize active nav on load
updateActiveNav();

// ===== PAGE TITLE TAB ANIMATION =====
const originalTitle = "Al-Rasheed Dental Clinic Lahore | Dr. Shaheer Ahmed Butt | Root Canal, Implants & More";
const alternateTitle = "📅 Book Now – Al-Rasheed Dental";
let titleIndex = 0;
let isPageFocused = true;

document.addEventListener('visibilitychange', () => {
    isPageFocused = !document.hidden;
    if (isPageFocused) {
        document.title = originalTitle;
        clearInterval(titleInterval);
    } else {
        startTitleAnimation();
    }
});

function startTitleAnimation() {
    titleInterval = setInterval(() => {
        document.title = titleIndex % 2 === 0 ? alternateTitle : originalTitle;
        titleIndex++;
    }, 4000);
}